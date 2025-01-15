"use client"

import {Jupiter, Raydium, Orca, Pump, DexScreener} from "@/public/icons";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Card, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"
import {Separator} from "@/components/ui/separator";

const integratedProjects = [
    {
        title: "jup.ag",
        icon: Jupiter,
        description: "A DEX aggregator on Solana that finds the best prices."
    },
    {
        title: "raydium.io",
        icon: Raydium,
        description: "A Solana-based DEX featuring an AMM (Automated Market Maker)."
    },
    {
        title: "orca.so",
        icon: Orca,
        description: "A user-friendly AMM exchange within the Solana ecosystem."
    },
    {
        title: "pump.fun",
        icon: Pump,
        description: "A Solana-based platform that allows users to easily create their own tokens."
    },
    {
        title: "dexscreener.com",
        icon:   DexScreener,
        description: "A tool for monitoring DEX transactions and data across multiple blockchains."
    }
]

export function IntegratedProjects(){
    return (
        <div className="lg:w-1/2 w-11/12">
            <div className="relative flex items-center gap-2 overflow-hidden">
                <span className="logo text-[1.35em]">Integrated DApps</span>
            </div>
            <Separator className="my-4"/>
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    {integratedProjects.map((suggestion, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <Card className="w-full h-full">
                                <CardHeader >
                                    <div className="flex items-center gap-2">
                                        <Avatar>
                                            <AvatarImage src={suggestion.icon.src} alt={suggestion.title}/>
                                            <AvatarFallback>{suggestion.title[0]}</AvatarFallback>
                                        </Avatar>
                                        <CardTitle>{suggestion.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardFooter>
                                    <span className="opacity-70 text-xs">
                                        {suggestion.description}
                                    </span>
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}