import { useState, useEffect } from "react";
import PostsComponent from "../components/Blog/BlogPageComponents/PostsComponent";
import Categories from "../components/Blog/BlogPageComponents/Categories";
import RecentlyPosts from "../components/Blog/BlogPageComponents/RecentlyPosts";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import notFoundImage from "../styles/assets/monkey.png";
import { client } from "../lib/sanityClient";
import groq from "groq";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
import logo from "../styles/assets/akali.jpg";

const MainBlogPage = ({ posts, category }) => {
  const [valueToSearch, setValueToSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    document.title = "NONCREATIVEBLOG";
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (valueToSearch) {
      router.push(`/search/${valueToSearch}`);
    }
  };

  if (!posts) {
    return (
      <SkeletonTheme baseColor="#000324" highlightColor="#fff">
        <div className=" initial-post">
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

  // const onFormSubmit = (e) => {
  //   e.preventDefault();
  //   const currentSlug = posts.filter((x) =>
  //     x.title.toLowerCase().includes(valueToSearch.toLowerCase())
  //   )[0]?.slug.current;

  //   currentSlug === undefined
  //     ? router.push(window.location.href + "/" + "not-founded-post")
  //     : router.push("/post/" + currentSlug);
  // };
  return (
    <Layout>
      <div id="blurBackground">
        <Image
          src={logo}
          style={{
            height: "500px",
          }}
        />
      </div>
      <div className="row ">
        <div className="midcolumn ">
          <h1 className=" siteLogo">NONCREATIVEBLOG</h1>
          <form
            onSubmit={handleSearch}
            className="box "
            style={{ marginTop: "10%" }}
          >
            <div className="search">
              <input
                value={valueToSearch}
                name="service-city"
                className="input"
                placeholder="Search post.."
                autoComplete="off"
                id="suggestion"
                onChange={(e) => setValueToSearch(e.target.value.trim())}
              />
            </div>
          </form>

          <hr />

          <PostsComponent posts={posts} />
        </div>
        <div className="rightcolumn">
          <Categories category={category} />

          <RecentlyPosts posts={posts} />
        </div>
      </div>
    </Layout>
  );
};
export const getStaticProps = async () => {
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
export default MainBlogPage;
