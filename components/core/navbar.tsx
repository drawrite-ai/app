'use client'

import React from "react";

import {Separator} from "@/components/ui/separator"
import {Button} from "@/components/ui/button";

import {ThemeSwitch} from "@/components/core/theme/theme-switch";
import {Links} from "@/components/core/links";
import Link from "next/link";
import {usePathname} from "next/navigation";

export function Navbar() {
    const path = usePathname()
    return (
       path !== "/chat" && <div className="lg:sticky relative top-2 flex md:flex-row md:w-fit w-full flex-col p-4 md:gap-4 items-center mx-auto my-4 border shadow-lg shadow-zinc-800/40 rounded-lg bg-transparent backdrop-blur-xl transition z-50 select-none">
            <div className="flex flex-wrap gap-2">
                <Link href="/" className="logo text-[2.5em] opacity-70">DRAWRITE</Link>
                <Separator orientation="vertical"/>
            </div>
            <div className="flex gap-1 mx-auto">
                <Links/>
            </div>
            <div className="flex items-center gap-3">
                <Button size="lg" asChild={true}>
                    <Link href={"/chat"}>
                        <span className="font-semibold">Get Started</span>
                    </Link>
                </Button>
                <ThemeSwitch/>
            </div>
        </div>
    )
}