
import { useState, useEffect } from 'react';
import PostsComponent from "../components/Blog/BlogPageComponents/PostsComponent"
import Categories from "../components/Blog/BlogPageComponents/Categories"
import MostLikedPosts from "../components/Blog/BlogPageComponents/MostLikedPosts"
import RecentlyPosts from "../components/Blog/BlogPageComponents/RecentlyPosts"
import { motion } from "framer-motion"
import { animation } from '../animations/animation';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Image from "next/image"
import notFoundImage from "../styles/monkey.png"
import bannerImage from "../styles/code.png"
import { useRouter } from 'next/router'

const MainBlogPage = ({ posts, category }) => {

  const [valueToSearch, setValueToSearch] = useState("");
  const router = useRouter()

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


  const onFormSubmit = e => {
    e.preventDefault();
    const currentSlug = posts.filter(x => x.title.toLowerCase().includes(valueToSearch.toLowerCase()))[0]?.slug.current;

    currentSlug === undefined

      ? router.push(window.location.href + "/" + "notfound")
      : router.push(window.location.href + "/" + "post/" + currentSlug)

  }
  return (

    <motion.div className="row"
      {...animation}
    >


      <div className="midcolumn">

        <form onSubmit={onFormSubmit} className='box aboutme'>
          <div className='search '>
            <input className='input' type="text" placeholder="Search.." autoComplete="off" list="suggestions"
              onChange={(e) => setValueToSearch(e.target.value)} />

            <datalist id="suggestions">
              {posts.map((p, index) => (

                <option className='option' key={index} >
                  {p.title}

                </option>



              ))}
            </datalist>
          </div>

        </form>
        <hr />
        <div style={{ backgroundColor: "#333" }}>
          <Image
            src={bannerImage}
            alt="Picture of the author"
            width="1000px"
            height="300px"
          />

        </div>


        <hr />
        {
          posts.filter(x => x.title.toLowerCase().includes(valueToSearch.toLowerCase())).length > 0 ?
            <PostsComponent posts={posts.filter(x => x.title.toLowerCase().includes(valueToSearch.toLowerCase()))} />
            : <div style={{ minHeight: "100vh", textAlign: "center" }}>

              <h2 style={{ marginTop: "10px" }}>Oooops!...</h2>
              <Image
                src={notFoundImage}
                width="350px"
                height="300px"
              />
              <p>I am probably working on something that has blown up.</p>
            </div>
        }



      </div>



      <div className="rightcolumn">

        <Categories category={category} />

        <RecentlyPosts posts={posts} />


      </div>
    </motion.div>
  )
}

export default MainBlogPage