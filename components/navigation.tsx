"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Code, User, Briefcase, Mail, Home } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Início", icon: <Home className="w-4 h-4" /> },
    { href: "/sobre", label: "Sobre", icon: <User className="w-4 h-4" /> },
    { href: "/habilidades", label: "Habilidades", icon: <Code className="w-4 h-4" /> },
    { href: "/projetos", label: "Projetos", icon: <Briefcase className="w-4 h-4" /> },
    { href: "/contato", label: "Contato", icon: <Mail className="w-4 h-4" /> },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">JS</span>
            </div>
            <span className="font-bold text-xl text-slate-900 dark:text-white">Diogo Bassalobre</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                asChild
                variant={isActive(item.href) ? "default" : "ghost"}
                className={isActive(item.href) ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                <Link href={item.href} className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </Button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">JS</span>
                    </div>
                    <span className="font-bold text-xl">Diogo Bassalobre</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <Button
                      key={item.href}
                      asChild
                      variant={isActive(item.href) ? "default" : "ghost"}
                      className={`w-full justify-start ${isActive(item.href) ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={item.href} className="flex items-center space-x-3">
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
