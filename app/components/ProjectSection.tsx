"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card"

import medibot from "../../public/images/medibot.png"
import hackathon from "../../public/images/hackathon.png"
import divImage from "../../public/images/div.svg"

const projects = [
  {
    id: 1,
    title: "ai medical vision bot",
    description: "revolutionizing healthcare with ai assisted medical diagnoses using voice and image analysis",
    image: medibot,
    technologies: ["python", "tensorflow", "react", "node.js", "mongodb"],
    category: "ai/ml",
    status: "completed",
    featured: true,
    links: {
      demo: "https://github.com/prathamanvekar/ai-medical-vision-bot",
      code: "https://github.com/prathamanvekar/ai-medical-vision-bot",
      case_study: "#",
    },
    achievements: ["helpful for healthcare", "uses voice and image", "real-time processing"],
  },
  {
    id: 2,
    title: "cyber canvas website",
    description: "this is the club portfolio website that won us the cyber canvas hackathon",
    image: hackathon,
    technologies: ["react", "tailwind css", "framer motion", "vercel"],
    category: "web development",
    status: "live",
    featured: true,
    links: {
      demo: "https://legacy-peer-deps.vercel.app",
      code: "https://github.com/prathamanvekar/legacy-peer-deps",
    },
    achievements: ["1st place winner", "48-hour build", "responsive design"],
  },
  {
    id: 3,
    title: "center a div",
    description: "i actually centered a div without using the flexbox, here's how",
    image: divImage,
    technologies: ["html", "css", "javascript"],
    category: "tutorial",
    status: "published",
    featured: false,
    links: {
      demo: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
      code: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
    },
    achievements: ["10k+ views", "educational content", "css mastery"],
  },
]

const categories = ["all", "ai/ml", "web development", "tutorial"]

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="pb-10 z-10 font-serif" id="projects">
      <div className="flex flex-col max-w-8xl px-6 pb-8 mx-auto">
        <div className="w-full pb-8">
          <h2 className="text-6xl font-semibold leading-none tracking-tighter py-5">projects</h2>

          <p className="text-2xl mb-8">
            a collection of <span className="font-semibold text-blue-500">projects</span> that showcase my technical
            skills and <span className="font-semibold text-blue-500">creative problem-solving</span> abilities.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-xl transition-colors ${
                  activeCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card hover:shadow-xl border-black/[0.1] w-full sm:max-w-[30rem] h-auto rounded-xl p-6 border flex flex-col mx-auto">
                    {/* Project status and featured badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span
                        className={`px-3 py-1 text-sm font-semibold rounded-full ${
                          project.status === "live"
                            ? "bg-green-100 text-green-600"
                            : project.status === "completed"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {project.status}
                      </span>
                      {project.featured && (
                        <span className="px-3 py-1 text-sm font-semibold bg-yellow-100 text-yellow-600 rounded-full">
                          featured
                        </span>
                      )}
                    </div>

                    <CardItem translateZ="50" className="text-3xl font-bold mb-2">
                      {project.title}
                    </CardItem>

                    <CardItem as="p" translateZ="60" className="text-2xl max-w-sm mb-4">
                      {project.description}
                    </CardItem>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-1 text-sm bg-blue-50 text-blue-600 rounded">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-sm bg-gray-100 text-gray-600 rounded">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <CardItem translateZ="100" className="w-full mb-4">
                      <img
                        src={project.image.src || "/placeholder.svg"}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt={project.title}
                      />
                    </CardItem>

                    {/* Achievements */}
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4"
                      >
                        <h4 className="text-lg font-semibold mb-2 text-blue-500">key highlights:</h4>
                        <ul className="space-y-1">
                          {project.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-sm flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Action buttons */}
                    <div className="flex gap-3 mt-auto">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-blue-500 text-white px-4 py-2 rounded text-center text-lg font-semibold hover:bg-blue-600 transition-all duration-300"
                        >
                          live demo
                        </a>
                      )}
                      {project.links.code && (
                        <a
                          href={project.links.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded text-center text-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                        >
                          code
                        </a>
                      )}
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>

          <hr className="my-8 border-blue-500" />

          {/* Project stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">{projects.length}</div>
              <div className="text-xl">projects completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">
                {projects.filter((p) => p.status === "live").length}
              </div>
              <div className="text-xl">live applications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">{projects.filter((p) => p.featured).length}</div>
              <div className="text-xl">featured projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">
                {[...new Set(projects.flatMap((p) => p.technologies))].length}
              </div>
              <div className="text-xl">technologies used</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
