import React from "react";
import moment from "moment";

import { urlForImg } from "../../../lib/sanityClient.js";

import { useState } from "react";
import { MdOutlineTimer } from "react-icons/md/index";
import { FaEye } from "react-icons/fa/index";
import "react-loading-skeleton/dist/skeleton.css";
import { useRouter } from "next/router.js";
import { client } from "../../../lib/sanityClient.js";

const PostsComponent = ({ posts, button, info }) => {
  const initialPostList = 7;
  const incrementInitialPostList = 8;
  const [hideButton, setHideButton] = useState(false);
  const [displayPosts, setDisplayPosts] = useState(initialPostList);
  const [flagHideButton, setFlagHideButton] = useState(initialPostList);

  const loadMore = () => {
    setDisplayPosts(displayPosts + incrementInitialPostList);
    setFlagHideButton(flagHideButton + incrementInitialPostList);
    if (flagHideButton + incrementInitialPostList >= posts.length) {
      setHideButton(true);
    }
  };
  const router = useRouter();
  const displayPost =
    posts &&
    posts.slice(0, displayPosts).map((post, index) => {
      let wordsCount = post?.description.split(" ");

      let minutesToRead = wordsCount.length / 200;
      const updateReaders = async (_id) => {
        if (localStorage.getItem(post?.title)) {
          return;
        }
        await client.patch(post?._id).inc({ likes: 1 }).commit();
        localStorage.setItem(post?.title, true);
      };

      return (
        <div className={`item-${index + 1}`} key={post.slug.current}>
          <a
            className="postCard"
            onClick={() =>
              updateReaders(post) && router.push(`/post/${post.slug.current}`)
            }
          >
            <h3 style={{ color: "#999", padding: "2%" }}>{post.title}</h3>
            <div
              class="thumb"
              style={{
                backgroundImage: `url(${urlForImg(post.mainImage.asset.url)})`,
              }}
            >
              <span
                style={{
                  marginLeft: "5%",
                  marginTop: 23,
                  fontSize: "12px",
                  color: "#4ba6e7",
                  backgroundColor: "#333",
                  padding: "2px",
                  borderRadius: "3px",
                }}
              >
                <MdOutlineTimer size={10} />{" "}
                {` ${minutesToRead.toFixed()} ${
                  minutesToRead.toFixed() > 1 ? "минути" : "минутa"
                }`}
              </span>
              <span
                style={{
                  marginLeft: "5%",
                  marginTop: 23,
                  fontSize: "12px",
                  color: "#4ba6e7",
                  backgroundColor: "#333",
                  padding: "2px",
                  borderRadius: "3px",
                }}
              >
                <FaEye size={10} /> {` ${post.likes} пъти`}
              </span>
            </div>
            <article>
              <h4>
                {post.description.slice(0, 180)} ...{" "}
                <span style={{ color: "#f9b22a", float: "" }}>Виж повече</span>
              </h4>
              <span>
                By {post.authorName} ,{" "}
                {moment(post.publishedAt).format("YYYY , MMM  DD")}
              </span>
            </article>
          </a>
        </div>
      );
    });

  return (
    <>
      <div
        className="columns"
        style={{
          margin: "auto",
          textAlign: "center",
          marginBottom: "2%",
        }}
      >
        <div className="title">
          <h3 style={{ padding: "5px", width: "95%" }}>
            <span style={{ padding: "5px", width: "100px" }}>{info}</span>
          </h3>
        </div>
      </div>
      <div className="band">{displayPost} </div>
      <div
        style={{
          width: "100%",
          margin: "auto",
          padding: "5%",
          position: "relative",
        }}
      >
        {!hideButton && posts?.length != 1 ? (
          <button
            className="loadmore-btn"
            onClick={() =>
              button != "Виж всички" ? loadMore() : router.push("blog")
            }
          >
            {button}
          </button>
        ) : (
          <button
            style={{ cursor: "not-allowed", opacity: "0.5" }}
            className="loadmore-btn"
          >
            Изглежда стигнахте до края. &#9785;
          </button>
        )}
      </div>
    </>
  );
};

export default PostsComponent;
