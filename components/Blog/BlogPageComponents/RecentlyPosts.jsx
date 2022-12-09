import moment from "moment";
import React from "react";
import Link from "next/link";
import { urlForImg } from "../../../lib/sanityClient.js";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useRouter } from "next/router.js";
const RecentlyPosts = ({ posts }) => {
  const router = useRouter();
  return (
    <div className="columns posts">
      <h3 className="p__opensans title">Recently Posts</h3>
      <hr />
      <ul className="section ">
        {posts &&
          posts.slice(0, 6).map((post, index) => (
            <div
              key={post.title}
              style={{ cursor: "pointer" }}
              onClick={() => router.push(`/post/${post.slug.current}`)}
            >
              <li>{moment(post.publishedAt).format("MMM/DD")}</li>
              {post.title}
              <HiOutlineExternalLink size={17} />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default RecentlyPosts;
