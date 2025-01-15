'use client'

import Image from "next/image"

import logo from "@/public/logo.png"
import {TrendingUp} from  "lucide-react"

import React from "react";


export function Header() {
    return (
        <div className="h-[50vh] p-1 flex box-rotate rounded-xl">
            <div className="flex lg:grid grid-cols-2 gap-4 p-4 items-center bg-background rounded-xl overflow-hidden">
                <div className="flex flex-col justify-center gap-8">
                    <div className="flex items-center gap-3">
                        <h1 className="text-4xl font-bold text-nowrap">Elevating DeFi with AI Text & Visuals</h1>
                        <div className="p-1 rounded-xl">
                            <TrendingUp size={32} className="stroke-green-400"/>
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
                <Image src={logo} alt="Drawrite Preview" height={400} width={400}
                       className="lg:block hidden rounded-xl overflow-hidden ml-auto"/>
            </div>
        </div>
    )
}