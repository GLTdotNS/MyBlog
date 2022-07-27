import About from "../components/About/About"
import { client } from "../lib/sanityClient"
import groq from "groq"

const AboutMe = ({ banner , references }) => {
  return (
    <div>
      <About banner={banner} references={references} />
    </div>
  )
}

export default AboutMe

export const getServerSideProps = async () => {



  const banner = await client
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
  const references = await client
    .fetch(
      groq`*[_type == "references"]{
  name,
  description,
  image{
    asset->{
      _id,
      url
     }
   },

}`
    )


  return {
    props: { 
      banner,
      references
    }
  }

}
