import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../lib/sanityClient";
import LoadingSpin from "react-loading-spin";
import { motion } from "framer-motion";
import { animation } from "../../animations/animation";
import PostHeader from "./single-component/PostHeader";
import BlockContentComponent from "./single-component/BlockContentComponent";
import CreateComment from "./single-component/CreateComment";
import groq from "groq";
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { Link } from "react-router-dom";
import RecentlyPosts from "./BlogPageComponents/RecentlyPosts";
import MostLikedPosts from "./BlogPageComponents/MostLikedPosts";
import { AiOutlineSearch } from "react-icons/ai";

export default function OnePost({post}) {



  if (!post) {

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
          numberOfRotationsInAnimation={2}

        />
      </div>
    )
  };



  return (
    <motion.div className="main"  {...animation}>
      <div className="row">


        <aside className="leftcolumn">
          <div className="box">
            <form name="search">

              <input type="text" className="input" name="txt" onMouseOut="this.value = ''; this.blur();" />
            </form>
            <i className="fas fa-search"><AiOutlineSearch size={15} /></i>

          </div>


        </aside>
        <div className="midcolumn">
          <PostHeader post={post} />
          <BlockContentComponent post={post} />

          <div style={{ float: "right" }}>
            <h3>Share</h3>
            <FacebookShareButton
              url={`https://glt-resume.eu/blog/${post.slug}`}
              color={"blue"}
            >
              <FacebookIcon size={32} square />
            </FacebookShareButton>

          </div>
          <div style={{ marginTop: "90px", borderTop: "1px solid #333" }}></div>



          <div className="card comment_card">

            <CreateComment post={post} />
          </div>


         
        </div>

        <div className="rightcolumn" >


        </div>
     
      </div>

    </motion.div>
  );
}