"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "CC Solution Platform",
    description:
      "Platform allowing customers to review products (photos/videos) with comment functions on folders/files. Includes workspace management for different user roles.",
    image: "/placeholder.svg",
    tags: ["NestJS", "PostgreSQL", "Socket.IO", "RESTful APIs"],
    github: "#",
    demo: "#",
    duration: "07/2023 - 01/2024",
  },
  {
    title: "CAV - Solution Enterprise",
    description:
      "E-commerce platform selling product packages with subscription options. Features file management, customer feedback, and payment integration via Stripe.",
    image: "/placeholder.svg",
    tags: ["NestJS", "PostgreSQL", "TypeORM", "Socket.IO", "Stripe"],
    github: "#",
    demo: "#",
    duration: "12/2023 - Present",
  },
  {
    title: "Rams",
    description:
      "Administrative system for managing urban, government, and village users. Compiles traffic information and exports data to Excel files.",
    image: "/placeholder.svg",
    tags: ["NestJS", "PostgreSQL", "RESTful APIs"],
    github: "#",
    demo: "#",
    duration: "2022 - 07/2023",
  },
  {
    title: "Flow IDRA Internal Website",
    description:
      "Internal platform enabling administrators to manage users, projects, and company files. Contributed to both backend and frontend development.",
    image: "/placeholder.svg",
    tags: ["NestJS", "PostgreSQL", "ReactJS", "MUI Material"],
    github: "#",
    demo: "#",
    duration: "2023",
  },
  {
    title: "IDRA Website",
    description: "Company profile page with dynamic data management, allowing managers to edit content.",
    image: "/placeholder.svg",
    tags: ["NestJS", "PostgreSQL", "RESTful APIs"],
    github: "#",
    demo: "#",
    duration: "2023",
  },
  {
    title: "Monitoring Matrix",
    description: "National and regional project news and reporting site. Focused on frontend development.",
    image: "/placeholder.svg",
    tags: ["ReactJS", "MUI Material"],
    github: "#",
    demo: "#",
    duration: "2023",
  },
]

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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Projects</h2>
          <p className="mt-4 text-muted-foreground">A selection of my recent work and personal projects</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Card className="h-full overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <span className="font-medium">Duration:</span> {project.duration}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

