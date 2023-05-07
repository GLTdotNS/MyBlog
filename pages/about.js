import React from "react";
import Image from "next/image";
import image from "../styles/assets/bg1.png";
import Layout from "../components/Layout/Layout";
import groq from "groq";
import Link from "next/link";
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
                color: "white",
                padding: "20px",
                width: "90%",
                fontSize: "20px",
                marginTop: "2%",
                marginBottom: "5%",
                borderRadius: "20px",
              }}
            >
              <span style={{ width: "70% !important" }}>
                Здравейте, приятели на скандинавската митология! Казвам се
                Георги и от няколко години изследвам нордическите богове и
                създания.
                <br />В този блог ще намерите разкази за боговете и героите на
                скандинавската митология, както и за техните битки и епични
                приключения. Ще се запознаете с космологията на нордическите
                племена и техните вярвания. Какво всъщност е било за тях живота
                , семейството и родината !
                <br />
                <br />
                Ако искате да предложите тема или да бъдете автор , не се
                колебайте да ми пишете{" "}
                <Link
                  style={{ color: "blue", textDecoration: "underline" }}
                  href={"message"}
                >
                  тук.
                </Link>
                <br />
                <br />
                <strong> Приятно четене , Skál</strong> !
              </span>
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
