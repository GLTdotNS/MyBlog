import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { animation } from "../../animations/animation"


const ProjectsComponent = () => {
    useEffect(() => {
        document.title = "Проекти..."
        window.scrollTo(0, 0)
    }, [])

    return (
        <motion.div {...animation}>
            <div className="project-container aboutme">
                <h2>Portfolio</h2>
                <hr />

                <div className="project-row ">
                    <div className="project-column">
                        <div className="project-content">

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

                            <h3>
                                <p>My Blog</p>
                            </h3>
                            <hr />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Eaque magni hic minus doloribus iste a doloremque, minima iure unde officia obcaecati
                                illum enim cumque dolor, recusandae deserunt praesentium officiis. Dolorem.</p>


                            <div className='btn-container'>
                                <button className='btn' onClick={() => window.open("https://mtb-world-shop.vercel.app/")}>Demo</button>
                                <button className='btn' onClick={() => window.open("https://github.com/GLTdotNS/mtb-world-shop")}>Code</button>
                            </div>
                        </div>
                    </div>

                    <div className="project-column">
                        <div className="project-content">

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

export default ProjectsComponent
