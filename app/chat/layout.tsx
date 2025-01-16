import {IntegratedProjects} from "@/components/core/chat/integrated-projects";
import Link from "next/link";
import React from "react";
import {AI} from "@/public/icons"
import Image from "next/image";
import {Timer} from "@/components/core/timer";
import {AspectRatio} from "@/components/ui/aspect-ratio";


export default function ChatLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const date = new Date("2025-01-17T00:00:00")
    return (
        <div className="relative overflow-hidden h-screen">
            <AspectRatio ratio={16 / 9}>
                <Image src={AI} alt={"AI"} className=" h-full w-full rounded-md object-cover opacity-5 -z-10" fill/>
                <div className="flex flex-col items-center h-full gap-3 z-50 mt-8">
                    <div className="flex">
                        <Link href="/">
                            <h1 className="flex logo lg:text-[3em] text-[2em] ml-5">DRAWRITE</h1>
                        </Link>
                    </div>
                    <div>
                        {date < new Date() && children}
                        {date > new Date() && <Timer date={date}/>}
                    </div>
                    <IntegratedProjects/>
                </div>
            </AspectRatio>

        </div>
    )
}