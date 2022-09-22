import React from 'react'
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import GitHub from "../Blog/BlogPageComponents/GitHub"
import Image from 'next/image'
import { SiGithub } from "react-icons/si"
import { useEffect, useState } from 'react'
import { motion, useViewportScroll } from "framer-motion";


const Layout = ({ children }) => {

  const [github, setGithub] = useState(null);
  const [contributions, setContributions] = useState(null);
  const [show, setShow] = useState(false);
  const [yt, setYT] = useState("");
  const [apiData, setApiData] = useState({});
  const { scrollYProgress } = useViewportScroll();


  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bac58b03b2msh9cd2d6f987f4ed8p1d8aebjsn4c21fa15b3ae',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };

    fetch('https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5', options)
      .then(response => response.json())
      .then(response => setYT(response.tracks.hits[0].track.url))
      .catch(err => console.error(err));
  }, [])

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let dayOfWeek = weekday[today.getDay()]
  today = mm + '/' + dd + '/' + yyyy;


  const showGithub = (e) => {
    const left = document.getElementById("forShowing")

    if (show) {
      setShow(false)
      left.style.backgroundColor = "black"

    } else {
      left.style.backgroundColor = "#0d1117"
      setShow(true)
    }
  }


  const kelvinToFarenheit = (k) => {
    return ((k - 273.15)).toFixed(0);
  };

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
        setContributions(response.data.data.viewer.contributionsCollection
          .contributionCalendar.totalContributions)
      })

  }, [])



  useEffect(() => {
    fetch(`/api/getWeather`)
      .then(response => response.json())
      .then(response => {
        console.log(response.data)
        setApiData(response.data)
      })
  }, [])



  return (
    <div className='layout'>


      <header>
        <Navbar />
      </header>




      <div className='leftcolumn' id='forShowing'>

        {!show ?
          <button className='buttonGit' onClick={(e) => showGithub(e)}><SiGithub size={30} /></button>
          : <button style={{ backgroundColor: "transparent", color: "white" }}
            className='buttonGit' onClick={(e) => showGithub(e)}>X</button>}
        {show ? <GitHub github={github} contributions={contributions} /> : ""}



        <iframe width="100%" height="20%"
          frameBorder={0}
          style={{marginTop: '100%' , marginBottom:"10%"}}
          src="https://www.youtube.com/embed/nrxcDD7EzGc">
        </iframe>
        <div className="">

          {apiData.main ?
            (


              <div className="widget">

                <div className="left-panel panel">
                  <div className="date">
                    {dayOfWeek + " " + today}
                  </div>
                  <div className="city">
                    {apiData.name}
                  </div>
                  <div className="temp">
                    <Image
                      src={`https://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`}
                      alt={apiData.weather[0].description}
                      width="60"
                      height="60"
                    />
                    {kelvinToFarenheit(apiData.main.temp)}&deg;C
                  </div>
                  <p style={{ color: "black" }}> Real feel {kelvinToFarenheit(apiData.main.feels_like)}&deg; C</p>
                </div>


              </div>


            ) : <p>Loading...</p>}
        </div>
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
