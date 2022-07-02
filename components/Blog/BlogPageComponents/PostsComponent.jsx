import React from 'react'
import moment from "moment";
import { MdReadMore } from "react-icons/md"
import { urlForImg } from "../../../lib/sanityClient.js";
import Link from "next/link"
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const PostsComponent = ({ posts }) => {

 
  const [pageNumber, setPageNumber] = useState(0)

  const postPerPage = 3;
  const pageVisited = pageNumber * postPerPage;

  const displayPost = posts && posts.slice(pageVisited, pageVisited + postPerPage).map((post, index) => {

    if(!post){
      return <p>No</p>
    }

    return (


      <div className="card initial-post" key={index}>

        <h3>{post.title}</h3>


        <h5>{post.publishedAt ? moment(post.publishedAt).format("YYYY , MMM  DD , HH:MM")
          : "YYYY-MM-DD hh:mm"}</h5>


        <div className='inner_post_text'>
          {post.mainImage ? <img style={{
            float: "left", margin: "0 15px 0 0",
            padding: "1%", borderRadius: "30%"
          }} src={urlForImg(post.mainImage.asset.url)}
            alt="" width="150" height="150" /> : "none"}

          <span  >{post.description.slice(0, 300)}...</span>



        </div>

        <Link href="/post/[slug]" as={`/post/${post.slug.current}`}>
                  <a><button className="btn">Readmore</button></a>
                </Link>{' '}
      </div>


    )

  })

  const pageCount = posts && Math.ceil(posts.length / postPerPage);

  const handleChange = ({ selected }) => {
    setPageNumber(selected);

  }

  return (
    <>
      {displayPost}
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        onPageChange={handleChange}

      />
    </>
  )
}

export default PostsComponent
