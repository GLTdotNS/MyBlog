import React, { useState, useEffect } from 'react'
import { client } from '../../../lib/sanityClient';

import { motion } from 'framer-motion';
import { animation } from '../../../animations/animation';
import { BsFillPencilFill } from "react-icons/bs"
import { MdDateRange } from "react-icons/md"
import image from "../assets/download.png"
import moment from 'moment';
import toast from 'react-hot-toast';

const CreateComment = ({ post }) => {

    const [comment, setComment] = useState(null);
    const [commentData, setComData] = useState(post.comments);
    const [name, setName] = useState("");
    const [id , setId] = useState(post._id)
    const [newData , setNewData] = useState({})


    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


 

    return (
        <div>
           
            <div>
                <h2 id='top-comment'>Comments</h2>
                {commentData && commentData.map((c, index) => (
                    <motion.div {...animation} className="card initial-post" key={index}>

                        <div >
                            <img className='avatar' src={image} alt="" />
                            <h3> <BsFillPencilFill size={12} />:  {!c.name ? "Anonymous" : c.name}</h3>

                            <h5><MdDateRange />: {c._createdAt ? moment(c._createdAt).format("YYYY , MMM  DD,  HH:mm") :
                                "YYYY-MM-DD hh:mm"}</h5>
                        </div>

                        <div className='comment-body'>
                            <p>{c.comment}</p>
                        </div>


                    </motion.div>
                ))}
            </div>



            <div className="create_comment_card ">
                <h5>Name</h5>
                <input id='input' placeholder='Name...' type="text" onChange={(e) => setName(e.target.value)} />
                <h5>Comment</h5>
                <textarea id='textarea'  placeholder='Type...' onChange={(e) => setComment(e.target.value)}></textarea >
                {!comment || comment.trim().length === 0 ?
                    <>
                        <p className='p__opensans'>Riquired field</p>
                        <button className='btn'
                            style={{ opacity: "0.2" }} >Send comment</button>
                    </>
                    :
                    <div>
                        <p style={{ visibility: "hidden" }} className='p__opensans'>Riquired field</p>
                        <button className='btn' type='submit' onClick={onSubmit}>Send comment</button></div>
                }
            </div>
        </div>
    )
}

export default CreateComment
