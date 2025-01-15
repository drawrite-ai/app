import {Grokit} from '@/lib/grokit';

export async function POST(req: Request) {
    const { message } = await req.json();
    const authToken = process.env.X_AUTH_TOKEN as string;
    const csrfToken = process.env.X_CSRF_TOKEN as string;

    const grokit = new Grokit(authToken, csrfToken);

    try {
        const generatedText = await grokit.image(message);
        console.log(generatedText);
        return new Response(JSON.stringify({ response: generatedText }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error generating text:', error);
        throw error;
    }
}
