import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { ArrowUp } from 'lucide-react'

export default function UpButton() {
  return (
    <button
      onClick={() => scroll.scrollToTop({ duration: 600 })}
      aria-label="Scroll to top"
      className="fixed right-6 bottom-6 z-50 
                 w-12 h-12 rounded-full 
                 flex items-center justify-center 
                 bg-[#0b0b0b]/90 backdrop-blur-md
                 border border-cyan-400/40 
                 text-cyan-400 
                 shadow-[0_0_10px_rgba(0,255,255,0.2)] 
                 hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] 
                 hover:border-cyan-400 
                 hover:text-white 
                 transition-all duration-300 
                 hover:scale-110 active:scale-95"
    >
      <ArrowUp size={20} />
    </button>
  )
}
