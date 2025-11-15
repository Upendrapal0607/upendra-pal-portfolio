// import React from 'react'
// import { Link } from 'react-scroll'
// import { motion } from 'framer-motion'

// export default function Hero() {
//   return (
//     <section id="home" className="min-h-screen section flex items-center">
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div>
//           <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-serif">
//             Hey, 👋 <br /> I am Upendra Pal
//           </motion.h1>
//           <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 text-gray-300 max-w-xl leading-relaxed">
//             Full Stack Web Developer focused on building robust AdTech & SaaS solutions using TypeScript, Node.js and React.
//           </motion.p>
//           <div className="mt-6 flex gap-3">
//             <a href="mailto:upendrapal06072@gmail.com" className="btn-light">Hire Me</a>
//             <Link to="projects" smooth duration={600} offset={-80} className="btn-ghost inline-flex items-center cursor-pointer">View Projects</Link>
//           </div>
//         </div>

//         <div className="flex justify-center md:justify-end">
//           {/* replace with svg or image in src/assets/images */}
//           <div className="w-80 h-56 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl shadow-lg" />
//         </div>
//       </div>
//     </section>
//   )
// }





import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-bg to-black text-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* === Left Content === */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-serif font-bold leading-tight"
          >
            Hey 👋, I'm <span className="text-primary">Upendra Pal</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mt-3 text-gray-400 font-medium"
          >
            Full Stack Developer — AdTech & SaaS Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-300 max-w-xl leading-relaxed"
          >
            Software Engineer with 1+ years of experience building and scaling
            <span className="text-white font-medium"> SaaS-based B2B and AdTech platforms. </span>
            Skilled in <span className="text-primary font-medium">TypeScript, Node.js, and React</span>, 
            focused on creating high-performance, maintainable systems that deliver measurable business impact.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-5 text-gray-400 text-sm space-y-1"
          >
            <li>• Improved API performance by 30% at Trackier through optimized query handling</li>
            <li>• Developed NookPay — a secure vendor payout system with RazorpayX integration</li>
            <li>• Migrated legacy PHP services to Node.js + TypeScript microservices</li>
          </motion.ul>

          {/* === Buttons === */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="mailto:upendrapal06072@gmail.com"
              className="bg-primary text-white px-5 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg"
            >
              Hire Me
            </a>

            <Link
              to="projects"
              smooth
              duration={600}
              offset={-80}
              className="border border-gray-500 text-gray-200 px-5 py-3 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition-all"
            >
              View Projects <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* === Right Illustration === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center md:justify-end relative"
        >
          <div className="relative w-80 md:w-96">
            <img
              src="https://raw.githubusercontent.com/MicaelliMedeiros/micaellimedeiros/master/image/computer-illustration.png"
              alt="developer illustration"
              className="w-full h-auto drop-shadow-[0_0_30px_rgba(14,165,164,0.4)]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

