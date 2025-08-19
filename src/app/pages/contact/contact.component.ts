import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ReactiveFormsModule, type FormBuilder, type FormGroup, Validators } from "@angular/forms"
import {
  LucideAngularModule,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Send,
  Clock,
  MessageCircle,
  Calendar,
} from "lucide-angular"

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div class="container mx-auto px-4 py-12">
        <div class="max-w-6xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-slate-900 dark:text-white mb-4">Entre em Contato</h1>
            <p class="text-xl text-slate-600 dark:text-slate-300 mb-6">Vamos conversar sobre seu próximo projeto</p>
            <div class="flex justify-center">
              <span class="inline-flex items-center px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm">
                <lucide-angular [img]="ClockIcon" class="w-4 h-4 mr-2"></lucide-angular>
                Respondo em até 24 horas
              </span>
            </div>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            <!-- Contact Form -->
            <div class="lg:col-span-2">
              <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md">
                <div class="p-6 border-b border-slate-200 dark:border-slate-700">
                  <h2 class="text-xl font-semibold flex items-center">
                    <lucide-angular [img]="MessageCircleIcon" class="w-6 h-6 mr-3 text-blue-600"></lucide-angular>
                    Envie uma Mensagem
                  </h2>
                </div>
                <div class="p-6">
                  <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                    <div class="grid md:grid-cols-2 gap-4">
                      <div>
                        <label for="name" class="block text-sm font-medium mb-2">Nome *</label>
                        <input
                          id="name"
                          formControlName="name"
                          type="text"
                          placeholder="Seu nome completo"
                          class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                        />
                        <div *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched" class="text-red-500 text-sm mt-1">
                          Nome é obrigatório
                        </div>
                      </div>
                      <div>
                        <label for="email" class="block text-sm font-medium mb-2">Email *</label>
                        <input
                          id="email"
                          formControlName="email"
                          type="email"
                          placeholder="seu@email.com"
                          class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                        />
                        <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" class="text-red-500 text-sm mt-1">
                          Email válido é obrigatório
                        </div>
                      </div>
                    </div>

                    <div>
                      <label for="subject" class="block text-sm font-medium mb-2">Assunto *</label>
                      <input
                        id="subject"
                        formControlName="subject"
                        type="text"
                        placeholder="Sobre o que você gostaria de conversar?"
                        class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                      />
                      <div *ngIf="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched" class="text-red-500 text-sm mt-1">
                        Assunto é obrigatório
                      </div>
                    </div>

                    <div>
                      <label for="message" class="block text-sm font-medium mb-2">Mensagem *</label>
                      <textarea
                        id="message"
                        formControlName="message"
                        rows="6"
                        placeholder="Descreva seu projeto ou dúvida..."
                        class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white resize-none"
                      ></textarea>
                      <div *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched" class="text-red-500 text-sm mt-1">
                        Mensagem é obrigatória
                      </div>
                    </div>

                    <button
                      type="submit"
                      [disabled]="contactForm.invalid"
                      class="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white rounded-lg font-medium transition-colors"
                    >
                      <lucide-angular [img]="SendIcon" class="w-4 h-4 mr-2"></lucide-angular>
                      Enviar Mensagem
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <!-- Contact Info Sidebar -->
            <div class="space-y-6">
              <!-- Contact Information -->
              <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md">
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-6">Informações de Contato</h3>
                  <div class="space-y-4">
                    <div *ngFor="let info of contactInfo" class="flex items-center space-x-3">
                      <div [ngClass]="info.color">
                        <lucide-angular [img]="info.icon" class="w-5 h-5"></lucide-angular>
                      </div>
                      <div>
                        <p class="text-sm text-slate-600 dark:text-slate-400">{{ info.label }}</p>
                        <a
                          *ngIf="info.href; else noLink"
                          [href]="info.href"
                          class="font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {{ info.value }}
                        </a>
                        <ng-template #noLink>
                          <p class="font-medium text-slate-900 dark:text-white">{{ info.value }}</p>
                        </ng-template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md">
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-6">Redes Sociais</h3>
                  <div class="space-y-3">
                    <a
                      *ngFor="let social of socialLinks"
                      [href]="social.href"
                      target="_blank"
                      class="flex items-center w-full px-4 py-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <lucide-angular [img]="social.icon" class="w-5 h-5 mr-3"></lucide-angular>
                      <span>{{ social.name }}</span>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Availability -->
              <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md">
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-6 flex items-center">
                    <lucide-angular [img]="CalendarIcon" class="w-5 h-5 mr-2"></lucide-angular>
                    Disponibilidade
                  </h3>
                  <div class="space-y-3">
                    <div *ngFor="let schedule of availability" class="flex justify-between items-center">
                      <span class="text-sm font-medium text-slate-900 dark:text-white">{{ schedule.day }}</span>
                      <span
                        [ngClass]="schedule.hours === 'Indisponível' ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'"
                        class="text-sm"
                      >
                        {{ schedule.hours }}
                      </span>
                    </div>
                  </div>
                  <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p class="text-sm text-blue-800 dark:text-blue-200">
                      <strong>Fuso horário:</strong> GMT-3 (Brasília)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ Section -->
          <div class="mt-12 bg-white dark:bg-slate-800 rounded-lg shadow-md">
            <div class="p-6">
              <h2 class="text-2xl font-semibold mb-8">Perguntas Frequentes</h2>
              <div class="grid md:grid-cols-2 gap-6">
                <div *ngFor="let faq of faqs">
                  <h3 class="font-semibold mb-2">{{ faq.question }}</h3>
                  <p class="text-slate-600 dark:text-slate-300 text-sm">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ContactComponent {
  contactForm: FormGroup

  // Icons
  MailIcon = Mail
  PhoneIcon = Phone
  MapPinIcon = MapPin
  LinkedinIcon = Linkedin
  GithubIcon = Github
  TwitterIcon = Twitter
  SendIcon = Send
  ClockIcon = Clock
  MessageCircleIcon = MessageCircle
  CalendarIcon = Calendar

  contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "diogo.bassalobre@gmail.com",
      href: "mailto:diogo.bassalobre@gmail.com",
      color: "text-blue-600",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (16) 98230-9108",
      href: "tel:+5516982309108",
      color: "text-green-600",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Ribeirão Preto - SP, Brasil",
      href: null,
      color: "text-red-600",
    },
  ]

  socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/diogo-bassalobre-a31a29272",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/diogobssdev",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/DBassalobre",
    },
  ]

  availability = [
    { day: "Segunda - Sexta", hours: "08:00 - 18:00" },
    { day: "Sábado", hours: "10:00 - 14:00" },
    { day: "Domingo", hours: "Indisponível" },
  ]

  faqs = [
    {
      question: "Qual é o prazo médio dos projetos?",
      answer:
        "Depende da complexidade, mas projetos simples levam 2-4 semanas, enquanto projetos complexos podem levar 2-3 meses.",
    },
    {
      question: "Você trabalha com contratos fixos?",
      answer:
        "Sim, trabalho tanto com contratos de projeto fixo quanto por horas, dependendo da necessidade do cliente.",
    },
    {
      question: "Oferece suporte pós-entrega?",
      answer: "Sim, ofereço 30 dias de suporte gratuito para correções e ajustes menores após a entrega do projeto.",
    },
    {
      question: "Trabalha remotamente?",
      answer:
        "Sim, trabalho 100% remotamente, mas também posso me reunir presencialmente em São Paulo quando necessário.",
    },
  ]

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      subject: ["", Validators.required],
      message: ["", Validators.required],
    })
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log("Formulário enviado:", this.contactForm.value)
      alert("Mensagem enviada com sucesso! Retornarei em breve.")
      this.contactForm.reset()
    }
  }
}
