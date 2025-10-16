import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vira Web - Marketing Digital e Tecnologia",
  description:
    "Especialistas em tráfego pago, criação de sites, design e gestão de Google Meu Negócio. Transforme sua presença digital.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR"  className="bg-white selection:text-white selection:bg-secondary/50">
      <link rel="icon" href="/viraweb6.ico" sizes="any" />
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
