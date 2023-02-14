import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Layout from "../Layout/Layout";
import logo from "../../styles/assets/akali.jpg";
import Image from "next/image";
const Loading = () => {
  return (
    <Layout>
      <SkeletonTheme baseColor="#000350" highlightColor="#444">
        <main className="">
          <Skeleton width={"100%"} height={500} />
          <div className="row">
            <div className="midcolumn ">
              <form className="box " style={{ marginTop: "10%" }}>
                <h1 className="">
                  <Skeleton />
                </h1>

                <div className="search">
                  <Skeleton />
                </div>
              </form>
              <hr />

              <hr />
              <div className=" initial-post">
                <h3>
                  <Skeleton width={50} />
                </h3>
                <h5>
                  <Skeleton width={80} />
                </h5>

                <div className="inner_post_text">
                  <span>
                    <Skeleton height={100} />
                  </span>
                </div>
              </div>
              <div className=" initial-post">
                <h3>
                  <Skeleton width={50} />
                </h3>
                <h5>
                  <Skeleton width={80} />
                </h5>

                <div className="inner_post_text">
                  <span>
                    <Skeleton height={100} />
                  </span>
                </div>
              </div>
              <div className=" initial-post">
                <h3>
                  <Skeleton width={50} />
                </h3>
                <h5>
                  <Skeleton width={80} />
                </h5>

                <div className="inner_post_text">
                  <span>
                    <Skeleton height={100} />
                  </span>
                </div>
              </div>
            </div>
            <div className="rightcolumn">
              <div
                className="categories  columns"
                style={{ backgroundColor: "#333", borderRadius: "10px" }}
              >
                <div className="dropdown ">
                  <h3 className="p__opensans  title">
                    <Skeleton />
                  </h3>
                  <hr />

                  <span className="dropdown-content">
                    <Skeleton height={80} />
                  </span>
                </div>
              </div>
              <div className="columns posts">
                <h3 className="p__opensans title">
                  <Skeleton />
                </h3>
                <hr />
                <ul className="section ">
                  <div style={{ cursor: "pointer" }}>
                    <Skeleton height={80} />
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </SkeletonTheme>
    </Layout>
  );
};

export default Loading;
