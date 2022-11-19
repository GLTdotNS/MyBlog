import "../styles/globals.scss";
import "../styles/navbar.css";
import "../styles/blog.css";
import "../styles/footer.css";
import "../styles/aboutme.css";
import Layout from "../components/Layout/Layout";
import { Toaster } from "react-hot-toast";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
