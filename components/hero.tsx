"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDownIcon, Github, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Python Django Developer"

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-rgb),0.15),transparent_70%)]" />

      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="w-full">
          <motion.h1 variants={item} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-primary relative inline-block">
              Samriddha Kunwar
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.5, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.h2 variants={item} className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/80 mb-8">
            <span>{typedText}</span>
            <span className="animate-blink">|</span>
          </motion.h2>

          <motion.p variants={item} className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            I build exceptional and accessible digital experiences for the web.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" asChild className="relative overflow-hidden group">
              <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 bg-primary-foreground/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="relative overflow-hidden group">
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex gap-6 justify-center mb-16">
            <motion.a
              href="https://github.com/samriddhakunwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/samriddha-kunwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent transition-colors"
              aria-label="Instagram"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          onClick={(e) => handleNavClick(e, "#about")}
          className="absolute bottom-8 animate-bounce"
          aria-label="Scroll to About section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          whileHover={{ scale: 1.2 }}
        >
          <ArrowDownIcon className="h-8 w-8 text-primary" />
        </motion.a>
      </div>
    </section>
  )
}
