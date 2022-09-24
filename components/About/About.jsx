import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import LoadingSpin from 'react-loading-spin'
import Skills from './Hero/Skills'
import { animation } from '../../animations/animation'
import Expirience from './Hero/Expirience'
import Education from './Hero/Education'
import Hobbies from './Hero/Hobbies'
import Hero from './Hero/Hero'
import References from './Hero/References'
import Contacts from './Hero/Contacts'

const About = ({ banner, references }) => {

  //   client
  //     .fetch(
  //       groq`*[_type == "banner"]{
  //     about,
  //     firstName,
  //     lastName,
  //     years,
  //     phone,
  //     city,
  //     image{
  //       asset->{
  //         _id,
  //         url
  //        }
  //      },

  // }`
  //     )
  //     .then((data) => {

  //       setBanner(data[0])

  //     })
  //     .catch(console.error);
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Автобиография - Георги Тонков";
  }, [])



  if (!banner) {

    return (
      <div className="spinner">
        <LoadingSpin
          duration="2s"
          width="15px"
          timingFunction="ease"
          direction="alternate"
          size="200px"
          primaryColor="white"
          secondaryColor="#333"
          numberOfRotationsInAnimation={Infinity}
        />
      </div>
    )
  };



  return (
    <div {...animation}>
      <div className='aboutme'>

        <div className="full">
          <div className="left">
            <Hero banner={banner} />
            <Skills />
          </div>

          <div className="right">

            <Expirience />
            <Education />
            <Hobbies />

          </div>

        </div>

        <hr />
        <References references={references} />
        <hr />
        <div style={{padding: "5%"}} id="contact">

          <Contacts />
        </div>
      </div>

    </div >
  )
}

export default About
