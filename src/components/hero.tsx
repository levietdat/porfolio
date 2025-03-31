"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden py-20">
      <div className="container flex flex-col items-center justify-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary shadow-lg sm:h-48 sm:w-48"
        >
          <Image 
            src="/placeholder.svg" 
            alt="Your Avatar" 
            width={192}
            height={192}
            className="h-full w-full object-cover" 
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-2"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">Hi, I&apos;m</span>
            <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Viet Dat
            </span>
          </h1>
          <h2 className="text-xl text-muted-foreground sm:text-2xl">Fullstack Developer</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-[42rem] text-muted-foreground"
        >
          Looking for a position that allows me to apply my strong analytical and problem-solving skills, along with my
          passion for continuous learning, to create a positive impact and contribute to organizational goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10"
        >
          <Link href="#about">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowDown className="h-6 w-6 animate-bounce" />
              <span className="sr-only">Scroll down</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

