// DOM Elements
const navbar = document.getElementById("navbar")
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const navLinks = document.querySelectorAll(".nav-link")
const sections = document.querySelectorAll(".section")
const projectsGrid = document.getElementById("projects-grid")
const filterBtns = document.querySelectorAll(".filter-btn")
const contactForm = document.getElementById("contact-form")
const loading = document.getElementById("loading")
const successModal = document.getElementById("success-modal")
const scrollToTopBtn = document.getElementById("scroll-to-top")
const currentYearSpan = document.getElementById("current-year")

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

function initializeApp() {
  // Set current year
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear()
  }

  // Initialize navigation
  initializeNavigation()

  // Initialize projects
  initializeProjects()

  // Initialize skills animation
  initializeSkillsAnimation()

  // Initialize contact form
  initializeContactForm()

  // Initialize scroll effects
  initializeScrollEffects()

  // Initialize smooth scrolling
  initializeSmoothScrolling()

  // Add fade-in animation to sections
  addFadeInAnimations()
}

// Navigation functionality
function initializeNavigation() {
  if (!hamburger || !navMenu) return

  // Mobile menu toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")

    // Animate hamburger bars
    const bars = hamburger.querySelectorAll(".bar")
    bars.forEach((bar, index) => {
      if (hamburger.classList.contains("active")) {
        if (index === 0) bar.style.transform = "rotate(45deg) translate(5px, 5px)"
        if (index === 1) bar.style.opacity = "0"
        if (index === 2) bar.style.transform = "rotate(-45deg) translate(7px, -6px)"
      } else {
        bar.style.transform = "none"
        bar.style.opacity = "1"
      }
    })
  })

  // Close mobile menu when clicking on links
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")

      // Reset hamburger animation
      const bars = hamburger.querySelectorAll(".bar")
      bars.forEach((bar) => {
        bar.style.transform = "none"
        bar.style.opacity = "1"
      })
    })
  })

  // Active navigation link based on scroll position
  window.addEventListener("scroll", updateActiveNavLink)
}

function updateActiveNavLink() {
  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })

  // Navbar background on scroll
  if (navbar) {
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)"
      navbar.style.backdropFilter = "blur(20px)"
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
      navbar.style.backdropFilter = "blur(10px)"
    }
  }
}

// Projects functionality
const projectsData = [
  // Example project data
  {
    title: "Project 1",
    category: "fullstack",
    description: "Description of Project 1",
    technologies: ["JavaScript", "React"],
    stats: { stars: 100, forks: 50, commits: 200 },
    github: "https://github.com/user/project1",
    demo: "https://example.com/project1",
    image: "https://via.placeholder.com/500x300/3b82f6/ffffff?text=Project+1",
    status: "Concluído",
  },
  // Add more projects as needed
]

function initializeProjects() {
  if (!projectsGrid || typeof projectsData === "undefined") return

  renderProjects(projectsData)

  // Filter functionality
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active filter button
      filterBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      // Filter projects
      const filter = btn.getAttribute("data-filter")
      const filteredProjects =
        filter === "all" ? projectsData : projectsData.filter((project) => project.category === filter)

      renderProjects(filteredProjects)
    })
  })
}

function renderProjects(projects) {
  if (!projectsGrid) return

  projectsGrid.innerHTML = ""

  projects.forEach((project) => {
    const projectCard = createProjectCard(project)
    projectsGrid.appendChild(projectCard)
  })

  // Add fade-in animation to new cards
  const cards = projectsGrid.querySelectorAll(".project-card")
  cards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"

    setTimeout(() => {
      card.style.transition = "all 0.5s ease"
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    }, index * 100)
  })
}

function createProjectCard(project) {
  const card = document.createElement("div")
  card.className = "project-card"

  const statusClass = project.status === "Concluído" ? "status-completed" : "status-development"
  const demoButton = project.demo
    ? `<a href="${project.demo}" target="_blank" class="btn btn-primary" style="flex: 1;">
               <i class="fas fa-external-link-alt"></i> Demo
           </a>`
    : ""

  card.innerHTML = `
        <div class="project-image">
            <img src="${project.image || "https://via.placeholder.com/500x300/3b82f6/ffffff?text=" + encodeURIComponent(project.title)}" alt="${project.title}">
            <div class="project-status ${statusClass}">${project.status}</div>
        </div>
        <div class="project-content">
            <div class="project-header">
                <div>
                    <h3 class="project-title">${project.title}</h3>
                    <span class="project-category">${getCategoryName(project.category)}</span>
                </div>
            </div>
            <p class="project-description">${project.description}</p>
            
            <div class="project-technologies">
                <h4>Tecnologias:</h4>
                <div class="tech-tags">
                    ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
                </div>
            </div>
            
            <div class="project-stats">
                <div class="stat-item">
                    <i class="fas fa-star"></i>
                    <span>${project.stats.stars}</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-code-branch"></i>
                    <span>${project.stats.forks}</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${project.stats.commits} commits</span>
                </div>
            </div>
            
            <div class="project-actions">
                <a href="${project.github}" target="_blank" class="btn btn-outline" style="flex: 1;">
                    <i class="fab fa-github"></i> Código
                </a>
                ${demoButton}
            </div>
        </div>
    `

  return card
}

function getCategoryName(category) {
  const categoryNames = {
    fullstack: "Full Stack",
    frontend: "Frontend",
    backend: "Backend",
    webapp: "Web App",
  }
  return categoryNames[category] || category
}

// Skills animation
function initializeSkillsAnimation() {
  const skillBars = document.querySelectorAll(".skill-progress")

  const animateSkills = () => {
    skillBars.forEach((bar) => {
      const width = bar.getAttribute("data-width")
      const rect = bar.getBoundingClientRect()

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setTimeout(() => {
          bar.style.width = width + "%"
        }, 200)
      }
    })
  }

  // Initial check
  animateSkills()

  // Check on scroll
  window.addEventListener("scroll", animateSkills)
}

// Contact form functionality
function initializeContactForm() {
  if (!contactForm) return

  contactForm.addEventListener("submit", handleFormSubmit)

  // Real-time validation
  const inputs = contactForm.querySelectorAll("input, textarea")
  inputs.forEach((input) => {
    input.addEventListener("blur", () => validateField(input))
    input.addEventListener("input", () => clearFieldError(input))
  })
}

function handleFormSubmit(e) {
  e.preventDefault()

  // Validate all fields
  const formData = new FormData(contactForm)
  const isValid = validateForm(formData)

  if (!isValid) {
    return
  }

  // Show loading
  showLoading()

  // Simulate form submission
  setTimeout(() => {
    hideLoading()
    showSuccessModal()
    contactForm.reset()
  }, 2000)
}

function validateForm(formData) {
  let isValid = true

  // Name validation
  const name = formData.get("name").trim()
  if (!name) {
    showFieldError("name", "Nome é obrigatório")
    isValid = false
  }

  // Email validation
  const email = formData.get("email").trim()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email) {
    showFieldError("email", "Email é obrigatório")
    isValid = false
  } else if (!emailRegex.test(email)) {
    showFieldError("email", "Email inválido")
    isValid = false
  }

  // Subject validation
  const subject = formData.get("subject").trim()
  if (!subject) {
    showFieldError("subject", "Assunto é obrigatório")
    isValid = false
  }

  // Message validation
  const message = formData.get("message").trim()
  if (!message) {
    showFieldError("message", "Mensagem é obrigatória")
    isValid = false
  } else if (message.length < 10) {
    showFieldError("message", "Mensagem deve ter pelo menos 10 caracteres")
    isValid = false
  }

  return isValid
}

function validateField(field) {
  const value = field.value.trim()
  const fieldName = field.name

  clearFieldError(field)

  switch (fieldName) {
    case "name":
      if (!value) {
        showFieldError(fieldName, "Nome é obrigatório")
        return false
      }
      break
    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!value) {
        showFieldError(fieldName, "Email é obrigatório")
        return false
      } else if (!emailRegex.test(value)) {
        showFieldError(fieldName, "Email inválido")
        return false
      }
      break
    case "subject":
      if (!value) {
        showFieldError(fieldName, "Assunto é obrigatório")
        return false
      }
      break
    case "message":
      if (!value) {
        showFieldError(fieldName, "Mensagem é obrigatória")
        return false
      } else if (value.length < 10) {
        showFieldError(fieldName, "Mensagem deve ter pelo menos 10 caracteres")
        return false
      }
      break
  }

  return true
}

function showFieldError(fieldName, message) {
  const field = document.getElementById(fieldName)
  if (!field) return

  const errorElement = field.parentNode.querySelector(".error-message")
  if (!errorElement) return

  field.style.borderColor = "#ef4444"
  errorElement.textContent = message
  errorElement.style.display = "block"
}

function clearFieldError(field) {
  const errorElement = field.parentNode.querySelector(".error-message")
  if (!errorElement) return

  field.style.borderColor = "var(--border-color)"
  errorElement.style.display = "none"
}

// Loading and modal functions
function showLoading() {
  if (loading) {
    loading.classList.add("show")
  }
}

function hideLoading() {
  if (loading) {
    loading.classList.remove("show")
  }
}

function showSuccessModal() {
  if (successModal) {
    successModal.classList.add("show")
  }
}

function closeModal() {
  if (successModal) {
    successModal.classList.remove("show")
  }
}

// Make closeModal available globally for the modal button
window.closeModal = closeModal

// Scroll effects
function initializeScrollEffects() {
  if (!scrollToTopBtn) return

  // Scroll to top button
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Show/hide scroll to top button
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollToTopBtn.style.opacity = "1"
      scrollToTopBtn.style.visibility = "visible"
    } else {
      scrollToTopBtn.style.opacity = "0"
      scrollToTopBtn.style.visibility = "hidden"
    }
  })
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      const targetId = link.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80 // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

// Fade-in animations
function addFadeInAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(".card, .skill-category, .project-card, .hero-content > *")
  animatedElements.forEach((el) => {
    observer.observe(el)
  })
}

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === successModal) {
    closeModal()
  }
})

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal()

    // Close mobile menu
    if (hamburger && navMenu) {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")

      const bars = hamburger.querySelectorAll(".bar")
      bars.forEach((bar) => {
        bar.style.transform = "none"
        bar.style.opacity = "1"
      })
    }
  }
})

// Preload images
function preloadImages() {
  const images = [
    "https://via.placeholder.com/300x300/3b82f6/ffffff?text=DB",
    "https://via.placeholder.com/180x180/3b82f6/ffffff?text=DB",
  ]

  // Add project images if projectsData is available
  if (typeof projectsData !== "undefined") {
    images.push(...projectsData.map((project) => project.image).filter(Boolean))
  }

  images.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

// Initialize image preloading
preloadImages()

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
  updateActiveNavLink()
}, 10)

window.addEventListener("scroll", debouncedScrollHandler)
