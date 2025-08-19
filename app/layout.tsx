import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Diogo Bassalobre - Desenvolvedor Full Stack",
    template: "%s | Diogo Bassalobre",
  },
  description:
    "Desenvolvedor Full Stack especializado em React, TypeScript, Python e tecnologias modernas. Criando soluções inovadoras e experiências digitais excepcionais.",
  keywords: ["desenvolvedor", "full stack", "react", "typescript", "python", "javascript", "web development"],
  authors: [{ name: "Diogo Bassalobre" }],
  creator: "Diogo Bassalobre",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://joaosilva.dev",
    title: "Diogo Bassalobre - Desenvolvedor Full Stack",
    description: "Desenvolvedor Full Stack especializado em React, TypeScript, Python e tecnologias modernas.",
    siteName: "Diogo Bassalobre Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diogo Bassalobre - Desenvolvedor Full Stack",
    description: "Desenvolvedor Full Stack especializado em React, TypeScript, Python e tecnologias modernas.",
    creator: "@joaosilva",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
