import { useState, useEffect } from "react";
import PostsComponent from "../components/Blog/BlogPageComponents/PostsComponent";
import RecentlyPosts from "../components/Blog/BlogPageComponents/RecentlyPosts";
import "react-loading-skeleton/dist/skeleton.css";
import Layout from "../components/Layout/Layout";

import dynamic from "next/dynamic";
import Cookies from "../components/Cookies/Cookies";

const CrispWithNoSSR = dynamic(() => import("../components/Chat/chat"), {
  ssr: false,
});
const MainBlogPage = ({ posts, category }) => {
  useEffect(() => {
    /* common fuctions */
    function el(selector) {
      return document.querySelector(selector);
    }
    function els(selector) {
      return document.querySelectorAll(selector);
    }
    function on(selector, event, action) {
      els(selector).forEach((e) => e.addEventListener(event, action));
    }
    function cookie(name) {
      let c = document.cookie
        .split("; ")
        .find((cookie) => cookie && cookie.startsWith(name + "="));
      return c ? c.split("=")[1] : false;
    }

    /* popup button hanler */
    on(".cookie-popup button", "click", () => {
      el(".cookie-popup").classList.add("cookie-popup--accepted");
      localStorage.setItem("accepted", true);
      document.cookie = `cookie-accepted=Bez cookie ne stava... Nema kak`;
      el(".nonModal").classList.remove("modal");
    });

    /* popup init hanler */
    if (
      cookie("cookie-accepted") !== "true" &&
      localStorage.getItem("accepted") !== "true"
    ) {
      el(".cookie-popup").classList.add("cookie-popup--not-accepted");
      el(".nonModal").classList.add("modal");
    }

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
          <div className="band">
            <PostsComponent
              posts={posts?.sort((x, b) => x._createdAt - b._createdAt)}
            />
          </div>
          <Cookies />
        </div>
        <div className="rightcolumn">
          <div className="columns ">
            <h3 className="p__opensans ">Trending</h3>
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
