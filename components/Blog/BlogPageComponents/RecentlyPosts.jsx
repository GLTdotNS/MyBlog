import moment from "moment";
import React from "react";
import Link from "next/link";
import { urlForImg } from "../../../lib/sanityClient.js";

const RecentlyPosts = ({ posts }) => {
  return (
    <div className="columns posts">
      <h3 className="p__opensans title">Recently Posts</h3>
      <hr />
      <ol className="section">
        {posts &&
          posts.slice(0, 3).map((post, index) => (
            <li key={index}>
              {moment(post.publishedAt).format("MMM/DD")}
              <Link href="/post/[slug]" as={`/post/${post.slug.current}`}>
                <a>{post.title}</a>
              </Link>
              <img
                width={50}
                height={80}
                src={urlForImg(post.mainImage.asset.url)}
              />
              <hr />
            </li>
          ))}
      </ol>
    </div>
  );
};

export default RecentlyPosts;
