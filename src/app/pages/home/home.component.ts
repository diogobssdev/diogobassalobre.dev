import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { LucideAngularModule, Mail, Download, Code, Database } from "lucide-angular"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <!-- Hero Section -->
      <section class="container mx-auto px-4 py-20">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="flex-1 text-center lg:text-left">
            <h1 class="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Olá, eu sou
              <span class="text-blue-600 dark:text-blue-400 block">Diogo Bassalobre</span>
            </h1>
            <p class="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais.
              Especializado em tecnologias modernas como Angular, TypeScript e Python.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                routerLink="/projetos"
                class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                <lucide-angular [img]="CodeIcon" class="mr-2 h-4 w-4"></lucide-angular>
                Ver Projetos
              </a>
              <a
                routerLink="/contato"
                class="inline-flex items-center px-6 py-3 border border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
              >
                <lucide-angular [img]="MailIcon" class="mr-2 h-4 w-4"></lucide-angular>
                Entre em Contato
              </a>
            </div>
          </div>
          <div class="flex-1 flex justify-center">
            <div class="relative">
              <div class="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div class="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Diogo Bassalobre"
                    class="rounded-full w-72 h-72 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">Sobre Mim</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
              <h3 class="text-xl font-semibold mb-4 flex items-center">
                <lucide-angular [img]="CodeIcon" class="mr-2 h-5 w-5 text-blue-600"></lucide-angular>
                Experiência
              </h3>
              <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                Com mais de 3 anos de experiência em desenvolvimento web, tenho trabalhado em projetos diversos, desde
                aplicações simples até sistemas complexos de grande escala.
              </p>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
              <h3 class="text-xl font-semibold mb-4 flex items-center">
                <lucide-angular [img]="DatabaseIcon" class="mr-2 h-5 w-5 text-green-600"></lucide-angular>
                Especialidades
              </h3>
              <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                Especializado em desenvolvimento full stack com foco em Angular, Node.js, Python e bancos de dados.
                Sempre buscando as melhores práticas e tecnologias mais recentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Skills Preview -->
      <section class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Principais Tecnologias</h2>
          <div class="flex flex-wrap justify-center gap-3">
            <span
              *ngFor="let skill of skills"
              class="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm font-medium"
            >
              {{ skill }}
            </span>
          </div>
          <div class="mt-8">
            <a
              routerLink="/habilidades"
              class="inline-flex items-center px-6 py-3 border border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
            >
              Ver Todas as Habilidades
            </a>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="container mx-auto px-4 py-16">
        <div class="max-w-2xl mx-auto text-center p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
          <h2 class="text-2xl font-bold mb-4">Vamos Trabalhar Juntos?</h2>
          <p class="mb-6 opacity-90">
            Estou sempre aberto a novos desafios e oportunidades. Entre em contato para discutirmos seu próximo
            projeto!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              routerLink="/contato"
              class="inline-flex items-center px-6 py-3 bg-white text-blue-600 hover:bg-slate-100 rounded-lg font-medium transition-colors"
            >
              <lucide-angular [img]="MailIcon" class="mr-2 h-4 w-4"></lucide-angular>
              Entrar em Contato
            </a>
            <button class="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-medium transition-colors">
              <lucide-angular [img]="DownloadIcon" class="mr-2 h-4 w-4"></lucide-angular>
              Download CV
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class HomeComponent {
  // Icons
  MailIcon = Mail
  DownloadIcon = Download
  CodeIcon = Code
  DatabaseIcon = Database

  skills = ["Angular", "TypeScript", "JavaScript", "Python", "Tailwind CSS", "HTML", "CSS", "C"]
}
