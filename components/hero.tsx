import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32  bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground mb-6 animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-primary " />
            <span className="text-sm font-medium">Soluções digitais que geram resultados</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 animate-fade-in-up animation-delay-100">
            Transformamos <span className="text-primary">ideias</span> em presença <span className="text-primary">digital</span> poderosa.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
            Na <span className="font-bold"><span className="text-primary">Vira</span><span className="text-secondary">Web</span></span>, unimos estratégia, design e programação para fazer sua marca se destacar no universo online. Construímos sites, campanhas e identidades digitais que conectam você ao seu público e impulsionam o crescimento do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button size="lg" className="bg-primary cursor-pointer   hover:scale-105 text-primary-foreground group w-full sm:w-auto">
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5 " />
            </Button>
            <a href="#servicos">

              <Button size="lg" className="w-full cursor-pointer text-white hover:bg-secondary hover:scale-105 sm:w-auto bg-secondary">
                Ver Nossos Serviços
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
