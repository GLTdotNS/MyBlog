import About from "../components/About/About"
import { client } from "../lib/sanityClient"
import groq from "groq"

const aboutme = ({banner}) => {
  return (
    <div>
      <About banner={banner}/>
    </div>
  )
}

export default aboutme

export const getServerSideProps = async () => {

 

  const banner =   await client
  .fetch(
    groq`*[_type == "banner"]{
  about,
  firstName,
  lastName,
  years,
  phone,
  city,
  image{
    asset->{
      _id,
      url
     }
   },

}`
  )



  return {
    props: {  banner }
  }

}
