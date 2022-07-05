import React from 'react'
import {MdDateRange} from "react-icons/md"
import {BsFillPencilFill} from "react-icons/bs"
import moment from "moment";
import { urlForImg } from '../../../lib/sanityClient';


const PostHeader = ({post}) => {



  return (
    <div>
       
        <h2>{postData.title}</h2>
        <div className="author">
          <img
            src={urlForImg(post.authorImage).url()}
            className="mypic"
            width={100}
            height={100}
            style={{ borderRadius: "100%" , float:"right" }}

          />
          <h4> <BsFillPencilFill/>: {post.name}</h4>
          <h4><MdDateRange/>: {post.publishedAt ? moment(post.publishedAt).format("YYYY , MMM  DD,  HH:mm") 
          : "YYYY-MM-DD hh:mm"}</h4>
          <hr />
        
        </div>
    </div>
  )
}

export default PostHeader
