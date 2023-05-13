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
  const postPerPage = 7;
  const pageVisited = pageNumber * postPerPage;
  const router = useRouter();
  const displayPost =
    posts &&
    posts.slice(pageVisited, pageVisited + postPerPage).map((post, index) => {
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

  const pageCount = posts && Math.ceil(posts.length / postPerPage);
  const count = 1;
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
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        onPageChange={handleChange}
        renderOnZeroPageCount={null}
        breakLabel="..."
      />
    </>
  );
};

export default PostsComponent;
