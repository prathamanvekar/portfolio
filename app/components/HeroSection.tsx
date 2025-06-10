"use client"

import type React from "react"
import { motion } from "framer-motion"
import inumaki from "@/public/images/inumaki.jpeg" // Adjust the path as needed
import { TextGenerateEffect } from "./ui/TypewriterText" // Adjust the import as needed

interface HeroSectionProps {
  words: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ words }) => (
  <section className="py-10 z-10 font-serif" id="home">
    <div className="flex flex-col md:flex-row items-center max-w-8xl px-6 py-8 mx-auto">
      <div className="w-full md:w-1/2 py-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl"
        >
          hi there
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-7xl font-semibold leading-none tracking-tighter"
        >
          <span className="block">i am</span>
          <span className="text-blue-500">
            <TextGenerateEffect words={words} />
          </span>{" "}
          a web developer.
        </motion.h1>

        {/* Subtle tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-2xl mt-6 text-gray-600"
        >
          crafting digital experiences with <span className="text-blue-500 font-semibold">passion</span> and{" "}
          <span className="text-blue-500 font-semibold">precision</span>
        </motion.p>

        {/* Get in touch button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-8"
        >
          <a
            href="#contact"
            className=" inline-block px-8 py-4 text-xl font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            get in touch
          </a>

          {/* Optional: View my work link */}
          <a
            href="#experience"
            className="inline-block ml-6 px-8 py-4 text-xl font-semibold text-blue-500 border border-blue-500 hover:bg-blue-50 transition-all duration-300"
          >
            view my work
          </a>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <img
            src={inumaki.src || "/placeholder.svg"}
            alt="inumaki"
            className="w-full h-auto hover:scale-105 transition-transform duration-300"
          />

          {/* Optional: Subtle border accent */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-500 -z-10"></div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default HeroSection
