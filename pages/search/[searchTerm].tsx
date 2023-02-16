import React from "react";
import { useRouter } from "next/router";
import PostsComponent from "../../components/Blog/BlogPageComponents/PostsComponent";
import Layout from "../../components/Layout/Layout";
const Search = ({ posts }) => {
  const router = useRouter();
  const { searchTerm } = router.query;
  return (
    <>
      <Layout>
        <div
          className="midcolumn"
          style={{ margin: "auto !important", width: "80%" }}
        >
          <h1>Постове съдържащи - {searchTerm}</h1>
          <hr></hr>
          <PostsComponent posts={posts} />
        </div>
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
    `${"http://localhost:3000/"}/api/search/${searchTerm}`
  );

  const response = await res.json();

  return {
    props: { posts: response },
  };
};

export default Search;
