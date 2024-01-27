import React, { useEffect, useState } from "react";
import MainBlogPage from "./blog";
// import LoadingVideo from "../components/LoadingVideo/loadingVideo";
import groq from "groq";
import { client, urlForImg } from "../lib/sanityClient";
import moment from "moment";
import Layout from "../components/Layout/Layout";
import PostsComponent from "../components/Blog/BlogPageComponents/PostsComponent";
import RecentlyPosts from "../components/Blog/BlogPageComponents/RecentlyPosts";
import Link from "next/link";
const Index = ({ posts, category, authors }) => {
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
      <Layout posts={posts}>
        <div id="blurBackground">
          <div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
          </div>
        </div>

        <div className="row ">
          <div className="midcolumn ">
            <PostsComponent
              posts={posts}
              button={"Виж всички"}
              info={"Последно добавени"}
            />
          </div>
          <div className="rightcolumn">
            <div className="columns ">
              <h3>Най - четени</h3>

              <RecentlyPosts
                posts={posts?.slice().sort((x, b) => b.likes - x.likes)}
              />
            </div>
            <div className="columns">
              {" "}
              <h3>Автори</h3>
              <hr />
              <ul className="section">
                {" "}
                {authors.map((a) => (
                  <li>
                    {" "}
                    <Link href={`/authors/${a.slug.current}`}>
                      {" "}
                      {a.name}
                    </Link> ({" "}
                    {posts.filter((x) => x.author?._ref === a._id).length}{" "}
                    статии)
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
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
  const authors = await client.fetch(
    groq`*[_type == "author"]{
      _id,
      slug,
      name,
      _id,
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
    author,
      "authorName": author->name,
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
    props: { posts, category, authors },
  };
};

export default Index;
