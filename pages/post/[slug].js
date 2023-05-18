import groq from "groq";
import { client, urlForImg } from "../../lib/sanityClient";
import RecentlyPosts from "../../components/Blog/BlogPageComponents/RecentlyPosts";
import dynamic from "next/dynamic";
import Categories from "../../components/Blog/BlogPageComponents/Categories";
import moment from "moment";
import { useRouter } from "next/router";
import { MdDateRange, MdClose } from "react-icons/md";
import { ImMenu2 } from "react-icons/im";
import logo from "../../styles/assets/niffleheim.png";

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
import Comments from "../../components/Blog/BlogPageComponents/Comments";
import Form from "../../components/Blog/BlogPageComponents/Form";
import Footer from "../../components/Footer/Footer";

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
  const [dark, setDark] = useState(true);
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
    midcolumn = document.getElementById("postPage");
    const backgroundColor = document.querySelector("body");
    if (dark) {
      midcolumn.style.color = "#313131";
      backgroundColor.style.backgroundColor = "#faf8f3";
      localStorage.setItem("dark", 2);
      setDark(!dark);
    } else {
      setDark(!dark);
      midcolumn.style.color = "#ffff";
      backgroundColor.style.backgroundColor = "#262626";
      localStorage.setItem("dark", 1);
    }
  }
  useEffect(() => {
    midcolumn = document.getElementById("postPage");
    const backgroundColor = document.querySelector("body");
    if (localStorage.getItem("dark") == 2) {
      setDark(false);
      midcolumn.style.color = "#313131";
      backgroundColor.style.backgroundColor = "#faf8f3";
    } else {
      setDark(true);
      midcolumn.style.color = "#ffff";
      backgroundColor.style.backgroundColor = "#262626";
    }
  }, []);

  return (
    <>
      <aside className="slide">
        <ImMenu2
          onClick={() => {
            const nav = document.getElementById("sideNav");
            nav.style.display == "block"
              ? (nav.style.display = "none")
              : (nav.style.display = "block");
          }}
          id="nav-btn"
        />
        <div id="sideNav" className="nav ">
          <ul>
            <div className="">
              <div>
                <br />
                <img
                  src={urlForImg(post.authorImage.asset)}
                  width={100}
                  height={100}
                  style={{ borderRadius: "100%" }}
                />
                <p>
                  {console.log(post)}
                  <BsPencilSquare />: {post.name}
                </p>
                <h4>
                  <MdDateRange />:{" "}
                  {post.publishedAt
                    ? moment(post.publishedAt).format("YYYY , MMM  DD,  HH:mm")
                    : "YYYY-MM-DD hh:mm"}
                </h4>
              </div>
              <hr />
            </div>
            <li
              style={{ marginTop: "5%", cursor: "pointer" }}
              onClick={() => router.back()}
            >
              Назад
            </li>
            <li>
              <a href="#comments">Коментари</a>
            </li>
            <li>
              <a href="#mayLike">Подобни постове</a>
            </li>
            <li>
              <p>Тема</p>
              <input type="checkbox" onClick={(e) => changeColorSchema()} />
            </li>
            <li>
              <Link href={"/"}>Начало</Link>
            </li>
          </ul>
        </div>
        <div class="vertical-line"></div>
      </aside>

      <article
        onClick={() => {
          const nav = document.getElementById("sideNav");
          nav.style.display == "block"
            ? (nav.style.display = "none")
            : (nav.style.display = "");
        }}
      >
        <header>
          <h2 style={{ marginTop: "5%" }}>{post.title}</h2>
        </header>
        <div
          className=" postPage "
          style={{
            height: "40vh",
            backgroundImage: ` linear-gradient(
    rgba(0, 0, 0, 0.3), 
    ${dark ? "#262626" : "#faf8f3"}
    ),
    url(${urlForImg(post.mainImage.asset.url)})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 0,
          }}
          id="postPage"
        >
          <Head>
            <meta
              name="description"
              content={`${post?.description}}`}
              key="desc"
            />
            <title>{post.title}</title>
          </Head>

          <div className="midcolumn boxShadow " id="mid">
            <div className="post_text " id="postContainer">
              <BlockContent post={post} />
            </div>

            <hr />
            <div className="btn_wrap" style={{ float: "right" }}>
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
            <div id="comments">
              <Comments comments={post.comments} />
              <Form _id={post._id} />
              <div className="columns posts">
                <div id="mayLike" className="title">
                  <h3 className="p__opensans ">
                    <span>Подобни постове</span>
                  </h3>
                </div>
                {posts
                  .filter((x) => x.category === post.categories[0])
                  .filter((x) => x.slug.current !== post.slug.current)
                  .slice(0, 3)
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
                            }}
                            src={urlForImg(post.mainImage.asset.url)}
                            alt="Image of the post"
                            width="100"
                            height="50"
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
      </article>
    </>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  _id,
  publishedAt,
  description,
 
  slug,
  "name": author->name,
  "categories": categories[]->title,
  rowTitle,
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
  "category": categories[0]->title,
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
  "category": categories[0]->title,
  rowTitle,
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
