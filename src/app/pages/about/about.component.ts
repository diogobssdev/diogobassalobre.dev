import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { LucideAngularModule, Calendar, MapPin, GraduationCap, Briefcase, Award, Heart } from "lucide-angular"

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div class="container mx-auto px-4 py-12">
        <div class="max-w-4xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-slate-900 dark:text-white mb-4">Sobre Mim</h1>
            <p class="text-xl text-slate-600 dark:text-slate-300">
              Conheça mais sobre minha jornada e experiências
            </p>
          </div>

          <!-- Profile Section -->
          <div class="grid lg:grid-cols-3 gap-8 mb-12">
            <div class="lg:col-span-1">
              <div class="bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-md">
                <div class="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                  <div class="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=180&width=180"
                      alt="Diogo Bassalobre"
                      class="rounded-full w-44 h-44 object-cover"
                    />
                  </div>
                </div>
                <h2 class="text-2xl font-bold mb-2">Diogo Bassalobre</h2>
                <p class="text-blue-600 dark:text-blue-400 font-medium mb-4">Desenvolvedor Full Stack</p>
                <div class="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <div class="flex items-center justify-center">
                    <lucide-angular [img]="MapPinIcon" class="w-4 h-4 mr-2"></lucide-angular>
                    Ribeirão Preto, Brasil
                  </div>
                  <div class="flex items-center justify-center">
                    <lucide-angular [img]="CalendarIcon" class="w-4 h-4 mr-2"></lucide-angular>
                    3+ anos de experiência
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-2 space-y-6">
              <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md">
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-4 flex items-center">
                    <lucide-angular [img]="HeartIcon" class="w-5 h-5 mr-2 text-red-500"></lucide-angular>
                    Minha História
                  </h3>
                  <div class="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p>
                      Sou um desenvolvedor full stack apaixonado por tecnologia e inovação. Minha jornada começou há mais
                      de 3 anos, quando descobri o poder da programação para resolver problemas reais e criar soluções
                      impactantes.
                    </p>
                    <p>
                      Ao longo dos anos, desenvolvi expertise em diversas tecnologias, desde linguagens de programação
                      como JavaScript, TypeScript, Python e C, até frameworks modernos como Angular e ferramentas de
                      estilização como Tailwind CSS.
                    </p>
                    <p>
                      Acredito que a tecnologia deve ser acessível e útil para todos. Por isso, sempre busco criar
                      interfaces intuitivas e experiências de usuário excepcionais, combinando design elegante com
                      funcionalidade robusta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Experience & Education -->
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-6 flex items-center">
                  <lucide-angular [img]="BriefcaseIcon" class="w-5 h-5 mr-2 text-blue-600"></lucide-angular>
                  Experiência Profissional
                </h3>
                <div class="space-y-6">
                  <div class="border-l-2 border-blue-200 pl-4">
                    <h4 class="font-semibold text-lg">Desenvolvedor Full Stack</h4>
                    <p class="text-blue-600 dark:text-blue-400 font-medium">TechCorp Solutions</p>
                    <p class="text-sm text-slate-500 mb-2">2022 - Presente</p>
                    <p class="text-slate-600 dark:text-slate-300 text-sm">
                      Desenvolvimento de aplicações web complexas usando Angular, Node.js e Python. Responsável por
                      arquitetura de sistemas e otimização de performance.
                    </p>
                  </div>
                  <div class="border-l-2 border-green-200 pl-4">
                    <h4 class="font-semibold text-lg">Desenvolvedor Frontend</h4>
                    <p class="text-green-600 dark:text-green-400 font-medium">StartupXYZ</p>
                    <p class="text-sm text-slate-500 mb-2">2021 - 2022</p>
                    <p class="text-slate-600 dark:text-slate-300 text-sm">
                      Criação de interfaces responsivas e interativas usando Angular, TypeScript e Tailwind CSS. Foco em
                      UX/UI e performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-6 flex items-center">
                  <lucide-angular [img]="GraduationCapIcon" class="w-5 h-5 mr-2 text-green-600"></lucide-angular>
                  Formação & Certificações
                </h3>
                <div class="space-y-6">
                  <div class="border-l-2 border-purple-200 pl-4">
                    <h4 class="font-semibold text-lg">Ciência da Computação</h4>
                    <p class="text-purple-600 dark:text-purple-400 font-medium">Universidade de São Paulo</p>
                    <p class="text-sm text-slate-500 mb-2">2019 - 2023</p>
                    <p class="text-slate-600 dark:text-slate-300 text-sm">
                      Bacharelado com foco em desenvolvimento de software, algoritmos e estruturas de dados.
                    </p>
                  </div>
                  <div class="border-l-2 border-orange-200 pl-4">
                    <h4 class="font-semibold text-lg">Certificações</h4>
                    <div class="space-y-2 mt-2">
                      <span
                        *ngFor="let cert of certifications"
                        class="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-xs mr-2 mb-2"
                      >
                        {{ cert }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Values & Interests -->
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-6 flex items-center">
                  <lucide-angular [img]="AwardIcon" class="w-5 h-5 mr-2 text-yellow-600"></lucide-angular>
                  Valores & Princípios
                </h3>
                <ul class="space-y-3 text-slate-600 dark:text-slate-300">
                  <li *ngFor="let value of values" class="flex items-start">
                    <span class="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" [ngClass]="value.color"></span>
                    <span>
                      <strong>{{ value.title }}:</strong> {{ value.description }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-6">Interesses & Hobbies</h3>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div class="space-y-2">
                    <h4 class="font-medium text-slate-900 dark:text-white">Tecnologia</h4>
                    <ul class="text-slate-600 dark:text-slate-300 space-y-1">
                      <li>• Open Source</li>
                      <li>• IA & Machine Learning</li>
                      <li>• Blockchain</li>
                    </ul>
                  </div>
                  <div class="space-y-2">
                    <h4 class="font-medium text-slate-900 dark:text-white">Pessoal</h4>
                    <ul class="text-slate-600 dark:text-slate-300 space-y-1">
                      <li>• Fotografia</li>
                      <li>• Viagens</li>
                      <li>• Leitura</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AboutComponent {
  // Icons
  CalendarIcon = Calendar
  MapPinIcon = MapPin
  GraduationCapIcon = GraduationCap
  BriefcaseIcon = Briefcase
  AwardIcon = Award
  HeartIcon = Heart

  certifications = ["AWS Cloud Practitioner", "Angular Developer", "Python Professional"]

  values = [
    {
      title: "Qualidade",
      description: "Sempre busco entregar código limpo e bem documentado",
      color: "bg-blue-500",
    },
    {
      title: "Aprendizado",
      description: "Mantenho-me atualizado com as últimas tecnologias",
      color: "bg-green-500",
    },
    {
      title: "Colaboração",
      description: "Acredito no poder do trabalho em equipe",
      color: "bg-purple-500",
    },
    {
      title: "Inovação",
      description: "Sempre procuro soluções criativas e eficientes",
      color: "bg-red-500",
    },
  ]
}
