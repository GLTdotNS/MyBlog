import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Layout from "../Layout/Layout";
import logo from "../../styles/assets/wolf.jpg";
import Image from "next/image";
const Loading = () => {
  return (
    <Layout>
      <div class="loading">
        <div class="loading-text">
          <span class="loading-text-words">L</span>
          <span class="loading-text-words">O</span>
          <span class="loading-text-words">A</span>
          <span class="loading-text-words">D</span>
          <span class="loading-text-words">I</span>
          <span class="loading-text-words">N</span>
          <span class="loading-text-words">G</span>
        </div>
      </div>
    </Layout>
  );
};

export default Loading;
