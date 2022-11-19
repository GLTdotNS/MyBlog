import "../styles/globals.scss";
import "../styles/navbar.css";
import "../styles/blog.css";
import "../styles/footer.css";
import "../styles/aboutme.css";
import Layout from "../components/Layout/Layout";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Toaster />
      <Component {...pageProps} />s
    </Layout>
  );
}

export default MyApp;
