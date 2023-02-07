import React from "react";
import moment from "moment";
import { MdReadMore } from "react-icons/md";
import { urlForImg } from "../../../lib/sanityClient.js";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import "react-loading-skeleton/dist/skeleton.css";
import { useRouter } from "next/router.js";

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

      return (
        <div
          className=" initial-post"
          key={post.title}
          onClick={() => router.push(`/post/${post.slug.current}`)}
        >
          <div className="inner_post_text">
            <h3 style={{ marginBottom: "4px" }}>{post.title}</h3>

            <p>{minutesToRead.toFixed(0)} minutes to read</p>
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
        </div>
      );
    });

  const pageCount = posts && Math.ceil(posts.length / postPerPage);

  const handleChange = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 0);
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
