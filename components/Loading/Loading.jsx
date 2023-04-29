import React from "react";
import Layout from "../Layout/Layout";
import logo from "../../styles/assets/landingImage.png";
import Image from "next/image";
const Loading = () => {
  return (
    <Layout>
      <div className="loading">
        <div className="loading-text">
          <span className="loading-text-words">
            <Image src={logo} alt="" height={50} />
          </span>

          {/* <span className="loading-text-words">.</span>
          <span className="loading-text-words">.</span>
          <span className="loading-text-words">.</span>
          <span className="loading-text-words">.</span> */}
        </div>
      </div>
    </Layout>
  );
};

export default Loading;
