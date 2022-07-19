import React from 'react'
import { serializers } from '../../../serializers/serializers'
import BlockContent from "@sanity/block-content-to-react";
import { useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BlockContentComponent = ({ post }) => {

  document.title = post.title
  if (!post.body) {
    return (

      <SkeletonTheme baseColor="#202020" highlightColor="#444">

        <div className="post_text" >
          <Skeleton height={100}/>
        </div>

      </SkeletonTheme>

    )
  }
  return (

    <div className="post_text" >
      <BlockContent
        blocks={post.body}
        serializers={serializers}
        projectId="6kqgsbl2"
        dataset="production"
      />


    </div>

  )
}

export default BlockContentComponent
