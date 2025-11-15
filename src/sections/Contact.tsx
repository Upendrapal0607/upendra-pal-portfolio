import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Mail, Phone, Send } from 'lucide-react'

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return

    // ✅ Add dynamic hidden fields before sending
    const timeInput = document.createElement('input')
    timeInput.type = 'hidden'
    timeInput.name = 'time'
    timeInput.value = new Date().toLocaleString()
    form.current.appendChild(timeInput)

    const yearInput = document.createElement('input')
    yearInput.type = 'hidden'
    yearInput.name = 'year'
    yearInput.value = new Date().getFullYear().toString()
    form.current.appendChild(yearInput)

    setIsSending(true)

    try {
      await emailjs.sendForm(
        'service_en7ykmq',       // ✅ Your EmailJS service ID
        'template_sdj49sc',      // ✅ Your EmailJS template ID
        form.current,
        'IVJ-KEF7AB7Tn7byU'      // ✅ Your public key
      )

      alert('✅ Your message has been sent to Upendra Pal! He will connect with you soon.')
      form.current.reset()
    } catch (error) {
      console.error('❌ EmailJS Error:', error)
      alert('❌ Something went wrong. Please try again later.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="section bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-serif mb-12 text-center text-white"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#111] rounded-2xl p-8 shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-gray-800"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Contact Information</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="text-cyan-400" size={20} />
                <a href="mailto:upendrapal06072@gmail.com" className="hover:text-cyan-400 transition">
                  upendrapal06072@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-cyan-400" size={20} />
                <a href="mailto:up06072000@gmail.com" className="hover:text-cyan-400 transition">
                  up06072000@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-cyan-400" size={20} />
                <a href="tel:+919682968386" className="hover:text-cyan-400 transition">
                  +91 96829 68386
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-cyan-400" size={20} />
                <a href="tel:+919569892525" className="hover:text-cyan-400 transition">
                  +91 95698 92525
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#111] rounded-2xl p-8 shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-gray-800"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Send a Message</h3>

            <div className="space-y-5">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"  // ✅ Matches {{name}} in EmailJS template
                  required
                  className="w-full p-3 rounded-md bg-[#1a1a1a] text-gray-200 border border-gray-700 focus:border-cyan-400 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  name="reply_to"  // ✅ Matches {{reply_to}} in template
                  required
                  className="w-full p-3 rounded-md bg-[#1a1a1a] text-gray-200 border border-gray-700 focus:border-cyan-400 outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Your Message</label>
                <textarea
                  name="message"  // ✅ Matches {{message}} in template
                  required
                  rows={5}
                  className="w-full p-3 rounded-md bg-[#1a1a1a] text-gray-200 border border-gray-700 focus:border-cyan-400 outline-none resize-none"
                  placeholder="Write your message here..."
                />
              </div>

             
<button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-medium py-3 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
