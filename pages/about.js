import React from "react";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import groq from "groq";
import { BsGithub, BsLinkedin, BsMailbox2, BsFacebook } from "react-icons/bs";
import Link from "next/link";
import { client } from "../lib/sanityClient";
const About = ({ category, posts }) => {
  return (
    <Layout posts={posts}>
      <div style={{ marginBottom: "20%" }}>
        <div className=" container content-wrapper ">
          <div className="staffCard draw-border ">
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
                <br />В този блог ще намерите разкази за боговете и героите на
                скандинавската митология, както и за техните битки и епични
                приключения. Ще се запознаете с космологията на нордическите
                племена и техните вярвания. Какво всъщност е било за тях живота
                , семейството и родината !
                <br />
                <br />
                <blockquote
                  style={{
                    backgroundColor: "transparent",
                    borderLeft: "none",
                    marginBottom: "1px",
                  }}
                >
                  <em>
                    Слънцето чернее ,<br /> потъва земята в морето. <br />{" "}
                    Звездите блестящи , чезнат от небето.
                    <br /> Огън гори на Живота дървото.
                    <br />
                    Жупел се вдига до самото небе
                  </em>
                </blockquote>
                <em> Из Völuspá , Snorri Sturluson</em>
                <br />
                <br />
                <strong> Приятно четене , Skál</strong> !
              </span>
              <br />
              <br />
              <em style={{ fontWeight: "400" }}>
                Ако искате да предложите тема или да бъдете автор , не се
                колебайте да ми пишете{" "}
                <Link
                  style={{ color: "blue", textDecoration: "underline" }}
                  href={"message"}
                >
                  тук.
                </Link>{" "}
              </em>
            </div>
            {/* <div class="wrap">
              <div class="social">
                <i class="">
                  <BsGithub color="black" />
                </i>
                <i class="icon-twitter tw">
                  <BsLinkedin />
                </i>
                <i class="icon-youtube yt">
                  <BsMailbox2 color="black" />
                </i>
                <i class="icon-facebook fb">
                  <BsFacebook />
                </i>
              </div>
            </div> */}
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

export default About;
