"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, ArrowUp, Heart, Coffee, Code, Mail, MapPin } from "lucide-react"

const FooterSection = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const socialLinks = [
    {
      id: "github",
      icon: Github,
      href: "https://github.com/prathamanvekar",
      label: "GitHub",
      hoverColor: "hover:text-gray-800",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      href: "https://linkedin.com/in/prathamanvekar",
      label: "LinkedIn",
      hoverColor: "hover:text-blue-600",
    },
    {
      id: "twitter",
      icon: Twitter,
      href: "https://twitter.com/prathamiscool",
      label: "Twitter",
      hoverColor: "hover:text-blue-400",
    },
  ]

  return (
    <footer className="pt-6 pb-6 z-10 font-serif bg-white border-t border-blue-500">
      <div className="max-w-8xl px-6 mx-auto">

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-xl text-gray-700 mb-4 md:mb-0">
            <div className="flex items-center flex-wrap">
              <span>© {new Date().getFullYear()} prathamesh anvekar. made with</span>
              <Heart className="w-5 h-5 mx-2 text-red-500 animate-pulse" />
              <span>and lots of</span>
              <Coffee className="w-5 h-5 mx-2 text-amber-600" />
              <span>in pune</span>
            </div>
            <div className="flex items-center mt-2 text-lg text-gray-500">
              <Code className="w-4 h-4 mr-2" />
              <span>built with next.js, tailwind css & framer motion</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  onMouseEnter={() => setHoveredIcon(social.id)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-blue-500 ${social.hoverColor} transition-colors text-2xl p-2 rounded-full hover:bg-blue-50`}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>

            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
