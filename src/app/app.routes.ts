import type { Routes } from "@angular/router"

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "sobre",
    loadComponent: () => import("./pages/about/about.component").then((m) => m.AboutComponent),
  },
  {
    path: "habilidades",
    loadComponent: () => import("./pages/skills/skills.component").then((m) => m.SkillsComponent),
  },
  {
    path: "projetos",
    loadComponent: () => import("./pages/projects/projects.component").then((m) => m.ProjectsComponent),
  },
  {
    path: "contato",
    loadComponent: () => import("./pages/contact/contact.component").then((m) => m.ContactComponent),
  },
  {
    path: "**",
    redirectTo: "",
  },
]
