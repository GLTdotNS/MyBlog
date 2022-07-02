import moment from 'moment';
import React from 'react'
import Link from 'next/link';
import { urlForImg } from '../../../lib/sanityClient';
const MostLikedPosts = ({ posts }) => {

  return (
    <div className="columns posts" >
      <h3 className="p__opensans title">Most commented posts</h3>
      <hr />

      {posts && posts.filter(x => x.comments.length > 0).slice(0, 3).map((post, index) =>

        <ul className="section" key={post._id} >
          <li>
            {moment(post.publishedAt).format("MMM DD")}
            <Link href="/post/[slug]" as={`/post/${post.slug.current}`}
              ><a>{post.title}</a></Link>
          </li>
          <hr />
        </ul>


      )}

    </div>
  )
}

export default MostLikedPosts
