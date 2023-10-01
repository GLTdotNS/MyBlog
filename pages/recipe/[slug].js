import groq from "groq";
import { client, urlForImg } from "../../lib/sanityClient";
import dynamic from "next/dynamic";
import moment from "moment";
import { useRouter } from "next/router";
import { MdDateRange, MdClose } from "react-icons/md";
import { ImMenu2 } from "react-icons/im";
import { FiMusic } from "react-icons/fi";
import logo from "../../styles/assets/Viking-Feature.webp";
import { toast } from "react-hot-toast";
import { BsPencilSquare, BsFillShareFill } from "react-icons/bs";
import {
  AiOutlineFontSize,
  AiOutlineFontColors,
  AiOutlinePause,
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
import { HiOutlineLink } from "react-icons/hi";
import Head from "next/head";
import Comments from "../../components/Blog/BlogPageComponents/Comments";
import Form from "../../components/Blog/BlogPageComponents/Form";

import Image from "next/image";

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
const Post = ({ post, posts }) => {
  const router = useRouter();
  const [dark, setDark] = useState(true);
  let cont;
  let midcolumn;

  const copyToClipboard = (text) => {
    const elem = document.createElement("textarea");
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    toast.success("Копирано в клипборда", {
      position: "top-center",
      style: {
        border: "1px solid #333",
        padding: "5px",
        color: "#713200",
      },
      iconTheme: {
        primary: "wheat",
        secondary: "blue",
      },
    });
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
    const aside = document.querySelector("aside");
    const sideNav = document.getElementById("sideNav");

    if (dark) {
      midcolumn.style.color = "#313131";
      backgroundColor.style.backgroundColor = "#faf8f3";
      aside.style.backgroundColor = "#faf8f3";
      sideNav.style.color = "#262626";
      sideNav.style.backgroundColor = "rgb(250, 248, 243)";
      sideNav.style.setProperty("--color", "rgb(250, 248, 243)");
      localStorage.setItem("dark", 2);
      setDark(!dark);
    } else {
      setDark(!dark);
      midcolumn.style.color = "#ffff";
      backgroundColor.style.backgroundColor = "#262626";
      aside.style.backgroundColor = "#262626";
      sideNav.style.color = "#e3e2e2";
      sideNav.style.backgroundColor = "#262626";
      sideNav.style.setProperty("--color", "#262626");

      localStorage.setItem("dark", 1);
    }
  }
  useEffect(() => {
    midcolumn = document.getElementById("postPage");
    const backgroundColor = document.querySelector("body");
    const aside = document.querySelector("aside");
    const sideNav = document.getElementById("sideNav");
    if (localStorage.getItem("dark") == 2) {
      setDark(false);
      midcolumn.style.color = "#313131";
      backgroundColor.style.backgroundColor = "#faf8f3";
      aside.style.backgroundColor = "rgb(250, 248, 243)";
      sideNav.style.color = "#262626";
      sideNav.style.backgroundColor = "rgb(250, 248, 243)";
      sideNav.style.setProperty("--color", "rgb(250, 248, 243)");
    } else {
      setDark(true);
      midcolumn.style.color = "#ffff";
      backgroundColor.style.backgroundColor = "#262626";
      aside.style.backgroundColor = "#262626";
      sideNav.style.color = "#e3e2e2";
      sideNav.style.backgroundColor = "#262626";
      sideNav.style.setProperty("--color", "#262626");
    }
  }, []);

  return (
    <>
      <aside className="">
        <label
          className="hamburger-icon"
          aria-label="Open navigation menu"
          htmlFor="drop"
        >
          <div
            className="burger"
            id="burger"
            onClick={() => {
              const element = document.getElementById("burger");
              const nav = document.getElementById("sideNav");

              if (nav.style.opacity == "1") {
                nav.style.opacity = "0";
                nav.style.visibility = "hidden";
                nav.style.transform = "translateY(0px)";
                element.classList.remove("is-active");
              } else {
                nav.style.opacity = "1";
                nav.style.visibility = "visible";

                nav.style.transform = "translateY(40px)";
                element.classList.add("is-active");
              }
            }}
          >
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
          </div>
        </label>

        <Image src={logo} style={{ display: "none" }} alt={`${post.title}`} />
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
                  alt={`${post.title}`}
                />
                <p>
                  {/* <iframe src={`${post.url}`} allowFullScreen="true" /> */}
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
              <a href="#suggestions">Подобни постове</a>
            </li>
            <li>
              <p>Тема</p>
              <input type="checkbox" onClick={(e) => changeColorSchema()} />
            </li>
            <div class="vertical-line"></div>
            <li>
              <Link href={"/"}>Блог</Link>
            </li>
            <li>
              <Link href={"/gods"}>Богове & създания</Link>
            </li>

            <li>
              <Link href={"/recipes"}>Рецепти</Link>
            </li>
            <li>
              <Link href={"/runes"}>Руни</Link>
            </li>
            <div style={{ display: "none" }} id="video"></div>
          </ul>
        </div>
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
    rgba(0, 0, 0, ${dark ? 0.6 : 0.1} ), 
    ${dark ? "#262626" : "#faf8f3"}
    ),
    url(${logo.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
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
                <BsFillShareFill color="#4ba6e7" />
              </span>
              <div className="shareContainer">
                <FacebookShareButton
                  className="i"
                  url={`https://noncreativeblog.net/post/${post.slug.current}`}
                  quote={`${post.title}`}
                  hashtag={post.rowTitle}
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
                <HiOutlineLink
                  onClick={() =>
                    copyToClipboard(
                      `https://noncreativeblog.net/post/${post.slug.current}`
                    )
                  }
                  className="i"
                  size={31}
                  style={{ backgroundColor: "#43e9" }}
                />
              </div>
            </div>
            <div id="comments">
              <Comments comments={post.comments} />
              <Form _id={post._id} />
              <div className="columns posts">
                <div id="suggestions" className="title">
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
  url,
  slug,
  ID,
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
  url,
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

  return {
    props: {
      post,
      posts,
    },
    revalidate: 10,
  };
}

export default Post;