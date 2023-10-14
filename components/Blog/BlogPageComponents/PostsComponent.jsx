import React from "react";
import moment from "moment";
import { MdReadMore } from "react-icons/md";
import { SiEyeglass } from "react-icons/si";
import { urlForImg } from "../../../lib/sanityClient.js";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import ReactPaginate from "react-paginate";
import "react-loading-skeleton/dist/skeleton.css";
import { useRouter } from "next/router.js";
import { client } from "../../../lib/sanityClient.js";

const PostsComponent = ({ posts }) => {
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
            <h3 style={{ color: "#999" }}>{post.title}</h3>
            <div
              class="thumb"
              style={{
                backgroundImage: `url(${urlForImg(post.mainImage.asset.url)})`,
              }}
            ></div>
            <article>
              <h4>{post.description.slice(0, 120)} ...</h4>
              <span>
                By {post.author} ,{" "}
                {moment(post.publishedAt).format("YYYY , MMM  DD")}
              </span>
            </article>
          </a>
        </div>
      );
    });

  return (
    <>
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
          <button className="loadmore-btn" onClick={loadMore}>
            Зареди още{" "}
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
