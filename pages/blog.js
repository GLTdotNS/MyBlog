import { useState, useEffect } from "react";
import PostsComponent from "../components/Blog/BlogPageComponents/PostsComponent";
import RecentlyPosts from "../components/Blog/BlogPageComponents/RecentlyPosts";
import "react-loading-skeleton/dist/skeleton.css";
import Layout from "../components/Layout/Layout";
import Image from "next/image";
import dynamic from "next/dynamic";
import Cookies from "../components/Cookies/Cookies";
import { Rubik_Distressed } from "next/font/google";
import Link from "next/link";
import { client } from "../lib/sanityClient";
import groq from "groq";
const rubik = Rubik_Distressed({
  weight: "400",
  subsets: ["cyrillic"],
});
const CrispWithNoSSR = dynamic(() => import("../components/Chat/chat"), {
  ssr: false,
});

const MainBlogPage = ({ posts, category, authors }) => {
  useEffect(() => {
    // function el(selector) {
    //   return document.querySelector(selector);
    // }
    // function els(selector) {
    //   return document.querySelectorAll(selector);
    // }
    // function on(selector, event, action) {
    //   els(selector).forEach((e) => e.addEventListener(event, action));
    // }
    // function cookie(name) {
    //   let c = document.cookie
    //     .split("; ")
    //     .find((cookie) => cookie && cookie.startsWith(name + "="));
    //   return c ? c.split("=")[1] : false;
    // }

    // /* popup button hanler */
    // on(".cookie-popup button", "click", () => {
    //   el(".cookie-popup").classList.add("cookie-popup--accepted");
    //   localStorage.setItem("accepted", true);
    //   document.cookie = `cookie-accepted=Bez cookie ne stava... Nema kak`;
    //   el(".nonModal").classList.remove("modal");
    // });

    // /* popup init hanler */
    // if (
    //   cookie("cookie-accepted") !== "true" &&
    //   localStorage.getItem("accepted") !== "true"
    // ) {
    //   el(".cookie-popup").classList.add("cookie-popup--not-accepted");
    //   el(".nonModal").classList.add("modal");
    // }

    document.title = "NONCREATIVEBLOG";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout posts={posts}>
      <div id="blurBackground">
        <div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>
      </div>

      <div className="row ">
        <div className="midcolumn ">
          <div className="">
            <PostsComponent
              button={"Зареди още"}
              posts={posts
                ?.filter((x) => x.category != "recipe")
                .sort((x, b) => x._createdAt - b._createdAt)}
              info={"Последно добавени"}
            />
          </div>
        </div>
        <div className="rightcolumn">
          <div className="columns ">
            <h3>Най - четени</h3>

            <RecentlyPosts
              posts={posts?.slice().sort((x, b) => b.likes - x.likes)}
            />
          </div>
          <div className="columns">
            {" "}
            <h3>Автори</h3>
            <hr />
            <ul className="section">
              {" "}
              {authors.map((a) => (
                <li>
                  {" "}
                  <Link href={`/authors/${a.slug.current}`}>
                    {" "}
                    {a.name}
                  </Link> ({" "}
                  {posts.filter((x) => x.author?._ref === a._id).length} статии)
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainBlogPage;
export const getStaticProps = async () => {
  const category = await client.fetch(
    groq`*[_type == "category"]{
      _id,
      slug,
      title,
      mainImage{
        asset->{
          _id,
          url
        }
      }
    }`
  );
  const authors = await client.fetch(
    groq`*[_type == "author"]{
      _id,
      slug,
      name,
      _id,
      mainImage{
        asset->{
          _id,
          url
        }
      }
    }`
  );

  const query = groq`*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    "authorImage": author->image,
    "category": categories[0]->title,
    description,
    author,
    "authorName": author->name,
    likes,
    rowTitle,
    _id,
    body,
    publishedAt,
    mainImage{
      asset->{
        _id,
        url
      }
    }
  }`;

  const posts = await client.fetch(query);

  return {
    props: { posts, category, authors },
  };
};
