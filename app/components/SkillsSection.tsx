"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const featuredSkills = [
  "react",
  "next.js",
  "next-auth",
  "imagekit",
  "typescript",
  "node.js",
  "next.js api routers",
  "python",
  "opencv",
  "c++",
  "c",
  "java",
  "mongodb",
];

const skillCategories = [
  {
    name: "frontend",
    skills: [
      "react",
      "next.js",
      "typescript",
      "javascript",
      "html",
      "css",
      "tailwind css",
      "material ui",
      "framer motion",
      "shadcn ui",
    ],
  },
  {
    name: "backend",
    skills: [
      "node.js",
      "next.js api routers",
      "next.js middleware",
      "express",
      "mongodb",
      "rest api",
      "postgresql",
      "firebase",
    ],
  },
  {
    name: "languages",
    skills: ["c++", "c", "java", "python", "javascript"],
  },
  {
    name: "tools",
    skills: [
      "git",
      "github",
      "next-auth",
      "imagekit",
      "elevenlabs",
      "figma",
      "vs code",
      "postman",
      "npm",
      "yarn",
      "vercel",
    ],
  },
  {
    name: "ai/ml",
    skills: [
      "opencv",
      "tensorflow",
      "scikit-learn",
      "haar cascades",
      "LBPH recognizer",
    ],
  },
  {
    name: "other",
    skills: [
      "agile methodology",
      "ui/ux design",
      "responsive design",
      "seo",
      "testing",
      "performance optimization",
    ],
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("featured");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Get all skills or filter by category
  const displayedSkills =
    activeCategory === "all"
      ? skillCategories.flatMap((category) => category.skills)
      : activeCategory === "featured"
      ? featuredSkills
      : skillCategories.find((category) => category.name === activeCategory)
          ?.skills || [];

  return (
    <section className="pb-10 z-10 font-serif" id="skills">
      <div className="flex flex-col max-w-8xl px-6 pb-8 mx-auto">
        <div className="w-full pb-8">
          <h2 className="text-6xl font-semibold leading-none tracking-tighter py-5">
            skills
          </h2>

          <p className="text-2xl">
            i've developed a{" "}
            <span className="font-semibold text-blue-500">
              diverse, but focused set
            </span>{" "}
            of technical skills throughout my journey as a{" "}
            <span className="font-semibold text-blue-500">developer</span>.
            here's what i bring to the table.
          </p>

          <hr className="my-8 border-blue-500" />

          {/* Category filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2 text-xl transition-colors ${
                activeCategory === "all"
                  ? "bg-blue-500 text-white"
                  : "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50"
              }`}
            >
              all
            </button>

            <button
              onClick={() => setActiveCategory("featured")}
              className={`px-6 py-2 text-xl transition-colors ${
                activeCategory === "featured"
                  ? "bg-blue-500 text-white"
                  : "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50"
              }`}
            >
              featured
            </button>

            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-2 text-xl transition-colors ${
                  activeCategory === category.name
                    ? "bg-blue-500 text-white"
                    : "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills display */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={`${skill}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`relative p-6 border-2 transition-all duration-300 ${
                  hoveredSkill === skill
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <div className="text-2xl font-medium">{skill}</div>

                {/* Animated indicator when hovered */}
                {hoveredSkill === skill && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-1 bg-blue-500"
                  />
                )}
              </motion.div>
            ))}
          </div>

          <hr className="my-8 border-blue-500" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
