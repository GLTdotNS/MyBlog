import "../styles/globals.scss";
import "../styles/navbar.css";
import "../styles/blog.css";
import "../styles/footer.css";
import "../styles/landingPage.scss";
import { Toaster } from "react-hot-toast";
import Router from "next/router";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { useEffect } from "react";
import Head from "next/head";
import { useState } from "react";
import Loading from "../components/Loading/Loading";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState();
  NProgress.configure({ showSpinner: false });
  useEffect(() => {
    Router.onRouteChangeStart = (url) => {
      NProgress.start();
      setLoading(true);
    };

    Router.onRouteChangeComplete = () => {
      NProgress.done();
      setLoading(false);
    };

    Router.onRouteChangeError = () => NProgress.done();
  }, []);
  return (
    <>
      <Head>
        <title>NONCREATIVEBLOG</title>
        <meta
          name="description"
          content="portfolio ☝️  This is a dev blog about the projects I'm working on at the moment. 
          The blog includes different kinds of articles related to the projects and links to the projects' Github repositories.
          This is a blog post that I made to share some of my experience with React, React NextJS and a little bit of web development.
          My portfolio  is just a collection of a few of the projects that I've worked on. It showcases the different areas of web development that I enjoy.
          React is one of the most popular JavaScript frameworks for creating web applications. It uses Virtual DOM for memory management and is fully reactive."
          key="desc"
        />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <Toaster />
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}

export default MyApp;
