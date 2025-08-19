"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JS</span>
              </div>
              <span className="font-bold text-xl">Diogo Bassalobre</span>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais.
              Sempre em busca de novos desafios e oportunidades de aprendizado.
            </p>
            <div className="flex space-x-4">
              <Button asChild variant="outline" size="icon" className="border-slate-600 hover:bg-slate-800">
                <Link href="https://github.com/joaosilva" target="_blank">
                  <Github className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="border-slate-600 hover:bg-slate-800">
                <Link href="https://linkedin.com/in/joaosilva" target="_blank">
                  <Linkedin className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="border-slate-600 hover:bg-slate-800">
                <Link href="mailto:joao.silva@email.com">
                  <Mail className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-slate-300 hover:text-white transition-colors">
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link href="/habilidades" className="text-slate-300 hover:text-white transition-colors">
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="text-slate-300 hover:text-white transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-slate-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Desenvolvimento Web</li>
              <li>Aplicações React</li>
              <li>APIs & Backend</li>
              <li>Consultoria Técnica</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} Diogo Bassalobre. Feito com <Heart className="w-4 h-4 inline text-red-500" /> usando Next.js e
            Tailwind CSS.
          </p>
          <Button onClick={scrollToTop} variant="outline" size="sm" className="border-slate-600 hover:bg-slate-800">
            <ArrowUp className="w-4 h-4 mr-2" />
            Voltar ao Topo
          </Button>
        </div>
      </div>
    </footer>
  )
}
