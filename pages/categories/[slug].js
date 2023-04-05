// [slug].js
import groq from "groq";
import { client, urlForImg } from "../../lib/sanityClient";
import RecentlyPosts from "../../components/Blog/BlogPageComponents/RecentlyPosts.jsx";
import Categories from "../../components/Blog/BlogPageComponents/Categories.jsx";
import PostsComponent from "../../components/Blog/BlogPageComponents/PostsComponent.jsx";
import { useEffect, useState } from "react";
import Image from "next/image";
import notFoundImage from "../../styles/assets/monkey.png";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
const CategoriesPage = ({ posts, category, post }) => {
  const [location, setLocation] = useState("");
  const [valueToSearch, setValueToSearch] = useState("");
  const router = useRouter();
  useEffect(() => {
    let index = window.location.href.lastIndexOf("/") + 1;
    let url = window.location.href;
    let string = url.slice(index, url.length);
    setLocation(string);

    document.title = `Категория - ` + string;
  }, []);

  if (!posts || !category || location === "") {
    return <div className="spinner"></div>;
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const currentSlug = posts.filter((x) =>
      x.title.toLowerCase().includes(valueToSearch.toLowerCase())
    )[0]?.slug.current;

    currentSlug === undefined
      ? router.push("/" + "notfound")
      : router.push("/post/" + currentSlug);
  };

  return (
    <Layout>
      <div className="row">
        <div id="blurBackground">
          <img
            loading="lazy"
            src={urlForImg(
              category.filter((x) => x.slug.current === location)[0].image.asset
                .url
            )}
            width="100%"
            height="500"
            alt="Image of the post"
          />
        </div>
        <div className="midcolumn">
          <form
            onSubmit={onFormSubmit}
            style={{ marginTop: "10%" }}
            className="box "
          >
            <h1 className="">
              {
                category.slice().filter((x) => x.slug.current === location)[0]
                  .title
              }
            </h1>
            <div className="box">
              <input
                className="categoriesSearch"
                type="text"
                placeholder={`Търсене в/във ${
                  category.slice().filter((x) => x.slug.current === location)[0]
                    .title
                }`}
                autoComplete="off"
                onChange={(e) => setValueToSearch(e.target.value.trim())}
              />
            </div>
          </form>
          <hr />
          <div className="header"></div>
          {posts.filter((x) =>
            x.title.toLowerCase().includes(valueToSearch.toLowerCase())
          ).length > 0 ? (
            <PostsComponent
              posts={posts
                .filter(
                  (x) =>
                    x.categories._ref ===
                    `${
                      category.filter((x) => x.slug.current === location)[0]._id
                    }`
                )
                .filter((x) =>
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
          <Categories posts={posts} category={category} />

          <RecentlyPosts
            posts={posts
              .slice()
              .filter(
                (x) =>
                  x.categories._ref ===
                  `${
                    category.filter((x) => x.slug.current === location)[0]?._id
                  }`
              )}
          />
        </div>
      </div>
    </Layout>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  mainImage{
    asset->{
    _id,
    url
  },

  },
  body
}`;
const isServerReq = (req) => !req.url.startsWith("/_next");
export async function getServerSideProps(context) {
  const { slug = "" } = context.params;
  const post = isServerReq ? await client.fetch(query, { slug }) : null;
  const queryPosts = groq`*[_type == "post" ]
    {
    title,
    slug,
    "authorImage": author->image,
    description,
    body,
    publishedAt,
    comments,
    "category": categories[0]->title,
    categories[0],
    likes,
    mainImage{
      asset->{
      _id,
      url
    }
  }, 'comments': *[_type == "comment" && post._ref == ^._id && approved == true] | order(_createdAt desc){
        _id, 
        name, 
        email, 
        comment, 
        _createdAt
    }
 
}`;
  const category = await client.fetch(
    groq`*[_type == "category"]{
    _id,
    title,
    image{
         asset->{
            _id,
            url
            }
        },
    slug,
 
    }`
  );

  const posts = isServerReq ? await client.fetch(queryPosts) : null;

  return {
    props: {
      key: slug,
      post,
      posts,
      category,
    },
  };
}

export default CategoriesPage;
