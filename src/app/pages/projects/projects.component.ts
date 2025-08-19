import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { LucideAngularModule, ExternalLink, Github, Calendar, Star, GitBranch } from "lucide-angular"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  status: string
  github: string
  demo?: string
  featured: boolean
  stats: {
    stars: number
    forks: number
    commits: number
  }
}

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div class="container mx-auto px-4 py-12">
        <div class="max-w-7xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-slate-900 dark:text-white mb-4">Meus Projetos</h1>
            <p class="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Uma seleção dos meus trabalhos mais recentes e relevantes
            </p>

            <!-- Category Filter -->
            <div class="flex flex-wrap justify-center gap-2">
              <button
                *ngFor="let category of categories"
                (click)="filterByCategory(category)"
                [class]="selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/20'"
                class="px-4 py-2 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
              >
                {{ category }}
              </button>
            </div>
          </div>

          <!-- Featured Projects -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <lucide-angular [img]="StarIcon" class="w-6 h-6 mr-2 text-yellow-500"></lucide-angular>
              Projetos em Destaque
            </h2>
            <div class="grid lg:grid-cols-2 gap-8">
              <div
                *ngFor="let project of featuredProjects"
                class="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div class="relative">
                  <img
                    [src]="project.image"
                    [alt]="project.title"
                    class="w-full h-48 object-cover"
                  />
                  <div class="absolute top-4 right-4">
                    <span
                      [class]="project.status === 'Concluído' ? 'bg-green-600' : 'bg-orange-600'"
                      class="px-3 py-1 text-white text-xs font-medium rounded-full"
                    >
                      {{ project.status }}
                    </span>
                  </div>
                </div>
                <div class="p-6">
                  <div class="flex justify-between items-start mb-4">
                    <div>
                      <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
                      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm rounded-full">
                        {{ project.category }}
                      </span>
                    </div>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{{ project.description }}</p>
                  
                  <!-- Technologies -->
                  <div class="mb-4">
                    <h4 class="font-medium mb-2 text-slate-900 dark:text-white">Tecnologias:</h4>
                    <div class="flex flex-wrap gap-2">
                      <span
                        *ngFor="let tech of project.technologies"
                        class="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs rounded"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>

                  <!-- Stats -->
                  <div class="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300 mb-4">
                    <div class="flex items-center">
                      <lucide-angular [img]="StarIcon" class="w-4 h-4 mr-1"></lucide-angular>
                      {{ project.stats.stars }}
                    </div>
                    <div class="flex items-center">
                      <lucide-angular [img]="GitBranchIcon" class="w-4 h-4 mr-1"></lucide-angular>
                      {{ project.stats.forks }}
                    </div>
                    <div class="flex items-center">
                      <lucide-angular [img]="CalendarIcon" class="w-4 h-4 mr-1"></lucide-angular>
                      {{ project.stats.commits }} commits
                    </div>
                  </div>

                  <!-- Actions -->
                  <div class="flex gap-3 pt-2">
                    <a
                      [href]="project.github"
                      target="_blank"
                      class="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      <lucide-angular [img]="GithubIcon" class="w-4 h-4 mr-2"></lucide-angular>
                      Código
                    </a>
                    <a
                      *ngIf="project.demo"
                      [href]="project.demo"
                      target="_blank"
                      class="flex-1 inline-flex items-center justify-center px-4 py-2 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors"
                    >
                      <lucide-angular [img]="ExternalLinkIcon" class="w-4 h-4 mr-2"></lucide-angular>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- All Projects -->
          <div>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">Todos os Projetos</h2>
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              <div
                *ngFor="let project of filteredProjects"
                class="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div class="relative">
                  <img
                    [src]="project.image"
                    [alt]="project.title"
                    class="w-full h-40 object-cover"
                  />
                  <div class="absolute top-3 right-3">
                    <span
                      [class]="project.status === 'Concluído' ? 'bg-green-600' : 'bg-orange-600'"
                      class="px-2 py-1 text-white text-xs font-medium rounded-full"
                    >
                      {{ project.status }}
                    </span>
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-lg font-semibold mb-2">{{ project.title }}</h3>
                  <span class="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm rounded-full mb-4">
                    {{ project.category }}
                  </span>
                  <p class="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                    {{ project.description }}
                  </p>

                  <div class="flex flex-wrap gap-1 mb-4">
                    <span
                      *ngFor="let tech of project.technologies.slice(0, 3)"
                      class="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs rounded"
                    >
                      {{ tech }}
                    </span>
                    <span
                      *ngIf="project.technologies.length > 3"
                      class="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs rounded"
                    >
                      +{{ project.technologies.length - 3 }}
                    </span>
                  </div>

                  <div class="flex gap-2">
                    <a
                      [href]="project.github"
                      target="_blank"
                      class="flex-1 inline-flex items-center justify-center px-3 py-2 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors"
                    >
                      <lucide-angular [img]="GithubIcon" class="w-3 h-3 mr-1"></lucide-angular>
                      Código
                    </a>
                    <a
                      *ngIf="project.demo"
                      [href]="project.demo"
                      target="_blank"
                      class="flex-1 inline-flex items-center justify-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      <lucide-angular [img]="ExternalLinkIcon" class="w-3 h-3 mr-1"></lucide-angular>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- GitHub CTA -->
          <div class="mt-12 text-center p-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg">
            <lucide-angular [img]="GithubIcon" class="w-12 h-12 mx-auto mb-4"></lucide-angular>
            <h2 class="text-2xl font-bold mb-4">Veja Mais no GitHub</h2>
            <p class="mb-6 opacity-90">Explore todos os meus repositórios e contribuições open source</p>
            <a
              href="https://github.com/diogobssdev"
              target="_blank"
              class="inline-flex items-center px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-lg font-medium transition-colors"
            >
              <lucide-angular [img]="GithubIcon" class="w-4 h-4 mr-2"></lucide-angular>
              Visitar GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ProjectsComponent {
  // Icons
  ExternalLinkIcon = ExternalLink
  GithubIcon = Github
  CalendarIcon = Calendar
  StarIcon = Star
  GitBranchIcon = GitBranch

  selectedCategory = "Todos"

  categories = ["Todos", "Full Stack", "Frontend", "Backend", "Web App", "Data Science"]

  projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque. Desenvolvida com Angular, Node.js e PostgreSQL.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Angular", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      category: "Full Stack",
      status: "Concluído",
      github: "https://github.com/diogobssdev/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
      featured: true,
      stats: { stars: 45, forks: 12, commits: 156 },
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real, notificações e relatórios de produtividade.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Angular", "Python", "Django", "WebSocket", "CSS"],
      category: "Web App",
      status: "Em Desenvolvimento",
      github: "https://github.com/diogobssdev/task-manager",
      demo: "https://taskmanager-demo.vercel.app",
      featured: true,
      stats: { stars: 23, forks: 8, commits: 89 },
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Dashboard interativo para visualização de dados meteorológicos com gráficos dinâmicos e previsões detalhadas.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["JavaScript", "HTML", "CSS", "Chart.js", "API REST"],
      category: "Frontend",
      status: "Concluído",
      github: "https://github.com/diogobssdev/weather-dashboard",
      demo: "https://weather-dashboard-demo.vercel.app",
      featured: false,
      stats: { stars: 18, forks: 5, commits: 67 },
    },
    {
      id: 4,
      title: "Data Analysis Tool",
      description:
        "Ferramenta de análise de dados com visualizações interativas e processamento de grandes datasets usando Python e pandas.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "Pandas", "Matplotlib", "Streamlit", "NumPy"],
      category: "Data Science",
      status: "Concluído",
      github: "https://github.com/diogobssdev/data-analysis-tool",
      featured: false,
      stats: { stars: 31, forks: 15, commits: 124 },
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Site pessoal responsivo desenvolvido com Angular, TypeScript e Tailwind CSS, incluindo blog e sistema de contato.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Angular", "TypeScript", "Tailwind CSS", "RxJS"],
      category: "Frontend",
      status: "Concluído",
      github: "https://github.com/diogobssdev/portfolio",
      demo: "https://diogobassalobre.dev",
      featured: false,
      stats: { stars: 12, forks: 3, commits: 45 },
    },
    {
      id: 6,
      title: "API Gateway",
      description:
        "Gateway de APIs com autenticação, rate limiting e monitoramento. Desenvolvido em C para alta performance.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["C", "Linux", "Docker", "Redis", "Nginx"],
      category: "Backend",
      status: "Em Desenvolvimento",
      github: "https://github.com/diogobssdev/api-gateway",
      featured: false,
      stats: { stars: 8, forks: 2, commits: 78 },
    },
  ]

  get featuredProjects() {
    return this.projects.filter((project) => project.featured)
  }

  get filteredProjects() {
    if (this.selectedCategory === "Todos") {
      return this.projects
    }
    return this.projects.filter((project) => project.category === this.selectedCategory)
  }

  filterByCategory(category: string) {
    this.selectedCategory = category
  }
}
