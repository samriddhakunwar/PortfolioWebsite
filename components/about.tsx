"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
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

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Here you'll find more information about me, what I do, and my current skills in terms of programming and
            technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Get to know me!</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                My primary focus has been on honing my skills as a{" "}
                <strong className="text-primary">Python Django developer</strong>, constantly refining my technical
                expertise in building robust and scalable web applications.
              </p>
              <p>
                In my leisure time, I pursue my passion for coding by experimenting with new features, frameworks, and
                tools that enhance the functionality of my projects. I enjoy staying updated with the latest
                developments in the Python and Django ecosystems, which keeps me motivated to improve and learn.
              </p>
              <p>
                Additionally, I take great satisfaction in sharing my knowledge with friends and colleagues, helping
                them understand the best practices and nuances of web development. This, for me, is a fulfilling way to
                express my passion for coding and contribute to the community.
              </p>
            </div>
            <Button className="mt-8 bg-primary hover:bg-primary/90" asChild>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                Contact Me
              </a>
            </Button>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { number: "3", label: "Projects Completed" },
                { number: "2006", label: "Born" },
                { number: "1", label: "Recommendation" },
                { number: "3", label: "Years Learning" },
              ].map((item, index) => (
                <Card key={index} className="text-center border border-accent/20">
                  <CardContent className="p-4">
                    <p className="text-3xl font-bold text-primary">{item.number}</p>
                    <p className="text-sm text-foreground/70">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 w-full"
            >
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-lg font-semibold">+2 Management (Computer Science)</h4>
                  <p className="text-foreground/70">Nepal Kasthamandap College</p>
                  <p className="text-sm text-foreground/60">Kalanki, Nepal</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-semibold">Python Django Course</h4>
                  <p className="text-foreground/70">Mindrisers</p>
                  <p className="text-sm text-foreground/60">Putalisadak, Nepal</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-lg font-semibold">SEE</h4>
                  <p className="text-foreground/70">Maha Manjushree Secondary School</p>
                  <p className="text-sm text-foreground/60">Kathmandu, Nepal</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
