import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import Video from "@/components/videosec"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Video />
      <Stats />
      <Services />
      <CTA />
      <Footer />
    </main>
  )
}
