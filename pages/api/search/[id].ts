import type { NextApiRequest, NextApiResponse } from "next";

import { client } from "../../../lib/sanityClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchPostsQuery = (id: string | string[]) => {
    const query = `*[_type == "post" &&  title  match '*${id}*'] {
        _id,
        title,
        slug,
        "authorImage": author->image,
        description,
        rowTitle,
        body,
        publishedAt,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }
     `;
    return query;
  };
  if (req.method === "GET") {
    const { id } = req.query;

    const postQuery = searchPostsQuery(id);
    const posts = await client.fetch(postQuery);
    res.status(200).json(posts);
  }
}
