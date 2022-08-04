import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from "react-hook-form"
import LoadingSpin from 'react-loading-spin'
import Skills from './Hero/Skills'
import { urlForImg } from '../../lib/sanityClient'
import { downloadPdf } from '../../scripts/download'
import { animation } from '../../animations/animation'
import GitHub from '../Blog/BlogPageComponents/GitHub'
import toast from 'react-hot-toast'
import { BsStackOverflow } from "react-icons/bs"

const About = ({ banner, references }) => {

  const [github, setGithub] = useState(null);
  const [contributions, setContributions] = useState(null);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [company, setCompany] = useState('')
  const { register, handleSubmit, errors, reset } = useForm()

  const zoom = () => {

    const pic = document.getElementById("mypic");
  

    if (pic.classList.contains("v")) {
      pic.classList.remove("v");
    
      
    }else{
      pic.classList.add("v");
       
    }
  }



  const onSubmit = (e) => {

    e.preventDefault()
    let data = {
      name,
      email,
      message,
      company,
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)

    }).then((res) => {

      if (res.status === 200) {
        toast.success("Message has been sent successfully. Thanks ! :)", {
          position: "top-center",
          style: {
            border: '1px solid #333',
            padding: '5px',
            color: '#713200',
          }, iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
          },
        });
        setTimeout(() => {
          e.target.reset();
          window.scrollTo(0, 0)
        }, 1000);
      }
    }).catch((e) => {
      toast.success("Failed , try again ", {
        position: "top-center",
        style: {
          border: '1px solid #333',
          padding: '5px',
          color: '#713200',
        }, iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    })


  }
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
      className="aboutMePage"
    >
      <div className='aboutme'>

        <div className="full">
          <div className="left">
            <div id="imageDiv" className="image">
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
                <p id='position'>Full <BsStackOverflow color='#F47F24' /> devolper</p>
              </div>
              <div className="Contact">
                <a href='mailto:georgitonkow@gmail.com'><span>Email: </span>georgitonkow@gmail.com</a>
                <p id='phone'><a href='tel:+359889891905 '>Mobile : {banner[0].phone} </a></p>
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
        <hr />
        <div className='marquee' >
          <h2>References</h2>
          {references.map((ref, index) => (
            <div className='card initial-post forMarquee' style={{ width: "40%" }} key={index}>

              <img
                className='mypic'
                width={100}
                src={urlForImg(ref.image).url()}
              />
              <h2>{ref.name}</h2>

              <span>{ref.description}</span>


            </div>
          ))}
        </div>
        <hr />
        <div className="contactFormContainer aboutme">
          <h2>Contacts </h2>
          <form onSubmit={(e) => handleSubmit(onSubmit(e))}>

            <label htmlFor="fname">Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."
              required onChange={(e) => setName(e.target.value)} />

            <label htmlFor="lname">Email</label>
            <input type="text" id="mail" name="mail" placeholder="Your email.."
              required onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="lname">Company</label>
            <input type="text" id="company" name="company" placeholder="Your company.."
              required onChange={(e) => setCompany(e.target.value)} />

            <label htmlFor="subject">Message</label>
            <textarea id="subject" name="subject"
              placeholder="Write something.." style={{ height: "100px" }}
              required onChange={(e) => setMessage(e.target.value)}></textarea>

            <button className='btn'>Send</button>
          </form>
        </div>
      </div>

    </motion.div >
  )
}

export default About
