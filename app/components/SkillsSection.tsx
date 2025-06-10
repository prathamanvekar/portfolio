"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Define skill categories and items
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
    ],
  },

  {
    name: "backend",
    skills: [
      "node.js",
      "express",
      "django",
      "mongodb",
      "postgresql",
      "firebase",
      "rest api",
    ],
  },
  {
    name: "languages",
    skills: ["c++", "c", "java"],
  },
  {
    name: "tools",
    skills: [
      "git",
      "github",
      "figma",
      "vs code",
      "postman",
      "npm",
      "yarn",
      "vercel",
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
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Get all skills or filter by category
  const displayedSkills =
    activeCategory === "all"
      ? skillCategories.flatMap((category) => category.skills)
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
            <span className="font-semibold text-blue-500">diverse set</span> of
            technical skills throughout my journey as a{" "}
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
                key={skill}
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

          {/* Skill highlight section */}
          <div className="mt-12">
            <h3 className="text-3xl font-semibold leading-none tracking-tighter pb-3">
              skill spotlight
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-semibold mb-4">
                  <span className="text-blue-500">frontend</span> development
                </h4>
                <div className="space-y-4">
                  <SkillBar name="react" percentage={80} />
                  <SkillBar name="typescript" percentage={60} />
                  <SkillBar name="css/tailwind" percentage={85} />
                  <SkillBar name="next.js" percentage={85} />
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-4">
                  <span className="text-blue-500">backend</span> development
                </h4>
                <div className="space-y-4">
                  <SkillBar name="node.js" percentage={80} />
                  <SkillBar name="express.js" percentage={80} />
                  <SkillBar name="databases" percentage={70} />
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-4">
                  <span className="text-blue-500">programming</span> languages
                </h4>
                <div className="space-y-4">
                  <SkillBar name="c++" percentage={50} />
                  <SkillBar name="python" percentage={80} />
                  <SkillBar name="java" percentage={70} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skill bar component for the spotlight section
const SkillBar = ({
  name,
  percentage,
}: {
  name: string;
  percentage: number;
}) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-xl">{name}</span>
        <span className="text-xl">{percentage}%</span>
      </div>
      <div className="h-3 bg-gray-200">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-blue-500"
        />
      </div>
    </div>
  );
};

export default SkillsSection;
