'use client'

import {usePathname} from "next/navigation";

export function Footer() {
    const path = usePathname()
    return (
        path !== "/chat" &&  <div className="flex flex-col items-center justify-center w-full h-24 select-none">
            <p className="text-sm">© {new Date().getFullYear()} Drawrite. All rights reserved.</p>
        </div>
    );
}