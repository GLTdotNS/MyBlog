
import MainBlogPage from './MainBlogPage'
import { client } from '../lib/sanityClient'
import groq from 'groq'

const Index = ({posts , category}) => {
  return (
    <div >
    <main>
    <MainBlogPage posts={posts} category={category}/>
    </main>

    </div>
  )
}

export const getServerSideProps = async () => {
  
  const query = groq`*[_type == "post"] | order(_createdAt desc)
  {
  title,
  slug,
  "authorImage": author->image,
  description,
  body,
  publishedAt,
  likes,
  comments,
  mainImage{
    asset->{
    _id,
    url
  }
}, 'comments': *[_type == "comment" && post._ref == ^._id && approved == true] | order(_createdAt desc){
        _id, 
        name, 
        email, 
        comment, 
        _createdAt
    }

}`
const category = await client.fetch(
  groq`*[_type == "category"]{
  _id,
  slug,
  title

  }`);

    const posts = await client.fetch(query)



  return {
    props: { posts , category}
  }

}

export default Index;