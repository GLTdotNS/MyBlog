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
  const [pageNumber, setPageNumber] = useState(0);
  const postPerPage = 4;
  const pageVisited = pageNumber * postPerPage;
  const router = useRouter();
  const displayPost =
    posts &&
    posts.slice(pageVisited, pageVisited + postPerPage).map((post) => {
      let wordsCount = post.description.split(" ");

      let minutesToRead = wordsCount.length / 200;
      const updateReaders = async (_id) => {
        if (localStorage.getItem(post.title)) {
          return;
        }
        await client.patch(post._id).inc({ likes: 1 }).commit();
        localStorage.setItem(post.title, true);
      };

      return (
        <div className=" initial-post" key={post.title}>
          <div className="inner_post_text">
            <h3
              onClick={() =>
                updateReaders(post) && router.push(`/post/${post.slug.current}`)
              }
              style={{ marginBottom: "4px" }}
            >
              {post.title}
            </h3>

            <p>
              {minutesToRead.toFixed(0) == 0 ? 1 : minutesToRead.toFixed(0)}{" "}
              minutes to read
            </p>
            <p>{post.likes} visitors</p>
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

          <button
            className="readMore"
            onClick={() =>
              updateReaders(post) && router.push(`/post/${post.slug.current}`)
            }
          >
            Виж повече
            <IoIosArrowRoundForward size={20} />
          </button>
        </div>
      );
    });

  const pageCount = posts && Math.ceil(posts.length / postPerPage);

  const handleChange = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 500);
  };

  return (
    <>
      {displayPost}
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        onPageChange={handleChange}
      />
    </>
  );
};

export default PostsComponent;
