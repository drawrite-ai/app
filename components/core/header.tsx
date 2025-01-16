'use client'

import Image from "next/image"

import Preview from "@/public/preview.png"
import {TrendingUp} from  "lucide-react"

import React from "react";


export function Header() {
    return (
        <div className="lg:h-[50vh] h-fit p-1 flex box-rotate rounded-xl">
            <div className="flex xl:grid grid-cols-2 gap-4 p-4 items-center bg-background rounded-xl ">
                <div className="flex flex-col justify-center gap-8">
                    <div className="flex items-start gap-3">
                        <h1 className="text-4xl font-bold">Elevating DeFi with AI Text & Visuals</h1>
                        <div className="p-1 rounded-xl border">
                            <TrendingUp size={48} className="stroke-green-400 p-1"/>
                        </div>
                    </div>
                    <div className="text-lg text-muted-foreground">
                        Drawrite aims to offer a unique experience in the DeFi world by merging the crypto ecosystem
                        with
                        the most advanced AI technologies. Our name, derived from the words “Draw” and “Write,” reflects
                        our
                        mission to provide both textual information and visual analysis. We strive to guide users in a
                        clear
                        and practical manner by not only offering written content but also illustrative graphics and
                        analysis.
                    </div>
                </div>
                <Image src={Preview} alt="Drawrite Preview"
                       className="xl:block hidden rounded-xl overflow-hidden ml-auto h-full w-auto"/>
            </div>
        </div>
    )
}