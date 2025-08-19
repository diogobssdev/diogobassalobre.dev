import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { LucideAngularModule, Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-angular"

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <footer class="bg-slate-900 text-white">
      <div class="container mx-auto px-4 py-12">
        <div class="grid md:grid-cols-4 gap-8">
          <!-- Brand -->
          <div class="md:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">DB</span>
              </div>
              <span class="font-bold text-xl">Diogo Bassalobre</span>
            </div>
            <p class="text-slate-300 mb-4 leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais.
              Sempre em busca de novos desafios e oportunidades de aprendizado.
            </p>
            <div class="flex space-x-4">
              <a
                href="https://github.com/diogobssdev"
                target="_blank"
                class="p-2 border border-slate-600 rounded-md hover:bg-slate-800 transition-colors"
              >
                <lucide-angular [img]="GithubIcon" class="w-4 h-4"></lucide-angular>
              </a>
              <a
                href="https://linkedin.com/in/diogo-bassalobre-a31a29272"
                target="_blank"
                class="p-2 border border-slate-600 rounded-md hover:bg-slate-800 transition-colors"
              >
                <lucide-angular [img]="LinkedinIcon" class="w-4 h-4"></lucide-angular>
              </a>
              <a
                href="mailto:diogo.bassalobre@gmail.com"
                class="p-2 border border-slate-600 rounded-md hover:bg-slate-800 transition-colors"
              >
                <lucide-angular [img]="MailIcon" class="w-4 h-4"></lucide-angular>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul class="space-y-2">
              <li><a href="/sobre" class="text-slate-300 hover:text-white transition-colors">Sobre Mim</a></li>
              <li><a href="/habilidades" class="text-slate-300 hover:text-white transition-colors">Habilidades</a></li>
              <li><a href="/projetos" class="text-slate-300 hover:text-white transition-colors">Projetos</a></li>
              <li><a href="/contato" class="text-slate-300 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h3 class="font-semibold text-lg mb-4">Serviços</h3>
            <ul class="space-y-2 text-slate-300">
              <li>Desenvolvimento Web</li>
              <li>Aplicações Angular</li>
              <li>APIs & Backend</li>
              <li>Consultoria Técnica</li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-slate-400 text-sm mb-4 md:mb-0 flex items-center">
            © {{ currentYear }} Diogo Bassalobre. Feito com 
            <lucide-angular [img]="HeartIcon" class="w-4 h-4 mx-1 text-red-500"></lucide-angular>
            usando Angular e Tailwind CSS.
          </p>
          <button
            (click)="scrollToTop()"
            class="flex items-center px-4 py-2 border border-slate-600 rounded-md hover:bg-slate-800 transition-colors text-sm"
          >
            <lucide-angular [img]="ArrowUpIcon" class="w-4 h-4 mr-2"></lucide-angular>
            Voltar ao Topo
          </button>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear()

  // Icons
  GithubIcon = Github
  LinkedinIcon = Linkedin
  MailIcon = Mail
  HeartIcon = Heart
  ArrowUpIcon = ArrowUp

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}
