import React ,{useEffect}from 'react'
import "./projects.css"
import { motion } from 'framer-motion'
import {animation} from "../../animations/animation"
import img from "./Untitled.png"
import res from "./restaurant.jpg"
import Footer from '../Footer/Footer'
const Projects = () => {
    document.title = "Проекти..."
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
  return (
    <motion.div {...animation}>
        <div className="project-container aboutme">
        <h2>Portfolio</h2>
        <hr/>

        <div className="project-row ">
            <div className="project-column">
                <div className="project-content">
                    <img src=
"https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/30/posts/26768/image/journal-3.jpg"
                        alt=""/>
                    <h3>
                        <p>E-commerce site</p>
                    </h3>
                    <hr />
                        <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae consequatur esse rem dolorum eveniet voluptatem, ea deleniti consequuntur perferendis, 
                      nisi reiciendis blanditiis eaque autem quidem iste eum, molestiae neque ipsam.
                    </p>
 
 
                 <div className='btn-container'>
                 <button className='btn'>Demo</button>
                    <button className='btn'>Code</button>
                 </div>
 
                </div>
            </div>
             
            <div className="project-column">
                <div className="project-content">
                    <img src=
"http://www.ning.com/wp-content/uploads/2018/04/create-gaming-website-1024x702.jpg"
                        alt="" />
                    <h3>
                        <p>Gaming Blog</p>
                    </h3>
                    <hr />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum distinctio necessitatibus laboriosam doloribus cupiditate exercitationem minima numquam eligendi quod voluptates nihil id 
                            assumenda molestias deserunt aperiam repudiandae, veritatis explicabo eveniet.</p>
 
                    <div className='btn-container'>
                 <button className='btn'>Demo</button>
                    <button className='btn'>Code</button>
                 </div>
 
                </div>
            </div>
             
            <div className="project-column">
                <div className="project-content">
                    <img src={img} alt="" />
                    <h3>
                       <p>My Blog</p>
                    </h3>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eaque magni hic minus doloribus iste a doloremque, minima iure unde officia obcaecati 
                        illum enim cumque dolor, recusandae deserunt praesentium officiis. Dolorem.</p>
 
 
                    <div className='btn-container'>
                 <button className='btn'>Demo</button>
                    <button className='btn'>Code</button>
                 </div>
                </div>
            </div>
             
            <div className="project-column">
                <div className="project-content">
                    <img src={res}
                        alt="" />
                    <h3>
                       <p>Restaurant site</p>
                    </h3>
                    <hr />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem repellat doloremque 
                            beatae facere enim quod cum, magnam inventore. Aperiam expedita 
                            repudiandae earum enim amet delectus temporibus dolorem, optio error nihil.</p>
 
 
                    <div className='btn-container'>
                 <button className='btn'>Demo</button>
                    <button className='btn'>Code</button>
                 </div>
                </div>
            </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Projects
