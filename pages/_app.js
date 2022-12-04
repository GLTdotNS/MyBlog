import "../styles/globals.scss";
import "../styles/navbar.css";
import "../styles/blog.css";
import "../styles/footer.css";
import "../styles/aboutme.css";
import "../styles/landingPage.scss";
import { Toaster } from "react-hot-toast";
import Router from "next/router";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Router.events.on("routeChangeStart", NProgress.start);
    Router.events.on("routeChangeComplete", NProgress.done);
    Router.events.on("routeChangeError", NProgress.done);
    return () => {
      Router.events.off("routeChangeStart", NProgress.start);
      Router.events.off("routeChangeComplete", NProgress.done);
      Router.events.off("routeChangeError", NProgress.done);
    };
  }, []);
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
