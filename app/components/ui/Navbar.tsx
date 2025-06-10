"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion" // Make sure you have framer-motion installed

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [activeSection, setActiveSection] = useState("home") // State to track active section
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // State for mobile menu

  // Handle scroll visibility and active section
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 5) // Show navbar after scrolling 5px

      // Determine active section based on scroll position
      const sections = ["home", "about", "experience", "projects", "skills", "contact"]
      const sectionElements = sections.map((id) => document.getElementById(id))
      const scrollPosition = window.scrollY + 100 // Offset for better detection

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false) // Close mobile menu when a section is clicked

    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for better positioning
        behavior: "smooth",
      })
    }
  }

  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      scrollToSection(sectionId)
    }
  }

  const navItems = [
    { id: "home", label: "home" },
    { id: "about", label: "about" },
    { id: "experience", label: "exp" },
    { id: "projects", label: "projects" },
    { id: "skills", label: "skills" },
    { id: "contact", label: "contact" },
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: show ? 0 : -20,
          opacity: show ? 1 : 0,
          pointerEvents: show ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md rounded-full shadow-md px-6 py-2 border border-gray-200 hidden md:flex gap-5 items-center font-serif"
        style={{ minWidth: 220, maxWidth: 500 }}
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection(item.id)
            }}
            onKeyDown={(e) => handleKeyDown(e, item.id)}
            tabIndex={0}
            className={`relative px-3 py-1 text-sm font-medium transition-colors ${
              activeSection === item.id ? "text-blue-500" : "text-gray-800 hover:text-blue-500"
            }`}
            aria-current={activeSection === item.id ? "page" : undefined}
          >
            {item.label}

            {/* Active indicator */}
            {activeSection === item.id && (
              <motion.span
                layoutId="activeSection"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </a>
        ))}
      </motion.nav>

      {/* Mobile Navbar Button (Hamburger Icon) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{
          opacity: show ? 1 : 0,
          pointerEvents: show ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-md rounded-full shadow-md p-3 border border-gray-200"
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <div className="w-5 h-5 flex flex-col justify-between items-center">
          <span
            className={`bg-gray-800 block h-0.5 w-5 rounded-sm transition-transform ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`bg-gray-800 block h-0.5 w-5 rounded-sm transition-opacity ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`bg-gray-800 block h-0.5 w-5 rounded-sm transition-transform ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed top-20 left-6 right-6 z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 py-4 font-serif"
      >
        <div className="flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.id)
              }}
              className={`px-6 py-3 text-lg font-medium transition-colors ${
                activeSection === item.id ? "text-blue-500 bg-blue-50" : "text-gray-800 hover:bg-gray-50"
              }`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default Navbar