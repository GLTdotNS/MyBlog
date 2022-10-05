// [slug].js
import groq from "groq";
import { client } from "../../lib/sanityClient";
import RecentlyPosts from "../../components/Blog/BlogPageComponents/RecentlyPosts.jsx";
import Categories from "../../components/Blog/BlogPageComponents/Categories.jsx";
import PostsComponent from "../../components/Blog/BlogPageComponents/PostsComponent.jsx";
import { useEffect, useState } from "react";
import Image from "next/image";
import notFoundImage from "../../styles/assets/monkey.png";
import { useRouter } from "next/router";
const CategoriesPage = ({ posts, category }) => {
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
    <div className="row">
      <div className="leftcolumn" id="forShowing">
        <form
          onSubmit={onFormSubmit}
          className="box aboutme"
          style={{ marginTop: "20%" }}
        >
          <div className="search ">
            <input
              className="input"
              type="text"
              placeholder="Search.."
              autoComplete="off"
              list="suggestions"
              onChange={(e) => setValueToSearch(e.target.value.trim())}
            />

            <datalist id="suggestions">
              {posts.map((p, index) => (
                <option className="option" key={index}>
                  {p.title}
                </option>
              ))}
            </datalist>
          </div>
        </form>
      </div>
      <div className="midcolumn">
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
        <Categories category={category} />
        <RecentlyPosts
          posts={posts.filter(
            (x) =>
              x.categories._ref ===
              `${category.filter((x) => x.slug.current === location)[0]?._id}`
          )}
        />
      </div>
    </div>
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

export async function getServerSideProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  const queryPosts = groq`*[_type == "post" ]
    {
    title,
    slug,
    "authorImage": author->image,
    description,
    body,
    publishedAt,
    comments,
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

  const posts = await client.fetch(queryPosts);

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
