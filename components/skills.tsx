"use client"

import { motion } from "framer-motion"
import { Code2, Database, Globe, Layout, Terminal, Figma } from "lucide-react"

export default function Skills() {
  // Update the skill categories to focus on your skills
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-8 w-8" />,
      skills: ["Python", "HTML", "CSS", "JavaScript (Basics)"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layout className="h-8 w-8" />,
      skills: ["Django", "Django Rest Framework", "React (Basics)", "Next.js (Basics)"],
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8" />,
      skills: ["PostgreSQL", "SQLite", "MySQL"],
    },
    {
      title: "Development Tools",
      icon: <Terminal className="h-8 w-8" />,
      skills: ["Git", "GitHub", "VS Code", "PyCharm"],
    },
    {
      title: "Web Development",
      icon: <Globe className="h-8 w-8" />,
      skills: ["RESTful APIs", "Responsive Design", "Frontend Integration"],
    },
    {
      title: "Languages",
      icon: <Figma className="h-8 w-8" />,
      skills: ["Nepali (Native)", "English", "Hindi"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 relative">
            <motion.div
              className="absolute inset-0 bg-accent"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Here are my skills and technologies I've worked with
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-card rounded-lg p-6 shadow-md transition-all duration-300 border border-accent/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className="p-2 bg-primary/10 rounded-lg text-primary"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1 bg-accent/20 text-foreground rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * skillIndex }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "hsl(var(--primary) / 0.2)",
                      color: "hsl(var(--primary))",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
