import React, { useState, useEffect } from "react";

const LoadingVideo = ({}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
    <div className="loading-video ">
      <video autoPlay muted loop>
        <source src={`/_next/static/media/video.mp4`} type="video/mp4" />
      </video>
    </div>
  ) : null;
};

export default LoadingVideo;
