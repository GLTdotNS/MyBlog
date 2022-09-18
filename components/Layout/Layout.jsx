import React from 'react'
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import GitHub from "../Blog/BlogPageComponents/GitHub"
import { SiGithub } from "react-icons/si"
import { useEffect, useState } from 'react'
import { motion, useViewportScroll } from "framer-motion";


const Layout = ({ children }) => {

  const [github, setGithub] = useState(null);
  const [contributions, setContributions] = useState(null);
  const [show, setShow] = useState(false);
  const [showYT, setShowYT] = useState(false);
  const { scrollYProgress } = useViewportScroll();



  const showGithub = (e) => {
    const left = document.getElementById("1")

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




      <div className='leftcolumn' id='1'>

        {!show ?
          <button className='buttonGit' onClick={(e) => showGithub(e)}><SiGithub size={30} /></button>
          : <button style={{ backgroundColor: "transparent", color: "white" }}
            className='buttonGit' onClick={(e) => showGithub(e)}>X</button>}
        {show ? <GitHub github={github} contributions={contributions} /> : ""}
        
        
        <iframe
         style={{ marginTop: "100%" }} width="100%" height="40%" frameBorder="0"
         src="https://www.youtube.com/embed/videoseries?list=PLqgC5GwGE2ngCaRadjcWjY1XSEBhZdoXj">
        </iframe>
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
