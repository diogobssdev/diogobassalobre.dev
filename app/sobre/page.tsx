import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Briefcase, Award, Heart } from "lucide-react"
import Image from "next/image"

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Sobre Mim</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Conheça mais sobre minha jornada e experiências
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <Card className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=180&width=180"
                      alt="Diogo Bassalobre"
                      width={180}
                      height={180}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">Diogo Bassalobre</h2>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">Desenvolvedor Full Stack</p>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    São Paulo, Brasil
                  </div>
                  <div className="flex items-center justify-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    3+ anos de experiência
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-500" />
                    Minha História
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Sou um desenvolvedor full stack apaixonado por tecnologia e inovação. Minha jornada começou há mais
                    de 3 anos, quando descobri o poder da programação para resolver problemas reais e criar soluções
                    impactantes.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Ao longo dos anos, desenvolvi expertise em diversas tecnologias, desde linguagens de programação
                    como JavaScript, TypeScript, Python e C, até frameworks modernos como React e ferramentas de
                    estilização como Tailwind CSS.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Acredito que a tecnologia deve ser acessível e útil para todos. Por isso, sempre busco criar
                    interfaces intuitivas e experiências de usuário excepcionais, combinando design elegante com
                    funcionalidade robusta.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                  Experiência Profissional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-blue-200 pl-4">
                  <h3 className="font-semibold text-lg">Desenvolvedor Full Stack</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">TechCorp Solutions</p>
                  <p className="text-sm text-slate-500 mb-2">2022 - Presente</p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Desenvolvimento de aplicações web complexas usando React, Node.js e Python. Responsável por
                    arquitetura de sistemas e otimização de performance.
                  </p>
                </div>
                <div className="border-l-2 border-green-200 pl-4">
                  <h3 className="font-semibold text-lg">Desenvolvedor Frontend</h3>
                  <p className="text-green-600 dark:text-green-400 font-medium">StartupXYZ</p>
                  <p className="text-sm text-slate-500 mb-2">2021 - 2022</p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Criação de interfaces responsivas e interativas usando React, TypeScript e Tailwind CSS. Foco em
                    UX/UI e performance.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-green-600" />
                  Formação & Certificações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-purple-200 pl-4">
                  <h3 className="font-semibold text-lg">Ciência da Computação</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">Universidade de São Paulo</p>
                  <p className="text-sm text-slate-500 mb-2">2019 - 2023</p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Bacharelado com foco em desenvolvimento de software, algoritmos e estruturas de dados.
                  </p>
                </div>
                <div className="border-l-2 border-orange-200 pl-4">
                  <h3 className="font-semibold text-lg">Certificações</h3>
                  <div className="space-y-2 mt-2">
                    <Badge variant="outline" className="mr-2">
                      AWS Cloud Practitioner
                    </Badge>
                    <Badge variant="outline" className="mr-2">
                      React Developer
                    </Badge>
                    <Badge variant="outline">Python Professional</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values & Interests */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-600" />
                  Valores & Princípios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong>Qualidade:</strong> Sempre busco entregar código limpo e bem documentado
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong>Aprendizado:</strong> Mantenho-me atualizado com as últimas tecnologias
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong>Colaboração:</strong> Acredito no poder do trabalho em equipe
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong>Inovação:</strong> Sempre procuro soluções criativas e eficientes
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interesses & Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-900 dark:text-white">Tecnologia</h4>
                    <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                      <li>• Open Source</li>
                      <li>• IA & Machine Learning</li>
                      <li>• Blockchain</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-900 dark:text-white">Pessoal</h4>
                    <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                      <li>• Fotografia</li>
                      <li>• Viagens</li>
                      <li>• Leitura</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
