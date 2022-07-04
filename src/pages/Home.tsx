import { Header } from "../components/Header";
import { RaceInfo } from "../components/Race-Info";

export function Home() { 
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <RaceInfo />
      </main>
    </div>
  )
}