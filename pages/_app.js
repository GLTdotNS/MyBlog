import "../styles/globals.scss";
import "../styles/navbar.scss";
import "../styles/blog.scss";
import "../styles/footer.css";
import "../styles/landingPage.scss";
import "../styles/modal.css";
import "../styles/about.css";
import "../styles/admin.css";
import "../styles/cookies.css";
import "../styles/runes.scss";
import "../styles/gods.css";
import { Toaster } from "react-hot-toast";
import Router from "next/router";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { useEffect } from "react";
import Head from "next/head";
import { useState } from "react";
import Loading from "../components/Loading/Loading";
import { Analytics } from "@vercel/analytics/react";
import Cookies from "../components/Cookies/Cookies";
import Script from "next/script";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
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
  useEffect(() => {
    let mybutton = document.getElementById("scrollTop");

    window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }, []);
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <Head>
        <title>NONCREATIVEBLOG</title>
        <meta name="google" content="notranslate" />
        <meta
          name="description"
          content="Открийте магията на скандинавската митология с нашия блог - богове, същества и легенди. Разкрийте тайните на северната митология с увлекателни статии. Изследвайте скандинавската митология в детайли и насладете се на нейното вълнуващо наследство.
        "
          key="desc"
        />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Cookies />
          <Toaster />

          <Component {...pageProps} />
          <button onClick={topFunction} id="scrollTop" title="Go to top">
            <BsFillArrowUpCircleFill color="wheat" />
          </button>
          <Analytics />
        </>
      )}
    </>
  );
}

export default MyApp;
