// Projects data
const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque. Desenvolvida com React, Node.js e PostgreSQL.",
    image: "https://via.placeholder.com/500x300/3b82f6/ffffff?text=E-commerce",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    category: "fullstack",
    status: "Concluído",
    github: "https://github.com/diogobssdev/ecommerce-platform",
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
    image: "https://via.placeholder.com/500x300/8b5cf6/ffffff?text=Task+Manager",
    technologies: ["React", "Python", "Django", "WebSocket", "CSS"],
    category: "webapp",
    status: "Em Desenvolvimento",
    github: "https://github.com/diogobssdev/task-manager",
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
    image: "https://via.placeholder.com/500x300/06b6d4/ffffff?text=Weather+App",
    technologies: ["JavaScript", "HTML", "CSS", "Chart.js", "API REST"],
    category: "frontend",
    status: "Concluído",
    github: "https://github.com/diogobssdev/weather-dashboard",
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
    image: "https://via.placeholder.com/500x300/059669/ffffff?text=Data+Analysis",
    technologies: ["Python", "Pandas", "Matplotlib", "Streamlit", "NumPy"],
    category: "backend",
    status: "Concluído",
    github: "https://github.com/diogobssdev/data-analysis-tool",
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
      "Site pessoal responsivo desenvolvido com HTML, CSS e JavaScript vanilla, incluindo animações e sistema de contato.",
    image: "https://via.placeholder.com/500x300/7c3aed/ffffff?text=Portfolio",
    technologies: ["HTML", "CSS", "JavaScript", "Font Awesome"],
    category: "frontend",
    status: "Concluído",
    github: "https://github.com/diogobssdev/portfolio",
    demo: "https://diogobassalobre.dev",
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
    image: "https://via.placeholder.com/500x300/dc2626/ffffff?text=API+Gateway",
    technologies: ["C", "Linux", "Docker", "Redis", "Nginx"],
    category: "backend",
    status: "Em Desenvolvimento",
    github: "https://github.com/diogobssdev/api-gateway",
    demo: null,
    featured: false,
    stats: {
      stars: 8,
      forks: 2,
      commits: 78,
    },
  },
]

// Skills data for animation
const skillsData = [
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "React", level: 92 },
  { name: "HTML/CSS", level: 98 },
  { name: "Python", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "C", level: 75 },
  { name: "Databases", level: 82 },
  { name: "Git", level: 90 },
  { name: "Docker", level: 75 },
  { name: "AWS", level: 70 },
  { name: "Linux", level: 80 },
]
