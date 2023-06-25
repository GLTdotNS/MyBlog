import React from "react";
import Contacts from "../components/Contacts/contacts";
import Layout from "../components/Layout/Layout";
import groq from "groq";
import { client } from "../lib/sanityClient";

const Message = ({ posts }) => {
  return (
    <Layout posts={posts}>
      <div className="contacts-page">
        <Contacts />
      </div>
    </Layout>
  );
};
export const getStaticProps = async () => {
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
export default Message;
