'use client';

import React from "react";
import {Badge} from "@/components/ui/badge";
import {Copy,CheckCheck} from "lucide-react";
import { useToast } from "@/hooks/use-toast"
import {usePathname} from "next/navigation";

export default function WalletAddress({className, address}: { className?: string, address: string }) {
    const path = usePathname()
    const { toast } = useToast()
    const copy = () => {
        console.log("copying")
        navigator.clipboard.writeText(address).then(() => {
            toast({
                title: "Copied",
                description: "Address copied to clipboard",
                className: "rounded-lg",
                action: (
                    <CheckCheck size={16} className="stroke-green-400"/>
                )
            })
        });
    }
    return (
        path !== "/chat" && <div className={`${className} cursor-pointer select-none`} onClick={() => copy()}>
            <Badge className="flex items-center gap-2 p-2" variant="outline">
                <Copy className="hover:stroke-zinc-400" size="16"/>
                <span>{address}</span>
            </Badge>
        </div>
    )
}