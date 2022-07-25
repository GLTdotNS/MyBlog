
import { useState, useEffect } from 'react';
import PostsComponent from "../components/Blog/BlogPageComponents/PostsComponent"
import GitHub from "../components/Blog/BlogPageComponents/GitHub"
import Categories from "../components/Blog/BlogPageComponents/Categories"
import MostLikedPosts from "../components/Blog/BlogPageComponents/MostLikedPosts"
import RecentlyPosts from "../components/Blog/BlogPageComponents/RecentlyPosts"
import { motion, transform } from "framer-motion"
import { animation } from '../animations/animation';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import notFoundImage from "../styles/monkey.png"
import Image from "next/image"
const MainBlogPage = ({ posts, category }) => {

  const [valueToSearch, setValueToSearch] = useState("");


  useEffect(() => {

    document.title = "Начална страница";
    window.scrollTo(0, 0)
  }, [])

  if (!posts) {
    return (

      <SkeletonTheme baseColor="#202020" highlightColor="#444">

        <div className='card initial-post'>
          
          <h3><Skeleton width={50} /></h3>
          <h5><Skeleton width={80} /></h5>

          <div className='inner_post_text'>
            <span>
              <Skeleton height={100} />
            </span>
          </div>

        </div>

      </SkeletonTheme>

    )
  }


  return (

    <motion.div className="row"
      {...animation}
    >

      <div className="leftcolumn">

        <motion.div>
          <Categories category={category} />
        </motion.div>

      </div>

      <div className="midcolumn">

        <div className='box'>
          <div className='search'>
            <input className='input' type="text" placeholder="Search.." onChange={(e) => setValueToSearch(e.target.value)} />
            {/* <FaSearch/> */}
          </div>

        </div>

        <hr />
        {
          posts.filter(x => x.title.toLowerCase().includes(valueToSearch.toLowerCase())).length > 0 ? 
          <PostsComponent posts={posts.filter(x => x.title.toLowerCase().includes(valueToSearch.toLowerCase()))} /> 
          : <div  style={{minHeight: "100vh" , textAlign: "center" }}>
            <h2 style={{marginTop: "20%"}}>Oooops!...</h2>
            <Image
             src={notFoundImage}
             alt="Picture of the author"
             width="350px"
             height="300px"
             />
            <p>I'm probably working on something that has blown up.</p>
            </div>
        }
     
        

      </div>



      <div className="rightcolumn">

        <MostLikedPosts posts={posts} />

        <RecentlyPosts posts={posts} />
      </div>
    </motion.div>
  )
}

export default MainBlogPage