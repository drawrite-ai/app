import {IntegratedProjects} from "@/components/core/chat/integrated-projects";
import Link from "next/link";
import React from "react";
import {AI} from "@/public/icons"
import Image from "next/image";


export default function ChatLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="pt-4">
            <Image src={AI} alt={"AI"} className="absolute top-0 right-0 w-1/2 opacity-5 -z-10"/>
            <div className="flex flex-col items-center h-full gap-3">
                <div className="flex">
                    <Link href="/">
                        <h1 className="flex logo text-[3em]">DRAWRITE</h1>
                    </Link>
                </div>
                <div>
                    {children}
                </div>
                <IntegratedProjects/>
            </div>
        </div>
    )
}