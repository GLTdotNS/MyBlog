import React, { useEffect, useState } from "react";
import { client, urlForImg } from "../../lib/sanityClient.js";
import LoadingSpin from "react-loading-spin";
import { motion } from "framer-motion";
import { animation } from "../../animations/animation.js";
import groq from 'groq'
import MostLikedPosts from "./BlogPageComponents/MostLikedPosts.jsx";
import RecentlyPosts from "./BlogPageComponents/RecentlyPosts.jsx";
import Categories from "./BlogPageComponents/Categories.jsx";
import PostsComponent from "./BlogPageComponents/PostsComponent.jsx";
import { AiOutlineSearch } from "react-icons/ai"


const FilteredByCategory = () => {
    const [category, setCategory] = useState(null);
    const [react, setReact] = useState();
    const [allPostsData, setAllPosts] = useState([]);



    let index = window.location.href.lastIndexOf("/") + 1;
    let url = window.location.href;
    let location = url.slice(index, url.length)
    document.title = `Категория - ${location.toUpperCase()}`;
    useEffect(() => {
        const query = groq`*[_type == "post"  ] | order(_createdAt desc)
        {
        title,
        slug,
        "authorImage": author->image,
        description,
        body,
        publishedAt,
        categories,
        likes,
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
        client
            .fetch(
                groq`*[_type == "category" ]{
            _id,
            title,
            image{
                 asset->{
                    _id,
                    url
                    }
                },
            slug,
         
            }`
            )
            .then((data) => {
                setCategory(data)

            })
            .catch(console.error);
    }, []);




    useEffect(() => {
        const query = groq`*[_type == "post" && category._ref == ^._id]
        {
        title,
        slug,
        "authorImage": author->image,
        description,
        body,
        publishedAt,
        categories[0],
        likes,
        mainImage{
          asset->{
          _id,
          url
        }
      }
     
    }`
        client
            .fetch(query)
            .then((data) => {

                setReact(data)

            })
            .catch(console.error);
    }, []);




    if (!react || !category) {

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


                    <div className="leftcolumn">
                        <div className="box">
                            <form name="search">

                                <input type="text" className="input" name="txt" onMouseOut="this.value = ''; this.blur();" />
                            </form>
                            <i className="fas fa-search"><AiOutlineSearch size={15} /></i>

                        </div>
                        <Categories category={category} />
                    </div>

                    <div className="midcolumn">
                        <div className="header">
                            <img src={urlForImg(category.filter(x => x.slug.current === location)[0].image).url()}
                                alt="" />
                        </div>


                        <PostsComponent allPostsData={react.filter(x => x.categories._ref ===
                            `${category.filter(x => x.slug.current === location)[0]._id}`)} />
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

export default FilteredByCategory