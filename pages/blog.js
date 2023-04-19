import { useState, useEffect } from "react";
import PostsComponent from "../components/Blog/BlogPageComponents/PostsComponent";
import Categories from "../components/Blog/BlogPageComponents/Categories";
import RecentlyPosts from "../components/Blog/BlogPageComponents/RecentlyPosts";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import { client } from "../lib/sanityClient";
import groq from "groq";
import Layout from "../components/Layout/Layout";
import logo from "../styles/assets/bg.png";
import dynamic from "next/dynamic";

const CrispWithNoSSR = dynamic(() => import("../components/Chat/chat"), {
  ssr: false,
});
const MainBlogPage = ({ posts, category }) => {
  useEffect(() => {
    document.title = "NONCREATIVEBLOG";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div id="blurBackground">
        <div
          style={{
            position: "relative",
            height: "500px",
          }}
        >
          <Image id="landingImage" src={logo} height={"500"} />

          <div class="star-field">
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="midcolumn ">
          <h1 className=" siteLogo">NONCREATIVEBLOG</h1>

          <hr />
          <PostsComponent
            posts={posts?.sort((x, b) => x._createdAt - b._createdAt)}
          />
        </div>
        <div className="rightcolumn">
          <Categories posts={posts} category={category} />

          <div className="columns posts">
            <h3 className="p__opensans title">Най - четени</h3>
            <CrispWithNoSSR />
            <RecentlyPosts
              posts={posts.slice().sort((x, b) => b.likes - x.likes)}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export const getServerSideProps = async () => {
  const query = groq`*[_type == "post"] | order(_createdAt desc)
  {
  title,
  slug,
  "authorImage": author->image,
  "category": categories[0]->title,
  description,
  likes,
  _id,
  body,
  publishedAt,
  mainImage{
    asset->{
    _id,
    url
  }
},

}`;
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

  const posts = await client.fetch(query);

  return {
    props: { posts, category },
  };
};
export default MainBlogPage;
