import "../styles/globals.scss";
import "../styles/navbar.scss";
import "../styles/blog.scss";
import "../styles/footer.css";
import "../styles/landingPage.scss";
import "../styles/modal.css";
import "../styles/about.css";
import "../styles/admin.css";
import "../styles/cookies.css";
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
          <Analytics />
        </>
      )}
    </>
  );
}

export default MyApp;
