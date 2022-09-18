import React from 'react'
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import StickySocialMediaBar from "../Sticky/stickySocialMediaBar"
import GitHub from "../Blog/BlogPageComponents/GitHub"
import { useEffect, useState } from 'react'
import { motion, useViewportScroll } from "framer-motion";


const Layout = ({ children }) => {

  const [github, setGithub] = useState(null);
  const [contributions, setContributions] = useState(null);
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useViewportScroll();




  const showGithub = (e) => {
    const left = document.getElementById("1")
    console.log("")
    if (show) {
      setShow(false)
      left.style.backgroundColor = "black"

    } else {
      left.style.backgroundColor = "#0d1117"
      setShow(true)
    }
  }

  useEffect(() => {
    fetch(`/api/getGitHubInfo`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setGithub(response.name)
      })
  }, [])

  useEffect(() => {

    const url = `/api/getContributions`

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response)
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



      <div className='leftcolumn' id='1'>
        {!show ?
          <button className='buttonGit' onClick={(e) => showGithub(e)}>Show</button>
          : <button style={{ backgroundColor: "transparent" }}
            className='buttonGit' onClick={(e) => showGithub(e)}>X</button>}
        {show ? <GitHub github={github} contributions={contributions} /> : ""}
      </div>



      <main className='main-container row' >

        {children}


        <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
        <Footer />

      </main>
    </div>
  )
}

export default Layout
