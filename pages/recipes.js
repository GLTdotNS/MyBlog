import React from "react";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import groq from "groq";
import { BsGithub, BsLinkedin, BsMailbox2, BsFacebook } from "react-icons/bs";
import Link from "next/link";
import { urlForImg } from "../lib/sanityClient";
import { client } from "../lib/sanityClient";

const Recipes = ({ posts }) => {
  return (
    <Layout posts={posts}>
      <div style={{ marginBottom: "20%" }}>
        <div className=" container content-wrapper ">
          <h2 style={{ width: "100%", margin: "auto" }}>Рецепти</h2>
          <div className="columns">
            <div className="title" style={{ marginTop: "10px !important" }}>
              <h3 style={{ padding: "5px" }}>
                <span style={{ padding: "5px", width: "100px" }}>
                  Традициони рецепти от севера{" "}
                </span>
              </h3>
            </div>
          </div>
          <div className="cards" style={{ marginTop: "2%" }}>
            {posts &&
              posts
                ?.filter((p) => p.category === "recipe")
                .map((post, index) => (
                  <Link
                    key={post.slug.current}
                    legacyBehavior
                    className="ps card"
                    href="/recipe/[slug]"
                    as={`/recipe/${post.slug.current}`}
                  >
                    <div
                      style={{ color: "white", position: "relative" }}
                      className={` channel_scroll_list`}
                    >
                      <p className=" model-name">{post.rowTitle}</p>

                      <img
                        width={"100%"}
                        height={"100%"}
                        src={urlForImg(post.mainImage.asset.url)}
                        alt={`${post.title}`}
                      />
                      <div className="overlay-div"></div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export const getServerSideProps = async () => {
  const query = groq`*[_type == "post"] | order(_createdAt desc)
      {
      title,
      slug,
      "authorImage": author->image,
      "category": categories[0]->title,
      "type": categories[1]->title,
      description,
      likes,
      rowTitle,
  
      _id,
      body,
      publishedAt,
      mainImage{
        asset->{
        _id,
        url
      }
    },
    
    }`;
  const category = await client.fetch(
    groq`*[_type == "category"]{
      _id,
      slug,
      title,
      mainImage{
        asset->{
        _id,
        url
      }
    }
    
      }`
  );

  const posts = await client.fetch(query);

  return {
    props: { posts, category },
  };
};
export default Recipes;
