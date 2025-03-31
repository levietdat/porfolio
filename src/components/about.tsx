"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  { category: "Backend", items: ["Node.js", "NestJS", "Express", "RESTful APIs", "Socket.IO"] },
  { category: "Database", items: ["PostgreSQL", "TypeORM"] },
  { category: "Frontend", items: ["React", "MUI Material"] },
  { category: "Tools & Others", items: ["Git", "GitHub", "Stripe", "Data Flow Diagrams"] },
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
  show: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <p className="mt-4 text-muted-foreground">Get to know my background and technical expertise</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">Who I Am</h3>
            <p className="text-muted-foreground">
              I aim to leverage my accumulated experience and skills, particularly in NestJS, Node.js, PostgreSQL,
              Socket.IO, and React, to establish a stable career and excel in my role. In the shortest time possible, I
              will acquire new knowledge and meet all assigned targets.
            </p>
            <p className="text-muted-foreground">
              With experience as a Backend Developer at FLOW IDRA LIMITED since June 2022, I've designed databases,
              managed project logic based on customer requests, built reusable code, and created RESTful APIs for
              various web applications.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about creating efficient, scalable backend solutions and continuously improving my skills
              to deliver high-quality work.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {skills.map((skillGroup) => (
              <motion.div key={skillGroup.category} variants={item}>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="mb-4 font-bold">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

