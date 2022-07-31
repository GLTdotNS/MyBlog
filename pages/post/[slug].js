// [slug].js
import groq from 'groq'
import { client, urlForImg } from '../../lib/sanityClient'
import MostLikedPosts from "../../components/Blog/BlogPageComponents/MostLikedPosts"
import RecentlyPosts from "../../components/Blog/BlogPageComponents/RecentlyPosts"
import dynamic from 'next/dynamic'
import LoadingSpin from 'react-loading-spin'
import Categories from '../../components/Blog/BlogPageComponents/Categories'
import moment from 'moment'
import { MdDateRange } from "react-icons/md"
import { BsPencilSquare, BsFillShareFill, BsFacebook, BsTwitter } from "react-icons/bs"
import { FacebookShareButton, TwitterShareButton,FacebookMessengerShareButton,FacebookMessengerIcon } from "react-share"
import { useEffect } from 'react'



const block = dynamic(
  () => import('../../components/Blog/single-component/BlockContentComponent'),
  {
    ssr: false,
  }

)




let BlockContent = block;

const Post = ({ post, posts, category }) => {








  if (!post || !post.mainImage || !post.body) {

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
    <div className="main">
      <div className="row">
        <aside className="leftcolumn">
          <Categories category={category} />
        </aside>
        <div className="midcolumn">
          <div className='header'>
            <img src={urlForImg(post.mainImage)} alt="" width={"20%"} height={"20%"} id="mypic" />
          </div>
          <h2>{post.title}</h2>
          <div className="author">
            <img

              src={urlForImg(post.authorImage).url()}
              className="mypic"
              width={100}
              height={100}
              style={{ borderRadius: "100%", float: "right" }}

            />
            <h4> <BsPencilSquare />: {post.name}</h4>
            <h4><MdDateRange />: {post.publishedAt ? moment(post.publishedAt).format("YYYY , MMM  DD,  HH:mm")
              : "YYYY-MM-DD hh:mm"}</h4>
            <hr />

          </div>
          <BlockContent post={post} />

          <div >

            <div className="btn_wrap">
              <span className='shareSpan'><BsFillShareFill /></span>
              <div className="shareContainer">

              <FacebookShareButton className='i' url={`https://glt-blog.vercel.app/post/${post.slug.current}`}  >
                <BsFacebook  size={30} color="blue"  />
              </FacebookShareButton>

              <TwitterShareButton className='i'   url={`https://glt-blog.vercel.app/post/${post.slug.current}`}>
                <BsTwitter size={30} color="blue" />
              </TwitterShareButton>
              
              <FacebookMessengerShareButton className='i' url={`https://glt-blog.vercel.app/post/${post.slug.current}`}>
                <FacebookMessengerIcon size={30}/>
              </FacebookMessengerShareButton>
              </div>
            </div>
            
          </div>

          {/* 
          <div className="create_comment_card ">
            <CreateComment post={post} />
          </div> */}


        </div>

        <div className="rightcolumn">
          <MostLikedPosts posts={posts} />

          <RecentlyPosts posts={posts} />
        </div>

      </div>

    </div>
  );

}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  _id,
  publishedAt,
  slug,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  'comments': *[_type == "comment" && post._ref == ^._id && approved == true] | order(_createdAt desc){
              _id, 
              name, 
              email, 
              comment, 
              _createdAt
          },
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
  const queryPosts = groq`*[_type == "post"] | order(_createdAt desc)
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
  const posts = await client.fetch(queryPosts)
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

  return {
    props: {
      post,
      posts,
      category
    }
  }
}

export default Post