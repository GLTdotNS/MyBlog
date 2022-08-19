import React from 'react'
import { urlForImg } from '../../../lib/sanityClient'
import { BsStackOverflow } from "react-icons/bs"

const Hero = ({banner}) => {
  return (
  <>
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
  </>
  )
}

export default Hero
