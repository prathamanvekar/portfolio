"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const technologies = [
  { name: "react", url: "https://react.dev/", category: "frontend" },
  { name: "node.js", url: "https://nodejs.org/", category: "backend" },
  { name: "typescript", url: "https://www.typescriptlang.org/", category: "language" },
  { name: "mongodb", url: "https://www.mongodb.com/", category: "database" },
  { name: "tailwindcss", url: "https://tailwindcss.com/", category: "styling" },
  { name: "next.js", url: "https://nextjs.org/", category: "framework" },
  { name: "python", url: "https://www.python.org/", category: "language" },
  { name: "express", url: "https://expressjs.com/", category: "backend" },
]

const personalValues = [
  {
    title: "continuous learning",
    description: "i believe in constantly evolving and staying curious about new technologies and methodologies.",
  },
  {
    title: "user-centric design",
    description:
      "every line of code i write is with the end user in mind, ensuring optimal experience and accessibility.",
  },
  {
    title: "collaborative spirit",
    description: "i thrive in team environments where ideas are shared freely and everyone contributes to success.",
  },
]

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("professional")
  const [hoveredValue, setHoveredValue] = useState<string | null>(null)

  return (
    <section className="py-10 z-10 font-serif" id="about">
      <div className="flex flex-col max-w-8xl px-6 py-8 mx-auto">
        <div className="w-full py-8">
          <h2 className="text-6xl font-semibold leading-none tracking-tighter py-3">about me</h2>

          {/* Tab navigation */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setActiveTab("professional")}
              className={`px-6 py-2 text-xl transition-colors ${
                activeTab === "professional"
                  ? "bg-blue-500 text-white"
                  : "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50"
              }`}
            >
              professional
            </button>
            <button
              onClick={() => setActiveTab("personal")}
              className={`px-6 py-2 text-xl transition-colors ${
                activeTab === "personal"
                  ? "bg-blue-500 text-white"
                  : "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50"
              }`}
            >
              personal
            </button>
            <button
              onClick={() => setActiveTab("values")}
              className={`px-6 py-2 text-xl transition-colors ${
                activeTab === "values"
                  ? "bg-blue-500 text-white"
                  : "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50"
              }`}
            >
              values
            </button>
          </div>

          {/* Content based on active tab */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "professional" && (
              <div>
                <p className="text-2xl mb-6">
                  i am a <span className="text-blue-500 font-semibold">fullstack developer</span> with a passion for
                  creating visually stunning and user-friendly web applications. i love learning new things every day
                  and enjoy building <span className="text-blue-500 font-semibold">solutions</span> that make a strong
                  visual impact on users.
                </p>

                <p className="text-2xl mb-6">
                  my approach combines <span className="text-blue-500 font-semibold">technical expertise</span> with
                  creative problem-solving. i thrive in{" "}
                  <span className="text-blue-500 font-semibold">collaborative environments</span> where i can contribute
                  to meaningful projects and learn from talented teammates.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 border border-blue-200 hover:border-blue-500 transition-colors">
                    <div className="text-3xl font-bold text-blue-500 mb-2">1+</div>
                    <div className="text-xl">years coding</div>
                  </div>
                  <div className="text-center p-4 border border-blue-200 hover:border-blue-500 transition-colors">
                    <div className="text-3xl font-bold text-blue-500 mb-2">2+</div>
                    <div className="text-xl">projects built</div>
                  </div>
                  <div className="text-center p-4 border border-blue-200 hover:border-blue-500 transition-colors">
                    <div className="text-3xl font-bold text-blue-500 mb-2">∞</div>
                    <div className="text-xl">cups of coffee</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "personal" && (
                <div>
                <p className="text-2xl mb-6">
                  when i'm not coding, you'll often catch me <span className="text-blue-500 font-semibold">singing</span> my favorite tunes, diving into <span className="text-blue-500 font-semibold">philosophy books</span>, or sometimes <span className="text-blue-500 font-semibold">gaming with the boys</span> to unwind.
                </p>

                <p className="text-2xl mb-6">
                  i'm passionate about <span className="text-blue-500 font-semibold">open source</span> contributions and believe in giving back to the developer community that has taught me so much. i also enjoy <span className="text-blue-500 font-semibold">mentoring</span> newcomers to the field.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-500">interests</h3>
                  <ul className="space-y-2 text-xl">
                    <li>• singing & music</li>
                    <li>• philosophy & deep reading</li>
                    <li>• open source projects</li>
                    <li>• tech podcasts & blogs</li>
                    <li>• hackathons & coding challenges</li>
                  </ul>
                  </div>
                  <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-500">hobbies</h3>
                  <ul className="space-y-2 text-xl">
                    <li>• coding</li>
                    <li>• singing</li>
                    <li>• reading philosophy</li>
                    <li>• exploring new coffee shops</li>
                    <li>• gaming with friends</li>
                  </ul>
                  </div>
                </div>
                </div>
            )}

            {activeTab === "values" && (
              <div>
                <p className="text-2xl mb-8">
                  my work is guided by core <span className="text-blue-500 font-semibold">principles</span> that shape
                  how i approach every project and collaboration.
                </p>

                <div className="space-y-6">
                  {personalValues.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredValue(value.title)}
                      onMouseLeave={() => setHoveredValue(null)}
                      className={`p-6 border-l-4 transition-all duration-300 ${
                        hoveredValue === value.title
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <h3 className="text-2xl font-semibold mb-3 text-blue-500">{value.title}</h3>
                      <p className="text-xl">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          <hr className="my-8 border-blue-500" />

          {/* Technologies section */}
          <div>
            <h3 className="text-3xl font-semibold leading-none tracking-tighter pb-6">some technologies i work with</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {technologies.map((tech, index) => (
                <motion.a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative bg-blue-100 text-blue-600 px-4 py-3 text-xl font-semibold hover:bg-blue-200 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out text-center"
                  style={{ boxShadow: "0 2px 8px 0 rgba(59,130,246,0.08)" }}
                >
                  {tech.name}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.category}
                  </div>
                </motion.a>
              ))}
            </div>

            <p className="text-xl text-gray-600">...and always exploring new tools to add to my toolkit, check out <a
              href="#skills"
              className="text-blue-500 font-semibold text-xl hover:underline transition-colors"
              >
              these!
              </a></p>
          </div>

          <hr className="my-8 border-blue-500" />


        </div>
      </div>
    </section>
  )
}

export default AboutSection
