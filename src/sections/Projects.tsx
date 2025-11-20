import React from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects'
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
export default function Projects() {
  return (
    <section id="projects" className="bg-black py-16 sm:py-20">
      <div className="max-w-full mx-auto px-3 sm:px-6">
        {/* 🧭 Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl text-center font-serif mb-10 sm:mb-12 text-white"
        >
          My Projects
        </motion.h2>

        {/* 🧩 Project Cards */}
        <div className="flex flex-col gap-10 sm:gap-14">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col lg:flex-row bg-[#111] rounded-2xl overflow-hidden 
                         shadow-[0_0_20px_rgba(255,255,255,0.05)] 
                         hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] 
                         transition-all duration-500"
            >
              {/* 🖼️ Project Image */}
             <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-6 flex items-center justify-center">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-64 sm:h-80 lg:h-[420px] object-cover rounded-xl 
                             shadow-[0_0_15px_rgba(0,255,255,0.08)] hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] 
                             transition-all duration-300"
                />
              </div>


              {/* 📋 Project Info */}
              <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {p.title}
                  </h3>
                  <p className="text-gray-300 mb-5 leading-relaxed text-sm sm:text-base">
                    {p.description}
                  </p>

                  {/* 🧠 Tech Stack */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {p.techStack.map(skill => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center text-center"
                      >
                        <img
                          src={skill.img}
                          alt={skill.name}
                          className="w-8 h-8 sm:w-10 sm:h-10 mb-1"
                        />
                        <p className="text-xs sm:text-sm text-gray-400 font-medium">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 🔗 Buttons */}
                <div className="flex gap-3 sm:gap-4 justify-between">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex justify-between items-center gap-2 sm:flex-none px-4 sm:px-5 py-2 text-center bg-[#1c1c1c] 
                               text-gray-100 rounded-lg border border-gray-700 
                               hover:border-cyan-400 hover:text-cyan-400 transition-all text-sm sm:text-base"
                  >
                    <p>

                    GitHub 
                    </p>
                    <SiGithub className='text-xl'/>
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex justify-between items-center gap-2 sm:flex-none px-4 sm:px-5 py-2 text-center bg-cyan-500 
                                 text-black font-medium rounded-lg hover:bg-cyan-400 
                                 transition-all text-sm sm:text-base"
                    >
                      <p>
                      Deploy
                      </p>
                      <BiLinkExternal className='text-xl' />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
