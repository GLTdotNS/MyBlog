import moment from "moment";
import React from "react";
import Link from "next/link";
import { urlForImg } from "../../../lib/sanityClient.js";
import { HiOutlineExternalLink } from "react-icons/hi";
const RecentlyPosts = ({ posts }) => {
  return (
    <div className="columns posts">
      <h3 className="p__opensans title">Recently Posts</h3>
      <hr />
      <ul className="section ">
        {posts &&
          posts.slice(0, 6).map((post, index) => (
            <Link
              key={post.title}
              href="/post/[slug]"
              as={`/post/${post.slug.current}`}
            >
              <div style={{ cursor: "pointer" }}>
                <li>{moment(post.publishedAt).format("MMM/DD")}</li>
                {post.title}
                <HiOutlineExternalLink size={17} />
              </div>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default RecentlyPosts;
