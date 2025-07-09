"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "backend lead - ieee web project",
    period: "2024 - 2025",
    type: "project leadership",
    description:
      "as the backend lead for our ieee web project, i designed and implemented the server-side architecture of a react-based full stack application. i improved my database management and restful api skills, and learned the value of teamwork and agile practices.",
    highlights: [
      "backend lead",
      "react-based",
      "database management",
      "restful api",
      "teamwork",
      "agile",
    ],
    technologies: [
      "node.js",
      "express",
      "mongodb",
      "react",
      "git",
      "sql",
      "electron",
    ],
    achievements: [
      "led a team of 5 developers",
      "implemented scalable api architecture",
      "delivered high-quality code in 6 months",
    ],
  },
  {
    id: 2,
    title: "cyber canvas hackathon - winner",
    period: "2023",
    type: "competition",
    description:
      "led the development of a beautiful club portfolio using react and other popular technologies. this experience strengthened my skills in modern web development, team collaboration, and delivering high-quality solutions under pressure.",
    highlights: [
      "winner",
      "react",
      "modern web development",
      "team collaboration",
    ],
    technologies: ["react", "tailwind css", "figma", "vercel"],
    achievements: [
      "1st place out of 50+ teams",
      "completed project in just 4 hours",
      "delivered pixel-perfect design",
    ],
  },
];

const ExperienceSection = () => {
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(
    null
  );
  const [expandedExperience, setExpandedExperience] = useState<number | null>(
    null
  );

  return (
    <section className="pb-10 z-10 font-serif" id="experience">
      <div className="flex flex-col max-w-8xl px-6 pb-8 mx-auto">
        <div className="w-full pb-8">
          <h2 className="text-6xl font-semibold leading-none tracking-tighter py-5">
            experience
          </h2>

          <p className="text-2xl mb-8">
            my journey in{" "}
            <span className="font-semibold text-blue-500">
              software development
            </span>{" "}
            has been shaped by hands-on projects and collaborative experiences
            that have honed my technical and
            <span className="font-semibold text-blue-500">
              {" "}
              leadership skills
            </span>
            .
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500 hidden md:block"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative mb-12"
                onMouseEnter={() => setHoveredExperience(experience.id)}
                onMouseLeave={() => setHoveredExperience(null)}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                {/* Experience card */}
                <div
                  className={`md:ml-20 p-6 border-l-4 transition-all duration-300 ${
                    hoveredExperience === experience.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-semibold leading-none tracking-tighter pb-2">
                        {experience.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-lg">
                        <span className="text-blue-500 font-semibold">
                          {experience.period}
                        </span>
                        <span className="text-gray-600">•</span>
                        <span className="text-blue-500 font-semibold">
                          {experience.type}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        setExpandedExperience(
                          expandedExperience === experience.id
                            ? null
                            : experience.id
                        )
                      }
                      className="mt-4 md:mt-0 px-4 py-2 text-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      {expandedExperience === experience.id ? "less" : "more"}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-2xl mb-6">
                    {experience.description
                      .split(" ")
                      .map((word, wordIndex) => {
                        const isHighlighted = experience.highlights.some(
                          (highlight) =>
                            word
                              .toLowerCase()
                              .includes(
                                highlight.toLowerCase().replace(/\s+/g, "")
                              )
                        );
                        return (
                          <span
                            key={wordIndex}
                            className={
                              isHighlighted ? "font-semibold text-blue-500" : ""
                            }
                          >
                            {word}{" "}
                          </span>
                        );
                      })}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">
                      technologies used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-lg bg-blue-100 text-blue-700 border border-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded content */}
                  {expandedExperience === experience.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-blue-200 pt-6"
                    >
                      <h4 className="text-xl font-semibold mb-3">
                        key achievements:
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map(
                          (achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="text-xl flex items-start"
                            >
                              <span className="text-blue-500 mr-3">•</span>
                              {achievement}
                            </li>
                          )
                        )}
                      </ul>
                    </motion.div>
                  )}
                </div>

                {/* Divider (except for last item) */}
                {index < experiences.length - 1 && (
                  <hr className="my-8 border-blue-500 md:ml-20" />
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

export default ExperienceSection;
