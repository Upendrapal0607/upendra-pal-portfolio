import React from 'react'
import { Linkedin, Github, Mail, Phone, Code2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-gray-300 border-t border-gray-800 relative">
      <div className="max-w-6xl mx-auto px-6 py-14 text-center flex flex-col items-center gap-6">
        {/* 💬 Header */}
        <div>
          <h3 className="text-3xl font-serif text-white mb-3">Let’s Connect & Collaborate</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I’m always open to exciting opportunities, collaborations, and tech discussions.  
            Recruiters — feel free to reach out if you’re looking for a passionate developer with hands-on experience in 
            <span className="text-cyan-400 font-semibold"> MERN, Cloud & Scalable Systems.</span>
          </p>
        </div>

        {/* 📬 Contact Info */}
        <div className="space-y-1">
          <a
            href="mailto:up06072000@gmail.com"
            className="block text-cyan-400 hover:text-cyan-300 transition"
          >
            <Mail size={16} className="inline mr-2" />
            up06072000@gmail.com
          </a>
          <a
            href="mailto:upendrapal06072@gmail.com"
            className="block text-cyan-400 hover:text-cyan-300 transition"
          >
            <Mail size={16} className="inline mr-2" />
            upendrapal06072@gmail.com
          </a>
          <a
            href="tel:+919569892525"
            className="block text-cyan-400 hover:text-cyan-300 transition"
          >
            <Phone size={16} className="inline mr-2" />
            +91 95698 92525
          </a>
        </div>

        {/* 🌐 Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <a
            href="https://linkedin.com/in/upendrapal0607"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-[#111] rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all shadow-[0_0_10px_rgba(0,255,255,0.15)]"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="https://github.com/Upendrapal0607"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-[#111] rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all shadow-[0_0_10px_rgba(0,255,255,0.15)]"
          >
            <Github size={22} />
          </a>

          <a
            href="https://leetcode.com/u/Upendrapal0607/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-[#111] rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all shadow-[0_0_10px_rgba(0,255,255,0.15)]"
          >
            <Code2 size={22} />
          </a>

          <a
            href="https://x.com/upendrapal0607"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-[#111] rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all shadow-[0_0_10px_rgba(0,255,255,0.15)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M23.953 4.57a10.003 10.003 0 0 1-2.825.775 4.932 4.932 0 0 0 2.163-2.723 9.864 9.864 0 0 1-3.127 1.196A4.918 4.918 0 0 0 16.616 3c-2.72 0-4.932 2.212-4.932 4.932 0 .386.044.763.127 1.124C7.728 8.852 4.1 6.905 1.67 3.905a4.93 4.93 0 0 0-.666 2.475c0 1.706.869 3.213 2.19 4.093a4.903 4.903 0 0 1-2.23-.616v.06c0 2.385 1.693 4.374 3.946 4.827a4.935 4.935 0 0 1-2.224.085 4.935 4.935 0 0 0 4.6 3.417A9.875 9.875 0 0 1 0 19.54a13.933 13.933 0 0 0 7.548 2.212c9.056 0 14.01-7.506 14.01-14.01 0-.213-.005-.426-.014-.637A10.012 10.012 0 0 0 24 4.59z" />
            </svg>
          </a>
        </div>

        {/* 💼 Recruiter CTA */}
        <div className="mt-10 text-sm text-gray-400 max-w-3xl mx-auto border-t border-gray-800 pt-6">
          <p>
            Looking to hire? I specialize in building scalable, secure, and user-friendly applications.  
            Let’s discuss how I can help your team grow!
          </p>
        </div>

        {/* ⚙️ Copyright */}
        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Upendra Pal</span> — All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
