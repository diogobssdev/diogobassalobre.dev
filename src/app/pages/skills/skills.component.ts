import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import {
  LucideAngularModule,
  Code,
  Database,
  Globe,
  Palette,
  Server,
  Smartphone,
  GitBranch,
  Cloud,
  Shield,
  Zap,
} from "lucide-angular"

interface Skill {
  name: string
  level: number
  description: string
}

interface SkillCategory {
  title: string
  icon: any
  color: string
  skills: Skill[]
}

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div class="container mx-auto px-4 py-12">
        <div class="max-w-6xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-slate-900 dark:text-white mb-4">Minhas Habilidades</h1>
            <p class="text-xl text-slate-600 dark:text-slate-300">Tecnologias e competências que domino</p>
          </div>

          <!-- Technical Skills -->
          <div class="space-y-8 mb-12">
            <div *ngFor="let category of skillCategories" class="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
              <div class="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6">
                <h2 class="text-xl font-semibold flex items-center" [ngClass]="category.color">
                  <lucide-angular [img]="category.icon" class="w-6 h-6 mr-3"></lucide-angular>
                  {{ category.title }}
                </h2>
              </div>
              <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div *ngFor="let skill of category.skills" class="space-y-3">
                    <div class="flex justify-between items-center">
                      <h3 class="font-semibold text-slate-900 dark:text-white">{{ skill.name }}</h3>
                      <span class="text-sm font-medium text-slate-600 dark:text-slate-300">{{ skill.level }}%</span>
                    </div>
                    <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        class="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        [style.width.%]="skill.level"
                      ></div>
                    </div>
                    <p class="text-sm text-slate-600 dark:text-slate-300">{{ skill.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Soft Skills & Certifications -->
          <div class="grid lg:grid-cols-2 gap-8">
            <!-- Soft Skills -->
            <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <div class="p-6">
                <h2 class="text-xl font-semibold mb-6 flex items-center text-orange-600">
                  <lucide-angular [img]="PaletteIcon" class="w-6 h-6 mr-3"></lucide-angular>
                  Soft Skills
                </h2>
                <div class="grid grid-cols-2 gap-4">
                  <div
                    *ngFor="let skill of softSkills"
                    class="flex items-center p-3 rounded-lg bg-slate-50 dark:bg-slate-700"
                  >
                    <div class="text-orange-600 mr-3">
                      <lucide-angular [img]="skill.icon" class="w-5 h-5"></lucide-angular>
                    </div>
                    <span class="text-sm font-medium text-slate-900 dark:text-white">{{ skill.name }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Certifications -->
            <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <div class="p-6">
                <h2 class="text-xl font-semibold mb-6 flex items-center text-emerald-600">
                  <lucide-angular [img]="ShieldIcon" class="w-6 h-6 mr-3"></lucide-angular>
                  Certificações
                </h2>
                <div class="space-y-4">
                  <div *ngFor="let cert of certifications" class="border-l-4 border-emerald-500 pl-4 py-2">
                    <h3 class="font-semibold text-slate-900 dark:text-white">{{ cert.name }}</h3>
                    <p class="text-sm text-slate-600 dark:text-slate-300">
                      {{ cert.issuer }} • {{ cert.year }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Learning Goals -->
          <div class="mt-8 bg-white dark:bg-slate-800 rounded-lg shadow-md">
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-6 flex items-center text-indigo-600">
                <lucide-angular [img]="CodeIcon" class="w-6 h-6 mr-3"></lucide-angular>
                Próximos Objetivos de Aprendizado
              </h2>
              <div class="grid md:grid-cols-3 gap-4">
                <div
                  *ngFor="let goal of learningGoals"
                  class="text-center p-4 rounded-lg"
                  [ngClass]="goal.bgClass"
                >
                  <lucide-angular [img]="goal.icon" class="w-8 h-8 mx-auto mb-2" [ngClass]="goal.iconClass"></lucide-angular>
                  <h3 class="font-semibold mb-1">{{ goal.name }}</h3>
                  <p class="text-sm text-slate-600 dark:text-slate-300">{{ goal.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class SkillsComponent {
  // Icons
  CodeIcon = Code
  DatabaseIcon = Database
  GlobeIcon = Globe
  PaletteIcon = Palette
  ServerIcon = Server
  SmartphoneIcon = Smartphone
  GitBranchIcon = GitBranch
  CloudIcon = Cloud
  ShieldIcon = Shield
  ZapIcon = Zap

  skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: Globe,
      color: "text-blue-600",
      skills: [
        { name: "Angular", level: 95, description: "Components, Services, RxJS, NgRx" },
        { name: "TypeScript", level: 90, description: "Type Safety, Advanced Types, Generics" },
        { name: "JavaScript", level: 95, description: "ES6+, Async/Await, DOM Manipulation" },
        { name: "HTML", level: 98, description: "Semantic HTML, Accessibility, SEO" },
        { name: "CSS", level: 92, description: "Flexbox, Grid, Animations, Responsive Design" },
        { name: "Tailwind CSS", level: 88, description: "Utility-first, Custom Components, Responsive" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-green-600",
      skills: [
        { name: "Python", level: 85, description: "Django, Flask, FastAPI, Data Science" },
        { name: "Node.js", level: 80, description: "Express, RESTful APIs, Middleware" },
        { name: "C", level: 75, description: "System Programming, Memory Management" },
        { name: "SQL", level: 82, description: "PostgreSQL, MySQL, Query Optimization" },
        { name: "NoSQL", level: 78, description: "MongoDB, Redis, Document Databases" },
      ],
    },
    {
      title: "Ferramentas & DevOps",
      icon: GitBranch,
      color: "text-purple-600",
      skills: [
        { name: "Git", level: 90, description: "Version Control, Branching, Collaboration" },
        { name: "Docker", level: 75, description: "Containerization, Docker Compose" },
        { name: "AWS", level: 70, description: "EC2, S3, Lambda, RDS" },
        { name: "Linux", level: 80, description: "Command Line, Shell Scripting, Server Management" },
      ],
    },
  ]

  softSkills = [
    { name: "Resolução de Problemas", icon: Zap },
    { name: "Trabalho em Equipe", icon: Shield },
    { name: "Comunicação", icon: Globe },
    { name: "Liderança", icon: Server },
    { name: "Adaptabilidade", icon: Cloud },
    { name: "Criatividade", icon: Palette },
  ]

  certifications = [
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2023" },
    { name: "Angular Developer Certification", issuer: "Google", year: "2023" },
    { name: "Python Professional", issuer: "Python Institute", year: "2022" },
    { name: "JavaScript Algorithms", issuer: "freeCodeCamp", year: "2022" },
  ]

  learningGoals = [
    {
      name: "GraphQL",
      description: "APIs mais eficientes",
      icon: Database,
      iconClass: "text-blue-600",
      bgClass: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
    },
    {
      name: "React Native",
      description: "Desenvolvimento mobile",
      icon: Smartphone,
      iconClass: "text-green-600",
      bgClass: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    },
    {
      name: "Kubernetes",
      description: "Orquestração de containers",
      icon: Cloud,
      iconClass: "text-purple-600",
      bgClass: "bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
    },
  ]
}
