import {Header} from "@/components/core/header";
import {Content} from "@/components/core/content";
import {Separator} from "@/components/ui/separator";

export default function Home() {
  return (
   <div className="flex flex-col gap-5 pt-5">
       <Separator/>
       <Header/>
       <Separator/>
       <Content/>
   </div>
  );
}
