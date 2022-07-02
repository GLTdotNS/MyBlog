
import { useState,useEffect } from 'react';
import PostsComponent from "../components/Blog/BlogPageComponents/PostsComponent"
import {AiOutlineSearch} from "react-icons/ai"
import GitHub from "../components/Blog/BlogPageComponents/GitHub"
import Categories from "../components/Blog/BlogPageComponents/Categories"
import MostLikedPosts from "../components/Blog/BlogPageComponents/MostLikedPosts"
import RecentlyPosts from "../components/Blog/BlogPageComponents/RecentlyPosts"


const MainBlogPage = ({posts,category }) => {
  const [github, setGithub] = useState(null);


useEffect(() => {
  fetch(`/api/hello`)
  .then(response => response.json())
  .then(response => {
    setGithub(response.name)
  })
},[])




  return(
    <div className="row">
      <div className="leftcolumn">
      <div className="box">
              <form name="search">

                <input type="text" className="input" name="txt"  />
              </form>
              <i className="fas fa-search"><AiOutlineSearch size={15} /></i>

            </div>
            <Categories category={category} />
            <GitHub github={github}  />
        
      </div>

    <div className="midcolumn"> 
      <PostsComponent posts={posts}/>
    </div>
      <div className="rightcolumn">
      <MostLikedPosts posts={posts} />

  <RecentlyPosts posts={posts} />
      </div>
    </div>
  )
}

export default MainBlogPage