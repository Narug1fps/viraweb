"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaDiscord } from "react-icons/fa";
import {
  Menu,
  X,
  Monitor,
  Palette,
  Video,
  Globe,
  Mail,
  Phone,
  Instagram,
  Youtube,
  Bot,
} from "lucide-react";
import { Url } from "url";
import { type } from "os";
import Link from "next/link";

export default function FlowStorePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "video", "servicos", "contato"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  type services = {
    icon: string;
    title: string;
    description: string;
    url: Url;
  };

  const services = [
    {
      icon: Monitor,
      title: "Otimização de PC",
      description:
        "Maximize a performance do seu computador com nossa expertise técnica avançada.",
      url: "https://w.app/flowstoretest",
    },
    {
      icon: Palette,
      title: "Design",
      description:
        "Criação de identidades visuais impactantes e designs que convertem.",
      url: "https://w.app/flowstoresites",
    },
    {
      icon: Video,
      title: "Edição de Vídeo",
      description:
        "Produção audiovisual profissional para elevar sua marca ao próximo nível.",
      url: "https://w.app/flowstoresites",
    },
    {
      icon: Globe,
      title: "Sites",
      description:
        "Desenvolvimento web moderno e responsivo com as melhores tecnologias.",
      url: "https://w.app/flowstoresites",
    },
    {
      icon: FaDiscord,
      title: "Criação de Servidor Discord",
      description:
        "Configuração completa de servidores Discord personalizados para sua comunidade.",
      url: "https://w.app/flowstoresites",
    },
    {
  icon: Bot,
  title: "Criação de Bot para Discord",
  description: "Desenvolvimento de bots personalizados com comandos, automações e integrações sob medida para seu servidor.",
  url: "https://w.app/flowstoresites"
}
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0c0c0c" }}>
      {/* Navbar */}
      <nav
        className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10"
        style={{ backgroundColor: "rgba(12, 12, 12, 0.9)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="">
                <Image
                  src="/logo2.png"
                  alt="Flow Store Logo"
                  width={120}
                  height={40}
                  className="h-20 w-auto hover:cursor-pointer"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: "inicio", label: "Início" },
                  { id: "video", label: "Sobre" },
                  { id: "servicos", label: "Serviços" },
                  { id: "contato", label: "Contato" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 pb-1 rounded-md text-sm font-medium transition-colors hover:cursor-pointer ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                    style={{
                      backgroundColor:
                        activeSection === item.id ? "#1561a4" : "transparent",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  className=" px-4 py-2 text-white font-semibold hover:cursor-pointer rounded-md transition-all hover:scale-105"
                  style={{ backgroundColor: "#5865F2" }}
                  onClick={() =>
                    window.open("https://discord.gg/eBD96BAg96", "_blank")
                  }
                >
                  <FaDiscord size={16} className="mr-2" />
                  Discord
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" style={{ backgroundColor: "#0c0c0c" }}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/10">
              {[
                { id: "inicio", label: "Início" },
                { id: "video", label: "Sobre" },
                { id: "servicos", label: "Serviços" },
                { id: "contato", label: "Contato" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="w-full mt-2 text-white font-semibold"
                style={{ backgroundColor: "#5865F2" }}
                onClick={() =>
                  window.open("https://discord.gg/eBD96BAg96", "_blank")
                }
              >
                <FaDiscord size={16} className="mr-2" />
                Discord
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transforme Sua
              <span className="block" style={{ color: "#2d92d2" }}>
                Presença Digital
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Na Flow Store, combinamos tecnologia de ponta com criatividade
              para entregar soluções digitais que impulsionam seu negócio para o
              futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("servicos")}
                size="lg"
                className="text-lg px-8 py-4 text-white font-semibold hover:scale-105 hover:cursor-pointer transition-transform"
                style={{ backgroundColor: "#1561a4" }}
              >
                Explorar Serviços
              </Button>
              <Button
                onClick={() => scrollToSection("contato")}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 font-semibold text-[#1561a4] hover:text-black hover:cursor-pointer hover:scale-105 transition-all"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section
        id="video"
        className="py-20"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Conheça a Flow Store
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubra como nossa paixão por tecnologia e inovação pode
              transformar sua visão em realidade digital.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div
              className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: "#2d92d2" }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <Video size={64} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Vídeo Explicativo</h3>
                  <p className="text-lg opacity-90">
                    Em breve: Nossa história e visão
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos soluções completas e personalizadas para elevar sua
              presença digital ao próximo nível.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-white/10 hover:border-white/20 transition-all duration-300 group"
                style={{ backgroundColor: "#1a1a1a" }}
              >
                <CardHeader className="text-center">
                  <div
                    className="mx-auto mb-4 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "#1561a4" }}
                  >
                    <service.icon size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>

                  <Link href={service.url} target="_blank">
                    <Button
                      className="w-full text-white font-semibold hover:scale-105 transition-transform hover:cursor-pointer"
                      style={{ backgroundColor: "#2d92d2" }}
                    >
                      Contratar Serviço
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contato"
        className="py-20"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pronto para transformar sua ideia em realidade? Vamos conversar
              sobre seu próximo projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card
                className="border-white/10"
                style={{ backgroundColor: "#0c0c0c" }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Envie sua Mensagem
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Preencha o formulário e entraremos em contato em até 24
                    horas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Seu nome"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    />
                    <Input
                      type="email"
                      placeholder="Seu email"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Input
                    placeholder="Assunto"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  />
                  <Textarea
                    placeholder="Sua mensagem"
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  />
                  <Button
                    className="w-full text-white font-semibold hover:scale-105 transition-transform hover:cursor-pointer"
                    style={{ backgroundColor: "#1561a4" }}
                    onClick={() =>
                      window.open("https://w.app/flowstoretest", "_blank")
                    }
                  >
                    Enviar Mensagem
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: "#1561a4" }}
                    >
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300">contato@flowstore.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: "#1561a4" }}
                    >
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Telefone</p>
                      <p className="text-gray-300">+55 (11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">=</div>
                </div>
              </div>

              <div
                className="p-6 rounded-lg border border-white/10"
                style={{ backgroundColor: "#0c0c0c" }}
              >
                <h4 className="text-xl font-bold text-white mb-4">
                  Horário de Atendimento
                </h4>
                <div className="space-y-2 text-gray-300">
                  <p>Segunda - Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 14h</p>
                  <p>Domingo: 9h às 14h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t border-white/10 py-12"
        style={{ backgroundColor: "#0c0c0c" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo e Descrição */}
            <div className="md:col-span-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8937e01fbf46f378e86944936b837a8d-wcxT3kbs9gJtds208oTD4Prnjjirrh.png"
                alt="Flow Store Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Transformando ideias em soluções digitais inovadoras com
                tecnologia de ponta e criatividade.
              </p>
            </div>

            {/* Links Rápidos */}
            <div className="md:col-span-1">
              <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                {[
                  { id: "inicio", label: "Início" },
                  { id: "video", label: "Sobre" },
                  { id: "servicos", label: "Serviços" },
                  { id: "contato", label: "Contato" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-gray-300 hover:text-white hover:cursor-pointer transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-1">
              <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/flowstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:scale-110 transition-transform"
                  style={{ backgroundColor: "#1561a4" }}
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a
                  href="https://youtube.com/flowstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:scale-110 transition-transform"
                  style={{ backgroundColor: "#1561a4" }}
                >
                  <Youtube size={20} className="text-white" />
                </a>
                <a
                  href="https://discord.gg/eBD96BAg96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:scale-110 transition-transform"
                  style={{ backgroundColor: "#5865F2" }}
                >
                  <FaDiscord size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-300 text-sm">
                  © 2025 Flow Store. Todos os direitos reservados.
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm">
                  Desenvolvido com tecnologia de ponta
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
