import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import Video from "@/components/videosec"
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <CTA />
      <Footer />
      <div className="text-white fixed flex items-end justify-end">
        <div className="rounded-full w-20 bg-[#25d366]">
          
                <FaWhatsapp />
        </div>
      </div>
    </main>
  )
}
