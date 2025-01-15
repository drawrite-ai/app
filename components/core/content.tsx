import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Bot, Bug, MessageCircleQuestion, SquareLibrary} from "lucide-react";

export function Content() {
    return (
        <div className="plaid p-8 flex flex-col lg:grid grid-cols-5 grid-rows-6 gap-2 rounded-lg">
            <Card id="1" className="group relative p-4 col-span-3 row-span-2 overflow-hidden">
                <SquareLibrary
                    className="absolute -top-8 -right-8 opacity-10 blur-[2px] group-hover:scale-150 transition"
                    width={256} height={256}/>
                <CardHeader>
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-2 text-muted-foreground">
                        <span>• To help users adapt to the crypto world more easily through AI-supported analyses, graphics, and written content.</span>
                        <span>• To simplify the DeFi ecosystem, making it more understandable and user-friendly.</span>
                        <span>• To present complex crypto data in an easily digestible format through sketches, commentary, and written guides.</span>
                    </div>
                </CardContent>
            </Card>
            <div id="2" className="col-span-2 row-span-2 col-start-4 rounded-xl p-1 animate-bg-flow" style={{
                background: "var(--logo-color)",
                backdropFilter: "blur(4px)",
            }}>
                <Card className="p-4 h-full w-full">
                    <CardHeader>
                        <CardTitle className="text-2xl">Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2 text-muted-foreground">
                            <span>
                                • To integrate the rapidly evolving AI technologies into the crypto and DeFi ecosystem,
                                making these innovations accessible and easy to use.
                            </span>
                            <span>
                                • To empower users with clear, data-driven insights, enabling more informed decisions in the crypto space.
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <Card id="3" className="p-4 col-span-2 row-span-2 col-start-3 row-start-3">
                <CardHeader>
                    <CardTitle className="text-2xl">Conclusion and Invitation</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-muted-foreground">
                        Drawrite combines the DeFi and crypto ecosystem with the power of AI and visual communication.
                        If you’re looking to go beyond traditional finance, step into the future, and gain a fresh
                        perspective on your investments, join Drawrite!
                    </div>
                </CardContent>
            </Card>
            <div id="4"
                 className="group flex col-span-2 row-span-4 col-start-1 row-start-3 rounded-xl p-1 animate-bg-flow"
                 style={{
                     background: "var(--logo-color)",
                     backdropFilter: "blur(4px)",
                 }}>
                <Card className="p-4 h-full w-full relative overflow-hidden">
                    <MessageCircleQuestion stroke="white"
                                           className="absolute -bottom-8 right-16 opacity-10 blur-[2px] group-hover:scale-150 transition"
                                           width={256} height={256}/>
                    <CardHeader>
                        <CardTitle className="text-2xl">Why Drawrite?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <span className="text-lg">AI Support</span>
                                <span className="text-muted-foreground">
                                    We integrate cutting-edge AI technologies into the DeFi ecosystem, providing up-to-date insights and predictions.
                                </span>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-lg">Ease of Use</span>
                                <span className="text-muted-foreground">
                                We simplify the often complex realm of crypto and DeFi through concise content and
                                illustrative graphics.
                            </span>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-lg">Strong Community</span>
                                <span className="text-muted-foreground">
                                Our written and visual content caters to a broad audience, from developers to investors,
                                creating a vibrant community.
                            </span>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-lg">Educational Content</span>
                                <span className="text-muted-foreground">
                                We offer guides, training materials, and graphic-assisted resources for everyone, from
                                beginners to experts.
                            </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <Card id="5" className="group p-4 col-span-3 row-span-2 col-start-3 row-start-5 relative overflow-hidden">
                <Bug stroke="white"
                     className="absolute -top-8 right-32 opacity-10 blur-[2px] group-hover:scale-150 transition"
                     width={256} height={256}/>
                <CardHeader>
                    <CardTitle className="text-2xl">Target Audience</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-2">
                        <div>
                            <span className="text-lg text-nowrap">Crypto Investors:</span>
                            &nbsp;
                            <span className="text-muted-foreground">Those who want to keep track of market movements using AI-powered analysis.</span>
                        </div>
                        <div>
                            <span className="text-lg text-nowrap">Beginners:</span>
                            &nbsp;
                            <span className="text-muted-foreground">Individuals with little or no knowledge of DeFi and crypto, seeking clear and straightforward guidance.</span>
                        </div>
                        <div>
                            <span className="text-lg text-nowrap">Tech Enthusiasts:</span>
                            &nbsp;
                            <span className="text-muted-foreground">Those interested in AI and blockchain, looking to follow the latest developments.</span>
                        </div>
                        <div>
                            <span className="text-lg text-nowrap">Professionals and Entrepreneurs:</span>
                            &nbsp;
                            <span className="text-muted-foreground">Blockchain project owners and business leaders who need data analysis and market insights.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div id="6" className="row-span-2 col-start-5 row-start-3 rounded-xl p-1 animate-bg-flow hidden lg:block"
                 style={{
                     background: "var(--logo-color)",
                     backdropFilter: "blur(4px)",
                 }}>
                <Card className="p-4 h-full w-full">
                    <Bot stroke="white" className="h-full w-full"/>
                </Card>
            </div>
        </div>
    );
}