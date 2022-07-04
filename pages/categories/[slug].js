// [slug].js
import groq from 'groq'
import { client, urlForImg } from '../../lib/sanityClient'
import MostLikedPosts from "../../components/Blog/BlogPageComponents/MostLikedPosts";
import RecentlyPosts from "../../components/Blog/BlogPageComponents/RecentlyPosts.jsx";
import Categories from "../../components/Blog/BlogPageComponents/Categories.jsx";
import PostsComponent from "../../components/Blog/BlogPageComponents/PostsComponent.jsx";
import { AiOutlineSearch } from "react-icons/ai"
import LoadingSpin from 'react-loading-spin'
import { useEffect, useState } from 'react'
import router from "next/router"


const CategoriesPage = ({ posts, category }) => {

    const [location, setLocation] = useState("");

    useEffect(() => {

        let index = window.location.href.lastIndexOf("/") + 1;
        let url = window.location.href;
        setLocation(url.slice(index, url.length))
        document.title = `Категории`;

    }, [])

    if (!posts || !category || location === "") {

        return (

            <div className="spinner">
                <LoadingSpin
                    duration="2s"
                    width="15px"
                    timingFunction="ease"
                    direction="alternate"
                    size="100px"
                    primaryColor="white"
                    secondaryColor="#333"
                    numberOfRotationsInAnimation={2}

                />
            </div>
        )
    };


    return (

        <div className="row">


            <div className="leftcolumn">
        
                <Categories category={category} />
            </div>

            <div className="midcolumn">
                <div className="header">
                    <img src={urlForImg(category.filter(x => x.slug.current === location)[0].image).url()}
                        alt="" />
                </div>


                <PostsComponent posts={posts.filter(x => x.categories._ref ===
                    `${category.filter(x => x.slug.current === location)[0]._id}`)} />
            </div>

            <div className="rightcolumn">

                {/* <MostLikedPosts posts={posts} /> */}
                <RecentlyPosts posts={posts} />

            </div>

        </div>
    )

}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  mainImage{
    asset->{
    _id,
    url
  },

  },
  body
}`

export async function getServerSideProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params
    const post = await client.fetch(query, { slug })
    const queryPosts = groq`*[_type == "post" && category._ref == ^._id]
    {
    title,
    slug,
    "authorImage": author->image,
    description,
    body,
    publishedAt,
    comments,
    categories[0],
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
    const category = await client
        .fetch(
            groq`*[_type == "category"]{
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
        );

    const posts = await client.fetch(queryPosts)

    return {
        props: {
            post,
            posts,
            category
        }
    }
}

export default CategoriesPage