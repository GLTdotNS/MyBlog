import React from "react";
import { useRouter } from "next/router";
import PostsComponent from "../../components/Blog/BlogPageComponents/PostsComponent";
import Layout from "../../components/Layout/Layout";
import { client, urlForImg } from "../../lib/sanityClient";
import groq from "groq";
import Link from "next/link";
const Search = ({ posts, allPosts }) => {
  const router = useRouter();
  const { searchTerm } = router.query;
  if (
    searchTerm === "руни" ||
    searchTerm === "Руни" ||
    searchTerm === "runes" ||
    searchTerm === "Runes"
  ) {
    return (
      <Layout posts={allPosts}>
        {" "}
        <div
          className="row"
          style={{ overflow: "hidden", justifyContent: "center" }}
        >
          <div
            className="midcolumn"
            style={{
              textAlign: "center",
            }}
          >
            <div style={{ backgroundColor: "" }}>
              <div id="blurBackground" style={{ marginTop: "5%" }}></div>
              <div
                className="initial-post"
                style={{ display: "block", margin: "0 auto" }}
              >
                <h2 style={{ marginBottom: "20px" }}>
                  Резултати от търсенето съдържащи - {searchTerm}….
                </h2>

                <br />
                <p>
                  <Link style={{ color: "blue" }} href={"/"}>
                    Може би имахте предвид тази страница
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  return (
    <>
      <Layout posts={allPosts}>
        {posts.filter((x) =>
          x.title.toLowerCase().includes(searchTerm.toString().toLowerCase())
        ).length > 0 ? (
          <div className="row">
            <div
              className=" "
              style={{
                width: "70%",
                margin: "0 auto",
                display: "block",
              }}
            >
              <div className="">
                <h1>
                  Резултати от търсенето съдържащи -{" "}
                  {searchTerm.toString().toLocaleUpperCase()}
                </h1>
                <hr></hr>
                <div className="searchPage">
                  <div className="cards" style={{ marginTop: "2%" }}>
                    {posts &&
                      posts.map((post, index) => (
                        <Link
                          key={post.slug.current}
                          legacyBehavior
                          className="ps card"
                          href="/post/[slug]"
                          as={`/post/${post.slug.current}`}
                        >
                          <div
                            style={{ color: "white", position: "relative" }}
                            className={` channel_scroll_list`}
                          >
                            <p className=" model-name">{post.rowTitle}</p>

                            <img
                              width={"100%"}
                              height={"100%"}
                              src={`${urlForImg(post.mainImage.asset.url)}`}
                              alt={`${post.title}`}
                            />
                            <div className="overlay-div"></div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        ) : (
          <div
            className="row"
            style={{ overflow: "hidden", justifyContent: "center" }}
          >
            <div
              className="midcolumn"
              style={{
                textAlign: "center",
              }}
            >
              <div style={{ backgroundColor: "" }}>
                <div id="blurBackground" style={{ marginTop: "5%" }}></div>
                <div
                  className="initial-post"
                  style={{ display: "block", margin: "0 auto" }}
                >
                  <h2 style={{ marginBottom: "20px" }}>
                    Резултати от търсенето съдържащи - {searchTerm}….
                  </h2>
                  <h4 style={{ color: "red", marginBottom: "20px" }}>
                    Няма намерени
                  </h4>
                  <p>Желаната страница не може да бъде намерена.</p>
                  <p>
                    Опитайте се да прецизирате търсенето си или използвайте
                    навигационния панел по-горе, за да намерите статията.
                  </p>
                  <br />
                  <p>
                    <Link
                      style={{ color: "blue", textDecoration: "underline" }}
                      href={"/"}
                    >
                      Към начална страница
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export const getServerSideProps = async ({
  params: { searchTerm },
}: {
  params: { searchTerm: string };
}) => {
  const res = await fetch(
    `${"https://noncreativeblog.net"}/api/search/${searchTerm}`
  );
  const query = groq`*[_type == "post"] | order(publishedAt desc)
  {
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
},

}`;

  const posts = await client.fetch(query);
  const response = await res.json();

  return {
    props: { posts: response, allPosts: posts },
  };
};

export default Search;
