'use client'

import React, { useEffect, useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send,Loader2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {AI} from "@/public/icons";

import { remark } from 'remark';
import html from 'remark-html';

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function ChatPage() {
    const [waiting, setWaiting] = useState(false);

    const [prompt, setPrompt] = useState('');
    const [prompts, setPrompts] = useState<JSX.Element[]>([]);

    const handlePrompt = async () => {
        setWaiting(true);
        setPrompts(prevMessages => [
            ...prevMessages,
            <UserMessage key={prevMessages.length} message={prompt} />,
        ]);
        setPrompt('');
        const res = await fetch('/api/ai/prompt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: prompt }),
        });

        const data = await res.json();
        const processedContent = await remark()
            .use(html)
            .process(data.response);
        const contentHtml = processedContent.toString();
        if (res.ok) {
            setPrompts(prevMessages => [
                ...prevMessages,
                <AIMessage key={prevMessages.length + 1} message={contentHtml} />,
            ]);
            setWaiting(false);
        } else {
            alert(data.error);
        }
    };

    const [imagePrompt, setImagePrompt] = useState('');
    const [imagesPrompts, setImagesPrompts] = useState<JSX.Element[]>([]);

    const handleImage = async () => {
        setImagesPrompts(prevMessages => [
            ...prevMessages,
            <UserMessage key={prevMessages.length} message={imagePrompt} />,
        ]);
        setImagePrompt('');
        const res = await fetch('/api/ai/image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: prompt }),
        });

        const data = await res.text();
        console.log(data);
        const processedContent = await remark()
            .use(html)
            .process(data.response);
        const contentHtml = processedContent.toString();
        if (res.ok) {
            setImagesPrompts(prevMessages => [
                ...prevMessages,
                <AIMessage key={prevMessages.length + 1} message={contentHtml} />,
            ]);
        } else {
            alert(data.error);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <Tabs defaultValue="prompt" className="mx-auto">
                <TabsList className="grid w-[400px] grid-cols-2 mx-auto">
                    <TabsTrigger value="prompt">Prompt</TabsTrigger>
                    <TooltipProvider>
                        <Tooltip >
                            <TooltipTrigger asChild>
                                <TabsTrigger value="image" unselectable="on">Image Generate</TabsTrigger>
                            </TooltipTrigger>
                            <TooltipContent >
                                <div>
                                    Coming soon...
                                </div>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </TabsList>
                <TabsContent value="prompt" className="flex flex-col gap-4">
                    {prompts.length !== 0 && (
                        <ScrollArea className="h-[50vh] rounded-lg overflow-auto">
                            <div className="p-4">
                                {prompts.map((message: JSX.Element, index: number) => (
                                    <div key={index}>
                                        {message}
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    )}

                    {!waiting ? <div className="bg-zinc-800 rounded-full p-2 grid grid-cols-12 gap-2 w-fit mx-auto">
                        <Input
                            placeholder="type a text..."
                            className="h-12 rounded-full border-none shadow-none lg:col-span-11 col-span-10"
                            type="search"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handlePrompt()}
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="group rounded-full bg-white transition lg:col-span-1 col-span-2 m-auto"
                            onClick={handlePrompt}
                        >
                            <Send className="stroke-black group-hover:stroke-white transition"/>
                        </Button>
                    </div> : <div
                        className="relative bg-zinc-800 rounded-full p-2 grid grid-cols-12 gap-2 w-fit mx-auto">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                            <Loader2 className=" animate-spin h-6 w-6"/>
                        </div>
                        <Input
                            placeholder="type a text..."
                            className="h-12 rounded-full border-none shadow-none lg:col-span-11 col-span-10"
                            type="search"
                            value={prompt}
                            disabled={true}
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="group rounded-full bg-white transition lg:col-span-1 col-span-2 m-auto"
                            disabled={true}
                        >
                            <Send className="stroke-black group-hover:stroke-white transition"/>
                        </Button>
                    </div>}
                </TabsContent>
                <TabsContent value="image">
                    {imagesPrompts.length !== 0 && (
                        <ScrollArea className="h-[50vh] border rounded-lg overflow-auto">
                            <div className="p-4">
                                {imagesPrompts.map((message: JSX.Element, index: number) => (
                                    <div key={index}>
                                        {message}
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    )}

                    <div className="bg-zinc-800 rounded-full p-2 grid grid-cols-12 gap-2 w-fit mx-auto">
                        <Input
                            placeholder="type a text..."
                            className="h-12 rounded-full border-none shadow-none lg:col-span-11 col-span-10"
                            type="search"
                            value={imagePrompt}
                            onChange={(e) => setImagePrompt(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' }
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="group rounded-full bg-white transition lg:col-span-1 col-span-2 m-auto"
                            onClick={() => {}}
                        >
                            <Send className="stroke-black group-hover:stroke-white transition"/>
                        </Button>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

function UserMessage({message}: { message: string }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
    }, [message]);
    return (
        <div className="bg-zinc-800 w-fit p-4 rounded-xl ml-auto" ref={scrollRef}>
            {message}
        </div>
    );
}

function AIMessage({message}: { message: string }) {
    const [streamText, setStreamText] = useState('');
    const [index, setIndex] = useState(0);

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < message.length) {
                setStreamText((prev) => prev + message[index]);
                setIndex((prev) => prev + 1);
            } else {
                clearInterval(interval);
            }
        }, 20);
        return () => clearInterval(interval);
    }, [index, message]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [streamText]);

    return (
        <div className="flex items-end gap-3">
            <Avatar  ref={scrollRef}>
                <AvatarImage src={AI.src} alt="drawrite" />
                <AvatarFallback>DW</AvatarFallback>
            </Avatar>
            <div className="my-4" dangerouslySetInnerHTML={{__html: streamText}}>
            </div>
        </div>
    );
}
