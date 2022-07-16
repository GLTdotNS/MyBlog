
import { useState, useEffect } from 'react';
import PostsComponent from "../components/Blog/BlogPageComponents/PostsComponent"
import { AiOutlineSearch } from "react-icons/ai"
import GitHub from "../components/Blog/BlogPageComponents/GitHub"
import Categories from "../components/Blog/BlogPageComponents/Categories"
import MostLikedPosts from "../components/Blog/BlogPageComponents/MostLikedPosts"
import RecentlyPosts from "../components/Blog/BlogPageComponents/RecentlyPosts"
import { motion, transform } from "framer-motion"
import { animation } from '../animations/animation';

const MainBlogPage = ({ posts, category }) => {
  const [github, setGithub] = useState(null);
  const [valueToSearch, setValueToSearch] = useState("");


  useEffect(() => {
    fetch(`/api/hello`)
      .then(response => response.json())
      .then(response => {
        setGithub(response.name)
      })

    document.title = "Начална страница";
    window.scrollTo(0, 0)
  }, [])




  return (

    <motion.div className="row"
      {...animation}
    >

      <div className="leftcolumn">

        <motion.div>
          <Categories category={category} />
          <GitHub github={github} />
        </motion.div>

      </div>

      <div

        className="midcolumn">

        <div className='box'>

          <div className='search'>
            
              <input className='input' type="text" placeholder="Search.." />
           
          </div>

        </div>

        <hr />
        <PostsComponent posts={posts} />

      </div>



      <div className="rightcolumn">

        <MostLikedPosts posts={posts} />

        <RecentlyPosts posts={posts} />
      </div>
    </motion.div>
  )
}

export default MainBlogPage