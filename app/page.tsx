import { Appbar } from "@/components/Appbar";
import { MainContent } from "@/components/MainContent";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#010118]">
      <Appbar/>
      <MainContent/>
    </div>
  );
}
