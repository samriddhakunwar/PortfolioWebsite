"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary flex items-center justify-between">
            <span>Samriddha Kunwar - Resume</span>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </DialogTitle>
          <DialogDescription>Python Django Developer</DialogDescription>
        </DialogHeader>

        <div className="space-y-8 py-4">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary border-b pb-1">ABOUT MYSELF</h3>
              <p className="text-foreground/80">
                I'm a passionate Python Django developer focused on building robust, scalable web applications. In my
                free time, I explore new tools and features, stay updated with the latest in Django, and enjoy sharing
                knowledge with peers to promote best practices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary border-b pb-1">CONTACT</h3>
              <ul className="space-y-1 text-foreground/80">
                <li>Nagarjun, Kathmandu, Nepal (Home)</li>
                <li>kunwarsamriddha@gmail.com</li>
                <li>(+977) 9766451158</li>
                <li>9766451158 (Viber)</li>
                <li>
                  <a
                    href="https://www.instagram.com/samriddhakunwar/"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    instagram.com/samriddhakunwar
                  </a>
                </li>
                <li>
                  <a
                    href="https://leetcode.com/u/nikobabu/"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    leetcode.com/u/nikobabu (Leetcode)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/samriddha.kunwar.5/"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    facebook.com/samriddha.kunwar.5
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Details */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary border-b pb-1">PERSONAL DETAILS</h3>
              <ul className="space-y-1 text-foreground/80">
                <li>Date of birth: 19/06/2006</li>
                <li>Nationality: Nepalese</li>
                <li>Sex: Male</li>
              </ul>
            </div>

            {/* Language Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary border-b pb-1">LANGUAGE SKILLS</h3>
              <p className="text-foreground/80">
                <span className="font-medium">Mother tongue(s):</span> Nepali
              </p>
              <p className="text-foreground/80">
                <span className="font-medium">Other language(s):</span> English, Hindi
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary border-b pb-1">EDUCATION AND TRAINING</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-medium">SEE</h4>
                <p>Maha Manjushree Secondary School</p>
                <p className="text-sm text-foreground/70">
                  <a
                    href="https://www.mahamanjushreeschool.edu.np/"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.mahamanjushreeschool.edu.np
                  </a>
                </p>
                <p className="text-sm text-foreground/70">Kathmandu, Nepal</p>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h4 className="text-lg font-medium">+2 Management (Computer Science)</h4>
                <p>Nepal Kasthamandap College</p>
                <p className="text-sm text-foreground/70">
                  <a
                    href="https://www.kasthamandapcollege.edu.np/"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.kasthamandapcollege.edu.np
                  </a>
                </p>
                <p className="text-sm text-foreground/70">Kalanki, Nepal</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-medium">Python Django Course</h4>
                <p>Mindrisers</p>
                <p className="text-sm text-foreground/70">
                  <a
                    href="https://www.mindrisers.com.np/"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.mindrisers.com.np
                  </a>
                </p>
                <p className="text-sm text-foreground/70">Putalisadak, Nepal</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary border-b pb-1">SKILLS</h3>
            <div className="space-y-2">
              <div>
                <h4 className="text-lg font-medium">Programming Languages</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Python", "Django", "Django Rest FWK", "HTML", "CSS", "Basics of React"].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/20 text-foreground rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary border-b pb-1">PROJECTS</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium">Hospital Management System (Backend)</h4>
                <p className="text-foreground/80 mb-2">
                  The Hospital Management System (HMS) Backend is a scalable Django Rest Framework (DRF) application
                  offering secure APIs for managing patients, appointments, staff, billing, and inventory. It features
                  authentication, role-based access, data validation, and real-time updates for efficient hospital
                  operations.
                </p>
                <p className="text-sm text-foreground/70">
                  Link:{" "}
                  <a
                    href="https://github.com/samriddhakunwar/hospitalmanagementsystembackend"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/samriddhakunwar/hospitalmanagementsystembackend
                  </a>
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium">Hospital Management System (Frontend)</h4>
                <p className="text-foreground/80 mb-2">
                  The Hospital Management System (HMS) Frontend is a responsive Django-based web application offering an
                  intuitive interface for managing hospital tasks like patient registration, appointments, records, and
                  billing. Seamlessly integrated with the backend, it ensures real-time updates and a smooth user
                  experience across devices.
                </p>
                <p className="text-sm text-foreground/70">
                  Link:{" "}
                  <a
                    href="https://github.com/samriddhakunwar/hospitalManagementSystemFrontend"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/samriddhakunwar/hospitalManagementSystemFrontend
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
