import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Router, RouterModule } from "@angular/router"
import { LucideAngularModule, Home, User, Code, Briefcase, Mail, Menu, X } from "lucide-angular"

@Component({
  selector: "app-navigation",
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <nav class="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div class="container mx-auto px-4">
        <div class="flex h-16 items-center justify-between">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">DB</span>
            </div>
            <span class="font-bold text-xl text-slate-900 dark:text-white">Diogo Bassalobre</span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-1">
            <a
              *ngFor="let item of navItems"
              [routerLink]="item.href"
              routerLinkActive="bg-blue-600 text-white hover:bg-blue-700"
              [routerLinkActiveOptions]="{ exact: item.href === '/' }"
              class="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <lucide-angular [img]="item.icon" class="w-4 h-4"></lucide-angular>
              <span>{{ item.label }}</span>
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            (click)="toggleMobileMenu()"
            class="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <lucide-angular [img]="isMenuOpen ? XIcon : MenuIcon" class="w-6 h-6"></lucide-angular>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div
          *ngIf="isMenuOpen"
          class="md:hidden border-t bg-white dark:bg-slate-900 absolute left-0 right-0 top-16 shadow-lg"
        >
          <div class="container mx-auto px-4 py-4 space-y-2">
            <a
              *ngFor="let item of navItems"
              [routerLink]="item.href"
              routerLinkActive="bg-blue-600 text-white"
              [routerLinkActiveOptions]="{ exact: item.href === '/' }"
              (click)="closeMobileMenu()"
              class="flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 w-full"
            >
              <lucide-angular [img]="item.icon" class="w-4 h-4"></lucide-angular>
              <span>{{ item.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
})
export class NavigationComponent {
  private router = inject(Router)

  isMenuOpen = false

  // Icons
  HomeIcon = Home
  UserIcon = User
  CodeIcon = Code
  BriefcaseIcon = Briefcase
  MailIcon = Mail
  MenuIcon = Menu
  XIcon = X

  navItems = [
    { href: "/", label: "Início", icon: Home },
    { href: "/sobre", label: "Sobre", icon: User },
    { href: "/habilidades", label: "Habilidades", icon: Code },
    { href: "/projetos", label: "Projetos", icon: Briefcase },
    { href: "/contato", label: "Contato", icon: Mail },
  ]

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  closeMobileMenu() {
    this.isMenuOpen = false
  }
}
