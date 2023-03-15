import { client } from "../../lib/sanityClient";

export default async function createComment(req, res) {
  // Destructure the pieces of our request
  const { _id, name, email, comment } = JSON.parse(req.body);
  try {
    // Use our Client to create a new document in Sanity with an object
    await client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
      approved: true,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: `Couldn't submit comment`, err });
  }

  return res.status(200).json({ message: "Comment submitted" });
}
