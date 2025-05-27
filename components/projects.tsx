"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  // Update the projects array with your projects
  const projects = [
    {
      id: 1,
      title: "Hospital Management System (Backend)",
      description:
        "A robust and scalable backend application built using Django Rest Framework (DRF). It provides a secure and efficient way to manage hospital operations, including patient records, doctor appointments, staff management, billing, and inventory control.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benefits-of-using-the-openapi-swagger-specification-for-your-api-OrvT8D3lrxQiCu6RrChwa5SHOq5vC0.png",
      tags: ["Python", "Django", "Django Rest Framework", "RESTful API"],
      category: "backend",
      github: "https://github.com/samriddhakunwar/hospitalmanagementsystembackend",
      demo: "https://github.com/samriddhakunwar/hospitalmanagementsystembackend",
    },
    {
      id: 2,
      title: "Hospital Management System (Frontend)",
      description:
        "A user-friendly web application built using Django. It provides an intuitive interface for hospital administrators, doctors, and staff to manage day-to-day operations efficiently, including patient registration, appointment scheduling, and medical records.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-18%20123336-TsieKpyusWpBxgq4VJQemyUbgScuRo.png",
      tags: ["Django", "HTML", "CSS", "Responsive Design"],
      category: "frontend",
      github: "https://github.com/samriddhakunwar/hospitalManagementSystemFrontend",
      demo: "https://github.com/samriddhakunwar/hospitalManagementSystemFrontend",
    },
    {
      id: 3,
      title: "Valentine's Special",
      description:
        "A creative and interactive website built with React and Vite to propose to someone special. This romantic web application features animations and a personalized experience.",
      image:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExejByNnFqbmYyM2pqbm8zd2dmdWdlamw5ZXlqMGFsZ2p6em11bTltOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sNPeJFq6YNEvLZdcqX/giphy.gif",
      tags: ["React", "Vite", "JavaScript", "CSS"],
      category: "frontend",
      github: "https://github.com/samriddhakunwar/valentinesSpecial",
      demo: "https://valentinesspecial123.netlify.app/",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8 relative">
            <motion.div
              className="absolute inset-0 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <TabsList className="mx-auto bg-muted">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground relative overflow-hidden group"
              >
                <span className="relative z-10">All</span>
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: activeTab === "all" ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </TabsTrigger>
              <TabsTrigger
                value="frontend"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground relative overflow-hidden group"
              >
                <span className="relative z-10">Frontend</span>
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: activeTab === "frontend" ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground relative overflow-hidden group"
              >
                <span className="relative z-10">Backend</span>
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: activeTab === "backend" ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </TabsTrigger>
              <TabsTrigger
                value="fullstack"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground relative overflow-hidden group"
              >
                <span className="relative z-10">Full Stack</span>
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: activeTab === "fullstack" ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Card className="overflow-hidden h-full flex flex-col border border-accent/20 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-video overflow-hidden">
                  {project.id === 3 ? (
                    // For Valentine's Special project, use the GIF directly
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                      style={{
                        transform: hoveredProject === project.id ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                  ) : (
                    // For other projects, use img tag for the provided images
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                      style={{
                        transform: hoveredProject === project.id ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <p className="text-white text-sm font-medium">{project.category.toUpperCase()}</p>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * tagIndex }}
                        className="px-2 py-1 bg-accent/20 text-foreground rounded-full text-xs font-medium"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className={`border-primary text-primary hover:bg-primary/10 relative overflow-hidden group ${
                        project.category === "backend" ? "w-full" : ""
                      }`}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 justify-center"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </a>
                    </Button>

                    {/* Only show Live Demo button for non-backend projects */}
                    {project.category !== "backend" && (
                      <Button
                        size="sm"
                        asChild
                        className="bg-primary hover:bg-primary/90 relative overflow-hidden group"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-primary text-primary hover:bg-primary/10 relative overflow-hidden group"
          >
            <a
              href="https://github.com/samriddhakunwar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span>See More Projects</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
