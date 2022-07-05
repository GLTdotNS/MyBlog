import moment from 'moment';
import React from 'react'
import Link from 'next/link';
import { urlForImg } from '../../../lib/sanityClient';
const MostLikedPosts = ({ posts }) => {

  return (
    <div className="columns posts" >
      <h3 className="p__opensans title">Most commented posts</h3>
      <hr />

      <ol className="section"  >
        {posts && posts.filter(x => x.comments.length > 0).slice(0, 3).map((post, index) =>

          <li key={post._id}>
            {moment(post.publishedAt).format("MMM DD")}
            <Link href="/post/[slug]" as={`/post/${post.slug.current}`}
            ><a>{post.title}</a></Link>
            <hr />
          </li>


        )}
      </ol>

    </div>
  )
}

export default MostLikedPosts
