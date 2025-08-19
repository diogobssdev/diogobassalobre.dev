"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, Clock, MessageCircle, Calendar } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log("Formulário enviado:", formData)
    alert("Mensagem enviada com sucesso! Retornarei em breve.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "diogo.bassalobre@gmail.com",
      href: "mailto:diogo.basslaobre@gmail.com",
      color: "text-blue-600",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Telefone",
      value: "+55 (16) 98230-9108",
      href: "tel:+5516982309108",
      color: "text-green-600",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Localização",
      value: "Ribeirão Preto - SP, Brasil",
      href: null,
      color: "text-red-600",
    },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/diogo-bassalobre-a31a29272",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/diogobssdev",
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/DBassalobre",
      color: "bg-sky-500 hover:bg-sky-600",
    },
  ]

  const availability = [
    { day: "Segunda - Sexta", hours: "08:00 - 18:00" },
    { day: "Sábado", hours: "10:00 - 14:00" },
    { day: "Domingo", hours: "Indisponível" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Entre em Contato</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">Vamos conversar sobre seu próximo projeto</p>
            <div className="flex justify-center">
              <Badge variant="outline" className="px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Respondo em até 24 horas
              </Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="w-6 h-6 mr-3 text-blue-600" />
                    Envie uma Mensagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Nome *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Assunto *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Sobre o que você gostaria de conversar?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Descreva seu projeto ou dúvida..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`${info.color}`}>{info.icon}</div>
                      <div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{info.label}</p>
                        {info.href ? (
                          <Link
                            href={info.href}
                            className="font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            {info.value}
                          </Link>
                        ) : (
                          <p className="font-medium text-slate-900 dark:text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Redes Sociais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <Button key={index} asChild variant="outline" className="w-full justify-start">
                        <Link href={social.href} target="_blank">
                          {social.icon}
                          <span className="ml-3">{social.name}</span>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Disponibilidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {availability.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-900 dark:text-white">{schedule.day}</span>
                        <span
                          className={`text-sm ${
                            schedule.hours === "Indisponível"
                              ? "text-red-600 dark:text-red-400"
                              : "text-green-600 dark:text-green-400"
                          }`}
                        >
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>Fuso horário:</strong> GMT-3 (Brasília)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="mailto:joao.silva@email.com?subject=Orçamento de Projeto">
                      <Mail className="w-4 h-4 mr-2" />
                      Solicitar Orçamento
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/cv-joao-silva.pdf" target="_blank">
                      <Calendar className="w-4 h-4 mr-2" />
                      Download CV
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Perguntas Frequentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Qual é o prazo médio dos projetos?</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Depende da complexidade, mas projetos simples levam 2-4 semanas, enquanto projetos complexos podem
                    levar 2-3 meses.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Você trabalha com contratos fixos?</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Sim, trabalho tanto com contratos de projeto fixo quanto por horas, dependendo da necessidade do
                    cliente.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Oferece suporte pós-entrega?</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Sim, ofereço 30 dias de suporte gratuito para correções e ajustes menores após a entrega do projeto.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Trabalha remotamente?</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Sim, trabalho 100% remotamente, mas também posso me reunir presencialmente em São Paulo quando
                    necessário.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
