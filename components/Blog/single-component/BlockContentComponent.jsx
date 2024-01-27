import React, { useEffect } from "react";
import { serializers } from "../../../serializers/serializers";
import BlockContent from "@sanity/block-content-to-react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import VideoCard from "./Videocard.tsx";
const BlockContentComponent = ({ post }) => {
  useEffect(() => {
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="post_text">
        <Skeleton height={100} />
      </div>
    </SkeletonTheme>;
  }, []);

  return (
    <div>
      <BlockContent
        blocks={post}
        serializers={serializers}
        projectId="6kqgsbl2"
        dataset="production"
      />
      {/* {post?.Video ? <VideoCard post={post} /> : ""} */}
    </div>
  );
};

export default BlockContentComponent;
