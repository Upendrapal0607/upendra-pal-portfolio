import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  // detect scroll for background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // close menu on link click (mobile)
  const handleLinkClick = (id: string) => {
    setIsOpen(false)
    setActive(id)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-panel/90 backdrop-blur-md shadow-md border-b border-gray-700' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-white font-serif text-lg font-semibold px-3 py-1 rounded-md bg-black/40 cursor-pointer"
        >
          UPENDRA PAL
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map(n => (
            <li key={n.id}>
              <Link
                to={n.id}
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setActive(n.id)}
                className={`cursor-pointer font-medium transition-colors ${
                  active === n.id
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {n.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              className="ml-3 bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all shadow-lg"
              href="/resume.pdf"
              download
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden bg-panel/95 backdrop-blur-md border-t border-gray-700"
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          {navItems.map(n => (
            <li key={n.id}>
              <Link
                to={n.id}
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => handleLinkClick(n.id)}
                className={`block text-lg font-medium ${
                  active === n.id ? 'text-primary' : 'text-gray-300'
                } hover:text-white transition-colors`}
              >
                {n.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="bg-primary text-white px-5 py-2 rounded-lg shadow hover:opacity-90 transition-all"
            >
              Resume
            </a>
          </li>
        </ul>
      </motion.div>
    </nav>
  )
}
