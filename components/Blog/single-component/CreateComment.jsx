import React, { useState, useEffect } from 'react'
import { client } from '../../../lib/sanityClient';
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import { animation } from '../../../animations/animation';
import { BsFillPencilFill } from "react-icons/bs"
import { MdDateRange } from "react-icons/md"
import image from "../assets/download.png"
import moment from 'moment';
import toast from 'react-hot-toast';

const CreateComment = ({ post }) => {

    const [comment, setComment] = useState(null);
    const [commentData, setComData] = useState([]);
    const [name, setName] = useState(null);
    const { slug } = useParams();


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const onSubmit = (e) => {
        e.preventDefault()
        client.create({
            _type: 'comment',
            post: {
                _type: 'reference',
                _ref: postData._id,
            },
            approved: true,
            name,
            comment

        }).then(() => {
     
            handleSumbitComment();
        });


    }
    useEffect(() => {
        client
            .fetch(
                `*[slug.current == $slug]{
              _id,
              title,
              slug,
              publishedAt,
              mainImage{
                asset->{
                  _id,
                  url
                 }
               },
             body[]{
               ...,
              asset->{
              _id,
              url
            }
          },
            "name": author->name,
            "authorImage": author->image,
            'comments': *[_type == "comment" && post._ref == ^._id && approved == true] | order(_createdAt desc){
              _id, 
              name, 
              email, 
              comment, 
              _createdAt
          }
           }`,
                { slug }
            )
            .then((data) => {
                const newData = data[0];
                setComData(newData.comments);
            })
            .catch(console.error);
            // eslint-disable-next-line 
    }, []);

    const handleSumbitComment = () => {
        client
            .fetch(
                `*[slug.current == $slug]{
            _id,
            title,
            slug,
            publishedAt,
            mainImage{
              asset->{
                _id,
                url
               }
             },
           body[]{
             ...,
            asset->{
            _id,
            url
          }
        },
          "name": author->name,
          "authorImage": author->image,
          'comments': *[_type == "comment" && post._ref == ^._id && approved == true] | order(_createdAt desc){
            _id, 
            name, 
            email, 
            comment, 
            _createdAt
        }
         }`,
                { slug }
            )
            .then((data) => {
                const newData = data[0];
                toast.success("Published");
                setComData(newData.comments);
            }).then(() => {
                const input = document.getElementById("input");
                const textarea = document.getElementById("textarea");
                input.value = "";
                textarea.value = "";
                setComment(textarea.value)
            })
            .catch(console.error);
    }

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
