import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { Main } from "@/components/main";

export function Home() {
  return (
    <div className="bg-secondary">
      <Header/>
      <Main/>
      <Content/>
    </div>
  )
}