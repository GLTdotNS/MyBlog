import React from "react";
import Image from "next/image";
import image from "../styles/assets/bg1.png";
import Layout from "../components/Layout/Layout";
import groq from "groq";
import { client } from "../lib/sanityClient";
const About = ({ category, posts }) => {
  return (
    <Layout posts={posts}>
      <div style={{ marginBottom: "20%" }}>
        <div className="container content-wrapper">
          <div className="staffCard draw-border ">
            <Image className="card__image" src={image} alt="Staff" />

            <h4 className="card__name">Canis Lupus</h4>
            <div
              style={{
                backgroundColor: "#0089bb",
                color: "white",
                padding: "5px",
                borderRadius: "20px",
              }}
            >
              afsdgsad
            </div>
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
    description,
    likes,
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

export default About;
