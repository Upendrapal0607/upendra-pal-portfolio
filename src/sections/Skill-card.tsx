import React from 'react'
import { motion } from 'framer-motion'

interface SkillCardProps {
  name: string
  img: string
}

export default function SkillCard({ name, img }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 200, damping: 12 }}
      className="bg-[#0f0f0f] border border-t-0 border-l-0 border-gray-700/40 rounded-xl p-6 flex flex-col items-center justify-center 
                 shadow-[6px_6px_0px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]
                 hover:border-cyan-400/30 transition-all duration-300 min-h-[200px]"
    >
      <img
        src={img}
        alt={name}
        className="w-24 h-24 object-contain mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-transform duration-300 group-hover:scale-110"
      />
      <h3 className="text-center text-gray-200 font-semibold text-base md:text-lg tracking-wide uppercase">
        {name}
      </h3>
    </motion.div>
  )
}
