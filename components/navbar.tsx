"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { useMobile } from "@/hooks/use-mobile"
import ResumeModal from "./resume-modal"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()
  const { toast } = useToast()
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleResumeClick = () => {
    setIsResumeModalOpen(true)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }

    // Get the target element
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Scroll to the element
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for the navbar height
        behavior: "smooth",
      })

      // Update URL without page reload
      window.history.pushState(null, "", href)
    }
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="text-2xl font-bold text-primary">
          Samriddha Kunwar
        </a>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center gap-8">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button onClick={handleResumeClick} className="bg-primary hover:bg-primary/90">
              Resume
            </Button>
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-primary hover:bg-primary/10"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <nav className="bg-background/95 backdrop-blur-md p-4 shadow-md border-t border-accent/20">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <Button
                onClick={() => {
                  handleResumeClick()
                  setIsMenuOpen(false)
                }}
                className="w-full mt-2 bg-primary hover:bg-primary/90"
              >
                Resume
              </Button>
            </li>
          </ul>
        </nav>
      )}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </header>
  )
}
