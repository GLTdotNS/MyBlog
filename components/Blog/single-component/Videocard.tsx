import React, { useEffect, useState, useRef } from "react";
import { Video } from "../../../types";
import { NextPage } from "next";

interface IProps {
  post: Video;
}
const VideoCard: NextPage<IProps> = ({ post }) => {
  const [isHover, setisHover] = useState(false);
  const [isPlaying, setisPlaying] = useState(false);
  const [isVideoMuted, setisVideoMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const onVideoPress = () => {
    if (isPlaying) {
      videoRef?.current?.pause();
      setisPlaying(false);
    } else {
      videoRef?.current?.play();
      setisPlaying(true);
    }
  };
  return (
    <div
      onMouseEnter={() => {
        setisHover(true);
      }}
      onMouseLeave={() => {
        setisHover(false);
      }}
      className="video-card"
    >
      <video loop ref={videoRef} src={post.Video.asset.url}></video>
    </div>
  );
};
export default VideoCard;
