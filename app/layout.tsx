import type {Metadata} from "next";
import "./globals.css";

import {ThemeProvider} from "@/components/core/theme/theme-provider";
import {Navbar} from "@/components/core/navbar";
import {Footer} from "@/components/core/footer";
import WalletAddress from "@/components/core/wallet-address";
import { Toaster } from "@/components/ui/toaster"


export const metadata: Metadata = {
    title: "Drawrite AI",
    description: "Drawrite aims to offer a unique experience in the DeFi world by merging the crypto ecosystem with the most advanced AI technologies.",
    category: "DeFi",

};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const address = process.env.WALLET_ADDRESS || "?"
    return (
        <html lang="en">
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Navbar/>
            <WalletAddress address={address} className="w-fit mx-auto"/>
            <div className="select-none">
                {children}
            </div>
            <Footer/>
        </ThemeProvider>
        <Toaster/>
        </body>
        </html>
    );
}
