import MainBlogPage from "./MainBlogPage";
import { client } from "../lib/sanityClient";
import groq from "groq";
import Landing from "./landingPage";

const Index = ({ posts, category, banner }) => {
  return (
    <div>
      <main>
        <Landing />
        {/* <MainBlogPage posts={posts} category={category} banner={banner} /> */}
      </main>
    </div>
  );
};

export default Index;
