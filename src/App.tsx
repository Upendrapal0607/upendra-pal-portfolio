import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
// import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import UpButton from './sections/UpButton'
import GithubStats from './sections/Calender'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        {/* <About /> */}
        <Skills />
        <Projects />
        <GithubStats/>
        <Experience />
        <Contact />
      </main>
      <Footer />
      <UpButton />
    </div>
  )
}

export default App
