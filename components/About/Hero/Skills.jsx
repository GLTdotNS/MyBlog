import React, { useEffect } from 'react'
import { IoLogoCss3, IoLogoHtml5 } from 'react-icons/io'
import { GrReactjs } from 'react-icons/gr'
import { SiJavascript, SiCsharp } from 'react-icons/si'
import { reveal } from '../../../animations/skillsBarAnimation'

const Skills = () => {

  useEffect(() => {
    window.onload = reveal();
    window.addEventListener("scroll", reveal);
  },[])


  return (
    <div className='skills-section '>
      <h2>Tech skills</h2>


      <p > <IoLogoHtml5 size={20} color={"red"}  /> HTML</p>
      <div className="container">
        <div id='html' className="skills ">90%</div>
      </div>


      <p> <IoLogoCss3 size={20} color={"blue"} /> CSS</p>
      <div className="container">
        <div id='css' className="skills">75%</div>
      </div>

     
      <p><SiJavascript size={20} color={"yellow"} /> JavaScript</p>
      <div className="container">
        <div id='js' className="skills ">80%</div>
      </div>

      <p> <SiCsharp size={20} color={"blue"} /> C Hashtag </p>
      <div className="container">
        <div id='csharp' className="skills">80%</div>
      </div>

      <p></p>
      <p><GrReactjs size={20} color={"blue"} /> React JS </p>
      <div className="container">
        <div id='react' className="skills">Loading...</div>
      </div>

    </div>
  )
}

export default Skills
