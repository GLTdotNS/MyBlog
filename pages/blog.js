import { useState, useEffect } from "react";
import PostsComponent from "../components/Blog/BlogPageComponents/PostsComponent";
import Categories from "../components/Blog/BlogPageComponents/Categories";
import RecentlyPosts from "../components/Blog/BlogPageComponents/RecentlyPosts";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import notFoundImage from "../styles/assets/monkey.png";
import "react-calendar/dist/Calendar.css";
import { client } from "../lib/sanityClient";
import groq from "groq";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";

const MainBlogPage = ({ posts, category }) => {
  const [valueToSearch, setValueToSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    document.title = "NONCREATIVEBLOG";
    window.scrollTo(0, 0);
  }, []);

  if (!posts) {
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="card initial-post">
          <h3>
            <Skeleton width={50} />
          </h3>
          <h5>
            <Skeleton width={80} />
          </h5>

          <div className="inner_post_text">
            <span>
              <Skeleton height={100} />
            </span>
          </div>
        </div>
      </SkeletonTheme>
    );
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const currentSlug = posts.filter((x) =>
      x.title.toLowerCase().includes(valueToSearch.toLowerCase())
    )[0]?.slug.current;

    currentSlug === undefined
      ? router.push(window.location.href + "/" + "not-founded-post")
      : router.push("/post/" + currentSlug);
  };
  return (
    <Layout>
      <div className="row">
        <div className="midcolumn ">
          <form
            onSubmit={onFormSubmit}
            className="box "
            style={{ marginTop: "10%" }}
          >
            <h1 className="slide ">NONCREATIVEBLOG</h1>

            <div className="search">
              <input
                name="service-city"
                className="input"
                placeholder="Search post.."
                autoComplete="off"
                onChange={(e) => setValueToSearch(e.target.value.trim())}
              />

              <datalist className="datalist">
                {posts.map((p, index) => (
                  <option className="" key={index}>
                    {p.title}
                  </option>
                ))}
              </datalist>
            </div>
          </form>
          <hr />

          <hr />
          {posts.filter((x) =>
            x.title.toLowerCase().includes(valueToSearch.toLowerCase())
          ).length > 0 ? (
            <PostsComponent
              posts={posts.filter((x) =>
                x.title.toLowerCase().includes(valueToSearch.toLowerCase())
              )}
            />
          ) : (
            <div style={{ minHeight: "100vh", textAlign: "center" }}>
              <h2 style={{ marginTop: "10px" }}>Oooops!...</h2>
              <Image src={notFoundImage} width="350px" height="300px" />
              <p>I am probably working on something that has blown up.</p>
            </div>
          )}
        </div>
        <div className="rightcolumn">
          <Categories category={category} />

          <RecentlyPosts posts={posts} />
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
  description,
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
  title

  }`
  );

  const posts = await client.fetch(query);

  return {
    props: { posts, category },
  };
};
export default MainBlogPage;