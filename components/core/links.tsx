import {Github,X,Telegram} from "@/public/icons";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {BookText} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";

export function Links() {
    return (
        <div className="flex items-center gap-2 mx-auto w-fit p-2 rounded-xl">
            <Button variant="ghost" className="p-1" asChild={true}>
                <Link href="https://drawrite.gitbook.io" target="_blank">
                    <BookText/>
                    <span className="font-semibold">Docs</span>
                </Link>
            </Button>
            <Separator orientation="vertical"/>
            <Button variant="ghost" size="icon" className="p-1" asChild={true}>
                <Link href="https://x.com/drawrite_ai">
                    <Image src={X} alt={"X"} className="w-full h-full rounded-xl"/>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" className="p-1" asChild={true}>
                <Link href="https://t.co/YQbv50T0un">
                    <Image src={Telegram} alt={"Telegram"} className="w-full h-full rounded-xl"/>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" className="p-1" asChild={true}>
                <Link href="">
                    <Image src={Github} alt={"Github"} className="w-full h-full rounded-xl"/>
                </Link>
            </Button>
            <Separator orientation="vertical"/>
        </div>
    );
}