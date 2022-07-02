
import React, { useEffect, useState } from "react";
import { client } from "../../lib/sanityClient.js";
import LoadingSpin from "react-loading-spin";
import { motion } from "framer-motion";
import { animation } from "../../animations/animation.js";
import groq from 'groq'
import "./Blog.css"
import PostsComponent from "./BlogPageComponents/PostsComponent.jsx";
import MostLikedPosts from "./BlogPageComponents/MostLikedPosts.jsx";
import RecentlyPosts from "./BlogPageComponents/RecentlyPosts.jsx";
import GitHub from "./BlogPageComponents/GitHub.jsx";
import Categories from "./BlogPageComponents/Categories"
import { AiOutlineSearch } from "react-icons/ai";
import Footer from "../Footer/Footer.jsx";

const AllPosts = () => {
  const [allPostsData, setAllPosts] = useState(null);
  const [github, setGithub] = useState(null);
  const [contributions, setContributions] = useState(null);
  const [category, setCategory] = useState(null);

  document.title = "Блог - Георги Тонков";

  useEffect(() => {


    fetch(`https://api.github.com/users/GLTdotNS`)
      .then(response => response.json())
      .then(response => {
        setGithub(response);
      })


  }, []);
  //contributions
  useEffect(() => {
    const headers = {

      'Authorization': `bearer ${process.env.REACT_APP_GIT_HUB}`,
    }
    const body = { "query": "query {viewer {contributionsCollection {contributionCalendar {totalContributions}}}}" }
    fetch('https://api.github.com/graphql', {
      method: 'POST',
      body: JSON.stringify(body)
        .replace(/</g, '\\u003c')
        .replace(/>/g, '\\u003e')
        .replace(/&/g, '\\u0026'),

      headers: headers
    }).then((response) => {
      return response.json();
    }).then((res) => {
      const value = Object.values(res)
      console.log(res)
      setContributions(value[0].viewer.contributionsCollection
        .contributionCalendar.totalContributions)
    })

  }, [])



  useEffect(() => {
    client
      .fetch(
        groq`*[_type == "category"]{
        _id,
        slug,
        title
     
    }`
      )
      .then((data) => {

        setCategory(data)

      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const query = groq`*[_type == "post"  ] | order(_createdAt desc)
    {
    title,
    slug,
    "authorImage": author->image,
    description,
    body,
    publishedAt,
    likes,
    comments,
    mainImage{
      asset->{
      _id,
      url
    }
  }, 'comments': *[_type == "comment" && post._ref == ^._id && approved == true] | order(_createdAt desc){
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
      }
 
}`
    client
      .fetch(query)
      .then((data) => {
        setAllPosts(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)

  }, [])


  if (!allPostsData
    || !github || !contributions) {

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
    <>

      <motion.div {...animation} className="main">
        <div className="row">
       

          <aside className="leftcolumn">
            <div className="box">
              <form name="search">

                <input type="text" className="input" name="txt" onMouseOut="this.value = ''; this.blur();" />
              </form>
              <i className="fas fa-search"><AiOutlineSearch size={15} /></i>

            </div>
            <Categories category={category} />
            <GitHub github={github} contributions={contributions} />

          </aside>
          <div className="midcolumn">
          <hr />
            <PostsComponent allPostsData={allPostsData} />
          </div>

          <div className="rightcolumn">
            <MostLikedPosts allPostsData={allPostsData} />

            <RecentlyPosts allPostsData={allPostsData} />

          </div>
        </div>
      </motion.div>
    </>
  );
}

export default AllPosts;
