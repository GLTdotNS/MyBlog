


import {client} from '../../lib/sanityClient'

export default async function createComment(req, res) {
  // Destructure the pieces of our request
  const { id, name, comment} = JSON.parse(req.body)

  try {
    // Use our Client to create a new document in Sanity with an object  
    await  client.create({
      _type: 'comment',
      post: {
          _type: 'reference',
          _ref: id,
      },
      approved: true,
      name,
      comment

  })
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: `Couldn't submit comment`, err})
  }
    
  return res.status(200).json({ message: 'Comment submitted' })
}