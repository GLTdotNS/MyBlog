import groq from "groq";
import { client, urlForImg } from "../../lib/sanityClient";
import RecentlyPosts from "../../components/Blog/BlogPageComponents/RecentlyPosts";
import dynamic from "next/dynamic";
import Categories from "../../components/Blog/BlogPageComponents/Categories";
import moment from "moment";
import { useRouter } from "next/router";
import { MdDateRange, MdClose } from "react-icons/md";
import { GoSettings } from "react-icons/go";
import { BsPencilSquare, BsFillShareFill } from "react-icons/bs";
import {
  AiOutlineFontSize,
  AiOutlineFontColors,
  AiOutlineArrowDown,
} from "react-icons/ai";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookMessengerShareButton,
  ViberShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, ViberIcon } from "react-share";
import Head from "next/head";
import PostsComponent from "../../components/Blog/BlogPageComponents/PostsComponent";

const block = dynamic(
  () => import("../../components/Blog/single-component/BlockContentComponent"),

  {
    ssr: false,
  }
);

const load = dynamic(() => import("../../components/Loading/Loading"), {
  ssr: false,
});

let BlockContent = block;
let Loading = load;
const Post = ({ post, posts, category }) => {
  const [settings, setSettings] = useState(false);
  const router = useRouter();
  let cont;
  let midcolumn;

  const handleSettings = () => {
    const settingMenu = document.getElementById("settingMenu");
    const center = document.getElementById("center");
    if (!settings) {
      settingMenu.style.height = "200px";
      center.style.opacity = "1";
      setSettings(true);
    } else {
      settingMenu.style.height = "0px";
      center.style.opacity = "0";
      setSettings(false);
    }
  };
  function changeSizeByBtn(name) {
    cont = document.getElementById("container");
    switch (name) {
      case "btn1":
        cont.style.fontSize = "17px";
        break;
      case "btn2":
        cont.style.fontSize = "20px";
        break;
      case "btn3":
        cont.style.fontSize = "30px";
        break;
      default:
        break;
    }
  }

  function changeColorSchema(name) {
    cont = document.getElementById("container");
    midcolumn = document.getElementById("mid");
    const backgroundColor = document.getElementById("postPage");
    switch (name) {
      case "btn1":
        cont.style.color = "hsl(210deg 8% 15%)";
        midcolumn.style.backgroundColor = "#FAF9F6";
        backgroundColor.style.backgroundColor = "#FAF9F3";
        backgroundColor.style.color = "black";
        break;
      case "btn2":
        cont.style.color = "#fff";

        midcolumn.style.backgroundColor = "#202124";
        backgroundColor.style.backgroundColor = "#202124";
        backgroundColor.style.color = "#fff";
        break;

      default:
        break;
    }
  }

  return (
    <Layout>
      <div className="main postPage " id="postPage">
        <Head>
          <meta name="description" content={`${post.description}`} key="desc" />
        </Head>
        <img
          id="blurBackground"
          loading="lazy"
          src={urlForImg(post.mainImage.asset.url)}
          alt="Image of the post"
          width={"100%"}
          height={"600"}
        />
        <div style={{ textAlign: "center" }} className="author">
          <h1 style={{ fontSize: "40px" }}>{post.title}</h1>
          <br />
          <h4>
            <BsPencilSquare />: {post.name}
          </h4>
          <h4>
            <MdDateRange />:{" "}
            {post.publishedAt
              ? moment(post.publishedAt).format("YYYY , MMM  DD,  HH:mm")
              : "YYYY-MM-DD hh:mm"}
          </h4>
          <hr />
        </div>
        <Link
          className="dropdown"
          style={{ color: "blue", float: "right" }}
          href={"/blog"}
        >
          Назад към блога
        </Link>
        {!settings ? (
          <button
            onClick={() => handleSettings()}
            style={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            <GoSettings
              style={{
                border: "1px solid #333",
              }}
              size={40}
              color="orange"
            />
          </button>
        ) : (
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            onClick={() => handleSettings()}
            className=""
          >
            <MdClose
              style={{ border: "1px solid white" }}
              size={40}
              color="orange"
            />
          </button>
        )}
        <div className="dropdown " id="settingMenu">
          <div s id="center">
            <center>
              <h1 style={{ padding: "1%" }}>
                <AiOutlineFontSize color="white" />
              </h1>
              <button
                className="settingBtn"
                onClick={(e) => changeSizeByBtn(e.target.name)}
                type="button"
                name="btn1"
              >
                -A
              </button>
              <button
                className="settingBtn"
                onClick={(e) => changeSizeByBtn(e.target.name)}
                type="button"
                name="btn2"
              >
                A
              </button>
              <button
                className="settingBtn"
                onClick={(e) => changeSizeByBtn(e.target.name)}
                type="button"
                name="btn3"
              >
                A+
              </button>
              <br />
              <br />
            </center>
            <center>
              <h1 style={{ padding: "1%" }}>
                <AiOutlineFontColors color="white" />
              </h1>

              <button
                id="white"
                className="settingBtn"
                onClick={(e) => changeColorSchema(e.target.name)}
                type="button"
                name="btn1"
              ></button>

              <button
                id="dark"
                className="settingBtn"
                onClick={(e) => changeColorSchema(e.target.name)}
                type="button"
                name="btn2"
              ></button>

              <br />
              <br />
            </center>
          </div>
        </div>

        <div className="midcolumn boxShadow " id="mid">
          <div className="post_text " id="container">
            <BlockContent post={post} />
          </div>

          <hr />
          <div>
            <div className="btn_wrap">
              <span className="shareSpan">
                <BsFillShareFill color="blue" />
              </span>
              <div className="shareContainer">
                <FacebookShareButton
                  className="i"
                  url={`https://noncreativeblog.net/post/${post.slug.current}`}
                >
                  <FacebookIcon size={30} color="blue" />
                </FacebookShareButton>

                <TwitterShareButton
                  className="i"
                  url={`https://noncreativeblog.net/post/${post.slug.current}`}
                >
                  <TwitterIcon size={30} color="blue" />
                </TwitterShareButton>

                <ViberShareButton
                  onShareWindowClose={() => window.close()}
                  className="i"
                  appId="585823522989597"
                  url={`https://noncreativeblog.net/post/${post.slug.current}`}
                >
                  <ViberIcon size={30} />
                </ViberShareButton>
              </div>
            </div>
            <div className="columns posts">
              <h3 className="p__opensans title">Подобни постове</h3>
              {posts
                .filter((x) => x.categories[0] === post.categories[0])
                .map((post) => (
                  <div
                    className=" initial-post"
                    key={post.title}
                    onClick={() => router.push(`/post/${post.slug.current}`)}
                  >
                    <div className="inner_post_text">
                      <h3 style={{ marginBottom: "4px" }}>{post.title}</h3>

                      {post.mainImage ? (
                        <img
                          loading="lazy"
                          style={{
                            float: "left",
                            margin: "5px 15px 0 0",
                            padding: "1%",
                          }}
                          src={urlForImg(post.mainImage.asset.url)}
                          alt="Image of the post"
                          width="150"
                          height="150"
                        />
                      ) : (
                        "none"
                      )}

                      <span> {post?.description.slice(0, 300)}...</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

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
  Video{
    asset->{
      _id,
      url
    }
  },

  body
}`;
const isServerReq = (req) => !req.url.startsWith("/_next");
export async function getStaticPaths() {
  const queryPosts = groq`*[_type == "post"] | order(_createdAt desc)
  {
  title,
  slug,
  "authorImage": author->image,
  description,
  body,
  publishedAt,
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

}`;
  const posts = await client.fetch(queryPosts);
  const paths = posts.map((post) => ({ params: { slug: post.slug.current } }));
  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const post = isServerReq ? await client.fetch(query, { slug }) : null;
  const queryPosts = groq`*[_type == "post"] | order(_createdAt desc)
  {
  title,
  slug,
  "authorImage": author->image,
  "categories": categories[]->title,
  description,
  body,
  publishedAt,
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

}`;
  const posts = await client.fetch(queryPosts);
  const category = await client.fetch(
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
      category,
    },
    revalidate: 10,
  };
}

export default Post;
