import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Flow Store - Transforme Sua Presença Digital",
  description:
    "Soluções digitais completas: Otimização de PC, Design, Edição de Vídeo, Sites e Marketing. Tecnologia de ponta para impulsionar seu negócio.",
  generator: "Flow Store",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="selection:bg-[#1561a4]">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
         <link rel="icon" href="Logo.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
