import { useState, useEffect } from "react";
import PostsComponent from "../components/Blog/BlogPageComponents/PostsComponent";
import Categories from "../components/Blog/BlogPageComponents/Categories";
import RecentlyPosts from "../components/Blog/BlogPageComponents/RecentlyPosts";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import notFoundImage from "../styles/assets/monkey.png";
import { client } from "../lib/sanityClient";
import groq from "groq";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
import logo from "../styles/assets/a.jpg";

import dynamic from "next/dynamic";

const CrispWithNoSSR = dynamic(() => import("../components/Chat/chat"), {
  ssr: false,
});
const MainBlogPage = ({ posts, category }) => {
  useEffect(() => {
    document.title = "NONCREATIVEBLOG";
    window.scrollTo(0, 0);
  }, []);

  if (!posts) {
    return (
      <SkeletonTheme baseColor="#000324" highlightColor="#fff">
        <div className=" initial-post">
          <h3>
            <Skeleton width={50} />
          </h3>
          <h5>
            <Skeleton width={80} />
          </h5>

          <div className="inner_post_text">
            <span>
              <Skeleton height={100} />
            </span>
          </div>
        </div>
      </SkeletonTheme>
    );
  }

  return (
    <Layout>
      <div id="blurBackground">
        <Image
          src={logo}
          style={{
            height: "500px",
          }}
        />
      </div>
      <div className="row ">
        <div className="midcolumn ">
          <h1 className=" siteLogo">NONCREATIVEBLOG</h1>

          <hr />
          <PostsComponent
            posts={posts.sort((x, b) => x._createdAt - b._createdAt)}
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
