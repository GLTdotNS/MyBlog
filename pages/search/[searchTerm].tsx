import React from "react";
import { useRouter } from "next/router";
import PostsComponent from "../../components/Blog/BlogPageComponents/PostsComponent";
import Layout from "../../components/Layout/Layout";
import Image from "next/image";
import logo from "../../styles/assets/monkey.png";
import Link from "next/link";
const Search = ({ posts }) => {
  const router = useRouter();
  const { searchTerm } = router.query;

  return (
    <>
      <Layout posts={posts}>
        {posts.filter((x) =>
          x.title.toLowerCase().includes(searchTerm.toString().toLowerCase())
        ).length > 0 ? (
          <div
            className="midcolumn dropdown"
            style={{
              width: "70%",
              margin: "0 auto",
              display: "block",
            }}
          >
            <div className="">
              <div
                style={{ backgroundColor: "transparent", height: "100px" }}
              ></div>
              <h1>
                Резултати от търсенето съдържащи -{" "}
                {searchTerm.toString().toLocaleUpperCase()}
              </h1>
              <hr></hr>
              <PostsComponent posts={posts} />
            </div>
          </div>
        ) : (
          <div
            className="row"
            style={{ overflow: "hidden", justifyContent: "center" }}
          >
            <div
              className=""
              style={{
                textAlign: "center",
              }}
            >
              <div style={{ backgroundColor: "" }}>
                <div id="blurBackground" style={{ marginTop: "5%" }}>
                  <Image
                    src={logo}
                    alt=""
                    style={{
                      height: "300px",
                    }}
                  />
                </div>
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
                      href={"/blog"}
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
    `${"https://www.noncreativeblog.net/"}/api/search/${searchTerm}`
  );

  const response = await res.json();

  return {
    props: { posts: response },
  };
};

export default Search;
