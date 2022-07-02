import React from 'react'
import { serializers } from '../../../serializers/serializers'
import BlockContent from "@sanity/block-content-to-react";


const BlockContentComponent = ({post}) => {
 
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
