import React, { useEffect, useState } from "react";
import MainBlogPage from "./blog";
// import LoadingVideo from "../components/LoadingVideo/loadingVideo";
import groq from "groq";
import { client } from "../lib/sanityClient";

const Index = ({ posts, category }) => {
  const [isVideoShown, setVideoShown] = useState(false);

  useEffect(() => {
    const isVideoShown = sessionStorage.getItem("videoShown");

    if (!isVideoShown) {
      setVideoShown(true);
      sessionStorage.setItem("videoShown", "true");
    }
  }, []);

  return (
    <main>
      {/* {isVideoShown && <LoadingVideo />} */}
      {/* <LoadingVideo /> */}
      <MainBlogPage posts={posts} category={category} />
    </main>
  );
};

export const getStaticProps = async () => {
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

  const query = groq`*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    "authorImage": author->image,
    "category": categories[0]->title,
    description,
    "author": author->name,
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
    }
  }`;

  const posts = await client.fetch(query);

  return {
    props: { posts, category },
  };
};

export default Index;
