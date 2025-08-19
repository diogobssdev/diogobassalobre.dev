import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Download, Code, Database } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Olá, eu sou
              <span className="text-blue-600 dark:text-blue-400 block">Diogo Bassalobre</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais.
              Especializado em tecnologias modernas como React, TypeScript e Python.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/projetos">
                  <Code className="mr-2 h-4 w-4" />
                  Ver Projetos
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contato">
                  <Mail className="mr-2 h-4 w-4" />
                  Entre em Contato
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Diogo Bassalobre"
                    width={300}
                    height={300}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Code className="mr-2 h-5 w-5 text-blue-600" />
                  Experiência
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Com mais de 3 anos de experiência em desenvolvimento web, tenho trabalhado em projetos diversos, desde
                  aplicações simples até sistemas complexos de grande escala.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Database className="mr-2 h-5 w-5 text-green-600" />
                  Especialidades
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Especializado em desenvolvimento full stack com foco em React, Node.js, Python e bancos de dados.
                  Sempre buscando as melhores práticas e tecnologias mais recentes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Skills Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Principais Tecnologias</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "TypeScript", "JavaScript", "Python", "Tailwind CSS", "HTML", "CSS", "C"].map((skill) => (
              <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/habilidades">Ver Todas as Habilidades</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto text-center p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
          <CardContent className="p-0">
            <h2 className="text-2xl font-bold mb-4">Vamos Trabalhar Juntos?</h2>
            <p className="mb-6 opacity-90">
              Estou sempre aberto a novos desafios e oportunidades. Entre em contato para discutirmos seu próximo
              projeto!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" asChild>
                <Link href="/contato">
                  <Mail className="mr-2 h-4 w-4" />
                  Entrar em Contato
                </Link>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
