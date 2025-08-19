import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Globe, Palette, Server, Smartphone, GitBranch, Cloud, Shield, Zap } from "lucide-react"

export default function Habilidades() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "text-blue-600",
      skills: [
        { name: "React", level: 95, description: "Hooks, Context API, Performance Optimization" },
        { name: "TypeScript", level: 90, description: "Type Safety, Advanced Types, Generics" },
        { name: "JavaScript", level: 95, description: "ES6+, Async/Await, DOM Manipulation" },
        { name: "HTML", level: 98, description: "Semantic HTML, Accessibility, SEO" },
        { name: "CSS", level: 92, description: "Flexbox, Grid, Animations, Responsive Design" },
        { name: "Tailwind CSS", level: 88, description: "Utility-first, Custom Components, Responsive" },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
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
      icon: <GitBranch className="w-6 h-6" />,
      color: "text-purple-600",
      skills: [
        { name: "Git", level: 90, description: "Version Control, Branching, Collaboration" },
        { name: "Docker", level: 75, description: "Containerization, Docker Compose" },
        { name: "AWS", level: 70, description: "EC2, S3, Lambda, RDS" },
        { name: "Linux", level: 80, description: "Command Line, Shell Scripting, Server Management" },
      ],
    },
  ]

  const softSkills = [
    { name: "Resolução de Problemas", icon: <Zap className="w-5 h-5" /> },
    { name: "Trabalho em Equipe", icon: <Shield className="w-5 h-5" /> },
    { name: "Comunicação", icon: <Globe className="w-5 h-5" /> },
    { name: "Liderança", icon: <Server className="w-5 h-5" /> },
    { name: "Adaptabilidade", icon: <Cloud className="w-5 h-5" /> },
    { name: "Criatividade", icon: <Palette className="w-5 h-5" /> },
  ]

  const certifications = [
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2023" },
    { name: "React Developer Certification", issuer: "Meta", year: "2023" },
    { name: "Python Professional", issuer: "Python Institute", year: "2022" },
    { name: "JavaScript Algorithms", issuer: "freeCodeCamp", year: "2022" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Minhas Habilidades</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">Tecnologias e competências que domino</p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700">
                  <CardTitle className={`flex items-center ${category.color}`}>
                    {category.icon}
                    <span className="ml-3">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold text-slate-900 dark:text-white">{skill.name}</h3>
                          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                        <p className="text-sm text-slate-600 dark:text-slate-300">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Soft Skills & Certifications */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Soft Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600">
                  <Palette className="w-6 h-6 mr-3" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                      <div className="text-orange-600 mr-3">{skill.icon}</div>
                      <span className="text-sm font-medium text-slate-900 dark:text-white">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-600">
                  <Shield className="w-6 h-6 mr-3" />
                  Certificações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-l-4 border-emerald-500 pl-4 py-2">
                      <h3 className="font-semibold text-slate-900 dark:text-white">{cert.name}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Learning Goals */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center text-indigo-600">
                <Code className="w-6 h-6 mr-3" />
                Próximos Objetivos de Aprendizado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                  <Database className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">GraphQL</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">APIs mais eficientes</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                  <Smartphone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">React Native</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Desenvolvimento mobile</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20">
                  <Cloud className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Kubernetes</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Orquestração de containers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
