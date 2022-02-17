import React from 'react'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Experience2 from './components/experience2/Experience2'
import Education from './components/education/Education'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import TopButton from './components/topButton/TopButton'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Experience2 />
      <Education />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
      <TopButton />
    </div>
  )
}

export default App
