import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Globe, Palette, MapPin, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Globe,
    title: "Criação de Sites",
    description:
      "Sites modernos, responsivos e otimizados para conversão. Do institucional ao e-commerce, criamos a solução perfeita.",
    features: ["Design responsivo", "SEO otimizado", "Performance máxima", "Manutenção inclusa"],
    url: "",
  },
  {
    icon: Target,
    title: "Tráfego Pago",
    description:
      "Campanhas estratégicas no Google Ads, Facebook Ads e Instagram Ads para maximizar seu ROI e alcançar o público certo.",
    features: ["Google Ads", "Meta Ads", "Otimização de conversão", "Relatórios detalhados"],
    url: "",
  },
  {
    icon: Palette,
    title: "Design Profissional",
    description:
      "Identidade visual completa, materiais gráficos e design que comunica a essência da sua marca de forma impactante.",
    features: ["Identidade visual", "Material gráfico", "Social media", "Branding"],
    url: "",
  },
  {
    icon: MapPin,
    title: "Google Meu Negócio",
    description:
      "Gestão completa do seu perfil no Google para aumentar visibilidade local e atrair mais clientes para seu negócio.",
    features: ["Otimização de perfil", "Gestão de avaliações", "Posts regulares", "Análise de métricas"],
    url: "",
  },
  {
    icon: Bot,
    title: "Assistente de mensagens",
    description:
      "Assistente virtual que tem por função responder seus clientes, facilitando o atendimento de sua empresa.",
    features: ["Respostas rápidas e automáticas", "Atendimento personalizado", "Disponibilidade 24/7", "Organização das conversas"],
    url: "",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-4">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Soluções completas de marketing digital e tecnologia para fazer seu negócio crescer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#3396d3]/15">
                    <service.icon className="h-6 w-6 text-[#3396d3]" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#FFD400]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-end"><a href={service.url}><Button  className="cursor-pointer hover:scale-110">Orçamento</Button></a></div>
              </CardContent>
            </Card>

          ))}
        </div>
      </div>
    </section>
  )
}
