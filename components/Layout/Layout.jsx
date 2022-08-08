import React from 'react'

import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import StickySocialMediaBar from "../Sticky/stickySocialMediaBar"
import GitHub from "../Blog/BlogPageComponents/GitHub"
import { useEffect, useState } from 'react'
import { motion, useViewportScroll } from "framer-motion";
import { AiOutlineArrowUp } from "react-icons/ai"

const Layout = ({ children }) => {

  const [github, setGithub] = useState(null);
  const [contributions, setContributions] = useState(null);

  const { scrollYProgress } = useViewportScroll();



  const scroll = () => {
    window.scrollTo(0, 0)

  }



  useEffect(() => {
    fetch(`/api/getGitHubInfo`)
      .then(response => response.json())
      .then(response => {
        setGithub(response.name)
      })

  }, [])

  useEffect(() => {

    const url = `/api/getContributions`

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response.data.data)
        setContributions(response.data.data.viewer.contributionsCollection
          .contributionCalendar.totalContributions)
      })
  }, [])


  return (
    <div className='layout'>

      <header>
        <Navbar />
      </header>
      <StickySocialMediaBar />

      <div className='leftcolumn'>
        <GitHub github={github} contributions={contributions} />
      </div>

      <AiOutlineArrowUp size={60} id='scrollButton' onClick={scroll} />

      <main className='main-container row' >

        {children}

        <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
        <Footer />

      </main>

    </div>
  )
}

export default Layout
