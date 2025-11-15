import React from 'react'
import { motion } from 'framer-motion'
import GitHubCalendar from 'react-github-calendar'

export default function GithubStats() {
  const username = 'Upendrapal0607'

  return (
    <section id="github" className="section bg-black py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-serif mb-12 text-white"
        >
          GitHub Activity & Contributions
        </motion.h2>

        {/* GitHub Calendar */}
      {/* GitHub Calendar */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="bg-[#111] rounded-2xl p-6 mb-10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
>
  <h3 className="text-xl font-medium text-cyan-400 mb-6">
    2025 GitHub Contribution Calendar
  </h3>

  <div className="overflow-x-auto">
   <GitHubCalendar
  username={username}
  colorScheme="dark"
  fontSize={14}
  blockSize={14}
  blockMargin={5}
  theme={{
    dark: [
      '#161b22',
      '#0e4429',
      '#006d32',
      '#26a641',
      '#39d353',
    ],
  }}
/>

  </div>
</motion.div>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Streak Stats */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 150 }}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          >
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=Upendrapal0607&theme=sea&hide_border=true&border_radius=10&date_format=j%20M%5B%20Y%5D"
              alt="GitHub Streak"
              className="w-full rounded-2xl"
            />
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 150 }}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=Upendrapal0607&show_icons=true&title_color=4c3575&text_color=dddddd&icon_color=4c3575&bg_color=000000&hide_border=true&border_radius=10"
              alt="GitHub Stats"
              className="w-full rounded-2xl"
            />
          </motion.div>

          {/* Top Languages */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 150 }}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          >
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Upendrapal0607&layout=compact&title_color=4c3575&text_color=dddddd&bg_color=000000&hide_border=true&border_radius=10"
              alt="Top Languages"
              className="w-full rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
