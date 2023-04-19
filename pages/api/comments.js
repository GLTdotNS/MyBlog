import { client } from "../../lib/sanityClient";

export default async function createComment(req, res) {
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

  const posts = await client.fetch(queryPosts);

  return posts;
}
