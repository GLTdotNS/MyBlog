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
    <Layout posts={posts}>
      <div id="blurBackground">
        <div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>
      </div>

      <div className="row ">
        <div></div>
        <div className="midcolumn ">
          <div className="band">
            <PostsComponent
              posts={posts?.sort((x, b) => x._createdAt - b._createdAt)}
            />
          </div>
        </div>
        <div className="rightcolumn">
          <div className="columns ">
            <h3 className="p__opensans ">Най - четени</h3>
            <CrispWithNoSSR />
            <RecentlyPosts
              posts={posts?.slice().sort((x, b) => b.likes - x.likes)}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainBlogPage;
