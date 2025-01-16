import fetch, {HeadersInit} from 'node-fetch';

enum GrokModels {
    GROK_2 = 'grok-2',
    GROK_2_MINI = 'grok-2-mini',
}

interface AddResponsePayload {
    responses: { message: string; sender: number }[];
    systemPromptName: string;
    grokModelOptionId: string;
    conversationId: string;
}

interface FeedbackLabel {
    id: string;
    labelEn: string;
    icon: string;
}

type ToolsUsed = object

type RequestEntities = object

type ResponseEntities = object

interface Result {
    sender: string;
    message?: string;
    feedbackLabels?: FeedbackLabel[];
    toolsUsed?: ToolsUsed;
    requestEntities?: RequestEntities;
    responseEntities?: ResponseEntities;
}

interface StreamResponseChunk {
    result?: Result;
}

class Grokit {
    private BEARER_TOKEN =
        'AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA';

    private authToken: string;
    private csrfToken: string;
    private cookie: string;
    private headers: HeadersInit;

    constructor(authToken?: string, csrfToken?: string) {
        this.authToken = authToken || process.env.X_AUTH_TOKEN as string;
        this.csrfToken = csrfToken || process.env.X_CSRF_TOKEN as string;

        if (!this.authToken || !this.csrfToken) {
            throw new Error('X_AUTH_TOKEN and X_CSRF_TOKEN must be provided');
        }

        this.cookie = this.createCookie();
        this.headers = this.createHeaders();
    }

    private createCookie(): string {
        return `auth_token=${this.authToken}; ct0=${this.csrfToken};`;
    }

    private createHeaders(): HeadersInit {
        return {
            'X-Csrf-Token': this.csrfToken as string,
            Authorization: `Bearer ${this.BEARER_TOKEN}`,
            'Content-Type': 'application/json',
            Cookie: this.cookie,
        };
    }

    async createConversation(): Promise<string | undefined> {
        const url = 'https://x.com/i/api/graphql/UBIjqHqsA5aixuibXTBheQ/CreateGrokConversation';
        const payload = {
            variables: {},
            queryId: 'UBIjqHqsA5aixuibXTBheQ',
        };

        const response = await this.makeRequest(url, payload) as {
            data: { create_grok_conversation: { conversation_id: string } }
        };
        if (response && response.data) {
            return response.data.create_grok_conversation.conversation_id;
        }
        return undefined;
    }

    async generate(
        message: string,
        conversationId?: string,
        systemPromptName = '',
        modelId: GrokModels | string = GrokModels.GROK_2_MINI
    ): Promise<string> {
        conversationId = await this.ensureConversationId(conversationId);
        const responseChunks = await this.streamResponse(conversationId, message, systemPromptName, modelId);
        const text = responseChunks.join('');
        return text.replace(/\[link\]\(#tweet=\d+\)\n\n/g, '').replace(/\[link\]\n\n==\n\n/g, '').replace(/==\n\n\[link\]\(#tweet=\d+\)/g, '');
    }

    async image(prompt: string): Promise<Buffer> {
        const imageUrl = await this.getImageUrl(prompt);
        const imageResponse = await fetch(imageUrl);

        if (imageResponse.ok) {
            return Buffer.from(await imageResponse.arrayBuffer());
        }

        throw new Error('Failed to download the image');
    }

    async imageUrl(prompt: string): Promise<string> {
        return this.getImageUrl(prompt);
    }

    private async getImageUrl(prompt: string): Promise<string> {
        const conversationId = await this.createConversation();
        if (!conversationId) {
            throw new Error('Failed to create conversation');
        }

        const imagePrompt = `Generate an image of "${prompt}"`;
        const responseChunks = await this.streamResponse(conversationId, imagePrompt, '', GrokModels.GROK_2_MINI);

        for (const chunk of responseChunks) {
            try {
                const data = JSON.parse(chunk);
                if (data.result?.imageAttachment?.imageUrl) {
                    return data.result.imageAttachment.imageUrl;
                }
            } catch {
                continue;
            }
        }

        throw new Error('Failed to generate the image');
    }

    private async ensureConversationId(conversationId?: string): Promise<string> {
        let id = conversationId;
        if (!id) {
            id = await this.createConversation();
            if (!id) {
                throw new Error('Failed to create conversation');
            }
        }
        return id;
    }

    private async streamResponse(
        conversationId: string,
        message: string,
        systemPromptName: string,
        modelId: GrokModels | string
    ): Promise<string[]> {
        const url = 'https://api.x.com/2/grok/add_response.json';
        const payload: AddResponsePayload = {
            responses: [{message, sender: 1}],
            systemPromptName,
            grokModelOptionId: typeof modelId === 'string' ? modelId : modelId,
            conversationId,
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Error adding response: ${response.statusText}`);
        }

        const chunks: string[] = [];
        const text = await response.text();

        const jsonChunks = text.split('\n').filter(line => line.trim().length > 0);

        for (const chunk of jsonChunks) {
            try {
                const parsedChunk: StreamResponseChunk = JSON.parse(chunk);
                if (parsedChunk.result && parsedChunk.result.message) {
                    chunks.push(parsedChunk.result.message);
                }
            } catch (error) {
                console.error('Failed to parse chunk:', chunk, error);
            }
        }

        return chunks;
    }

    private async makeRequest(url: string, payload: object): Promise<unknown | Error> {

        const response = await fetch(url, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            return await response.json();
        }

        throw new Error(`Error making request: ${response.statusText}`);
    }
}

export {Grokit, GrokModels};
