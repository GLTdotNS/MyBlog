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
            <Link href="/post/[slug]" as={`/post/${post.slug.current}`}>
              <div style={{ cursor: "pointer", hover: "opacity: 0" }}>
                <li key={index}>
                  {moment(post.publishedAt).format("MMM/DD")}

                  <a>{post.title}</a>
                  <img
                    width={50}
                    height={80}
                    src={urlForImg(post.mainImage.asset.url)}
                  />

                  <hr />
                </li>
              </div>
            </Link>
          ))}
      </ol>
    </div>
  );
};

export default RecentlyPosts;
