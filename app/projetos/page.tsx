import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Star, GitBranch } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projetos() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque. Desenvolvida com React, Node.js e PostgreSQL.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      category: "Full Stack",
      status: "Concluído",
      github: "https://github.com/joaosilva/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
      featured: true,
      stats: {
        stars: 45,
        forks: 12,
        commits: 156,
      },
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real, notificações e relatórios de produtividade.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Python", "Django", "WebSocket", "CSS"],
      category: "Web App",
      status: "Em Desenvolvimento",
      github: "https://github.com/joaosilva/task-manager",
      demo: "https://taskmanager-demo.vercel.app",
      featured: true,
      stats: {
        stars: 23,
        forks: 8,
        commits: 89,
      },
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
      github: "https://github.com/joaosilva/weather-dashboard",
      demo: "https://weather-dashboard-demo.vercel.app",
      featured: false,
      stats: {
        stars: 18,
        forks: 5,
        commits: 67,
      },
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
      github: "https://github.com/joaosilva/data-analysis-tool",
      demo: null,
      featured: false,
      stats: {
        stars: 31,
        forks: 15,
        commits: 124,
      },
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Site pessoal responsivo desenvolvido com Next.js, TypeScript e Tailwind CSS, incluindo blog e sistema de contato.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
      category: "Frontend",
      status: "Concluído",
      github: "https://github.com/joaosilva/portfolio",
      demo: "https://joaosilva.dev",
      featured: false,
      stats: {
        stars: 12,
        forks: 3,
        commits: 45,
      },
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
      github: "https://github.com/joaosilva/api-gateway",
      demo: null,
      featured: false,
      stats: {
        stars: 8,
        forks: 2,
        commits: 78,
      },
    },
  ]

  const categories = ["Todos", "Full Stack", "Frontend", "Backend", "Web App", "Data Science"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Meus Projetos</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Uma seleção dos meus trabalhos mais recentes e relevantes
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Star className="w-6 h-6 mr-2 text-yellow-500" />
              Projetos em Destaque
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects
                .filter((project) => project.featured)
                .map((project) => (
                  <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge
                          variant={project.status === "Concluído" ? "default" : "secondary"}
                          className={project.status === "Concluído" ? "bg-green-600" : "bg-orange-600"}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                          <Badge variant="outline" className="mb-3">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Technologies */}
                        <div>
                          <h4 className="font-medium mb-2 text-slate-900 dark:text-white">Tecnologias:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            {project.stats.stars}
                          </div>
                          <div className="flex items-center">
                            <GitBranch className="w-4 h-4 mr-1" />
                            {project.stats.forks}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.stats.commits} commits
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 pt-2">
                          <Button asChild size="sm" className="flex-1">
                            <Link href={project.github} target="_blank">
                              <Github className="w-4 h-4 mr-2" />
                              Código
                            </Link>
                          </Button>
                          {project.demo && (
                            <Button asChild variant="outline" size="sm" className="flex-1">
                              <Link href={project.demo} target="_blank">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Demo
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* All Projects */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Todos os Projetos</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge
                        variant={project.status === "Concluído" ? "default" : "secondary"}
                        className={`text-xs ${project.status === "Concluído" ? "bg-green-600" : "bg-orange-600"}`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {project.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button asChild size="sm" variant="outline" className="flex-1">
                        <Link href={project.github} target="_blank">
                          <Github className="w-3 h-3 mr-1" />
                          Código
                        </Link>
                      </Button>
                      {project.demo && (
                        <Button asChild size="sm" className="flex-1">
                          <Link href={project.demo} target="_blank">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* GitHub CTA */}
          <Card className="mt-12 text-center p-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
            <CardContent className="p-0">
              <Github className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Veja Mais no GitHub</h2>
              <p className="mb-6 opacity-90">Explore todos os meus repositórios e contribuições open source</p>
              <Button asChild variant="secondary" size="lg">
                <Link href="https://github.com/joaosilva" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  Visitar GitHub
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
