import React, {useState, useEffect} from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import SkillsMobile from './components/SkillsMobile'
import Learning from './components/Learning'
import Contact from './components/Contact'


const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      <Hero/>
      <Navbar/>
      <About/>
      {isMobile ? <SkillsMobile /> : <Skills />}
      <Learning/>
      <Contact/>
      
    </div>
  )
}

export default App
