import '../styles/globals.css'
import Layout from "../components/Layout/Layout"
import { Toaster } from "react-hot-toast"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Toaster
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
