import React from "react";
import moment from "moment";
import { MdReadMore } from "react-icons/md";
import { urlForImg } from "../../../lib/sanityClient.js";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PostsComponent = ({ posts }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const postPerPage = 3;
  const pageVisited = pageNumber * postPerPage;

  const displayPost =
    posts &&
    posts.slice(pageVisited, pageVisited + postPerPage).map((post, index) => {
      let wordsCount = post.description.split(" ");

      let minutesToRead = wordsCount.length / 200;

      if (!post) {
        return (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className="card initial-post">
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
        <div className=" initial-post" key={index}>
          <h3 style={{ marginBottom: "4px" }}>{post.title}</h3>
          <p>
            {post.publishedAt
              ? moment(post.publishedAt).format("YYYY , MMM  DD , HH:MM")
              : "YYYY-MM-DD hh:mm"}
          </p>
          <p>{minutesToRead.toFixed(0)} minutes to read</p>
          <div className="inner_post_text">
            {post.mainImage ? (
              <img
                loading="lazy"
                style={{
                  float: "left",
                  margin: "0 15px 0 0",
                  padding: "1%",
                  borderRadius: "30%",
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
          <Link href="/post/[slug]" as={`/post/${post.slug.current}`}>
            <a>
              <button className="btn">
                Read more <MdReadMore />
              </button>
            </a>
          </Link>{" "}
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
