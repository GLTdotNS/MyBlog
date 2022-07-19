import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
// import { animation } from '../../animations/animation'
import LoadingSpin from 'react-loading-spin'
import Skills from './Hero/Skills'
import { urlForImg } from '../../lib/sanityClient'
import { downloadPdf } from '../../scripts/download'
import { animation } from '../../animations/animation'
import GitHub from '../Blog/BlogPageComponents/GitHub'

const About = ({banner}) => {
  
  const [github, setGithub] = useState(null);

  useEffect(() => {
    fetch(`/api/hello`)
      .then(response => response.json())
      .then(response => {
        setGithub(response.name)
      })

  }, [])


  // useEffect(() => {
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
    console.log(banner)
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
    <motion.div
      {...animation}
    >
      <div className='leftcolumn'>
        <GitHub github={github}/>
      </div>
      <div className='aboutme'>

        <div className="full">
          <div className="left">
            <div className="image">
              <img
                id='mypic'
                className='mypic'
                src={urlForImg(banner[0].image).url()}
              />
            </div>
            <div className="name">
              <h3>{banner[0].firstName}</h3>
              <h1>{banner[0].lastName}</h1>
              <hr style={{ backgroundColor: 'black' }} />
              <br />
              <div className="title">
                <p>Senior Developer</p>
              </div>
              <div className="Contact">
                <a href='mailto:georgitonkow@gmail.com'><b>Email: </b>georgitonkow@gmail.com</a>
                <p id='phone'><b>Mobile : </b>{banner[0].phone}</p>
                <button type='button' className='btn' style={{ float: "right" }}
                  onClick={() => downloadPdf("./cv.pdf", "cv.pdf")}>
                  Download CV
                </button>
              </div>


              <div className="Summary">

                <h2>Summary</h2>
                <p> {banner[0].about}</p>

              </div>
            </div>
            <div className="Skills">
              <Skills />
            </div>

          </div>



          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="right">


            <div className="Experience">
              <h2>Experience</h2>
              <h3>NASA</h3>
              <h3>Security Specialist</h3>
              <p>January 2022 to Present</p>
              <br />
              <ul>
                <li>Actively engaged in web creative
                  design and development.</li>
                <li>Designing project & planing</li>
              </ul>
              <br />

              <h3>Google Inc.</h3>
              <h3>Program Manager and  Co-Founder</h3>
              <p>September , 04 , 1998 - January , 2022</p>
              <br />
              <ul>
                <li>Actively engaged in web creative
                  design and development.</li>
                <li>Designing project & planing</li>
                <li>Working on designing</li>
              </ul>
              <br />
            </div>

            <div className="Education">
              <h2>Education</h2>

              <div >
                <br></br>
                <hr />

                <div>
                  <h3  > Septmeber 2013 - 2017 July</h3>
                  <h5 >PU Paisiy Hilendarski , Plovdiv , Bulgaria</h5>
                </div>

                <h3>Slavic philology</h3>
                <br />
                <ul>
                  <li>
                    Bulgarian
                  </li>
                  <li>
                    Ancient Bulgarian
                  </li>
                  <li>
                    History
                  </li>
                </ul>
                <br />
                <hr />
                <h3>Septmeber 2001 - 2013 May</h3>
                <h5>High School Vasil Levski , Haskovo , Bulgaria</h5>
                <br></br>
                <h3>Мathematical profile</h3>
                <br />
                <ul>
                  <li>
                    Mathematics
                  </li>
                  <li>
                    Biology
                  </li>
                  <li>
                    Chemie
                  </li>
                  <li>
                    Information technologies
                  </li>
                  <li>
                    English
                  </li>
                </ul>

              </div>

            </div>

            <div className="Hobbies">
              <h2>Hobbies</h2>
              <ul>
                <li>
                  Painting
                </li>
                <li>
                  Mountain biking
                </li>
                <li>
                  Rubic`s cube solving
                </li>
                <li>
                  Coding
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div >
  )
}

export default About
