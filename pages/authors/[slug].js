import { client, urlForImg } from "../../lib/sanityClient";
import dynamic from "next/dynamic";
import cover from "../../styles/assets/banner.png";
import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import PostsComponent from "../../components/Blog/BlogPageComponents/PostsComponent";
import Image from "next/image";
import { IoArrowBackSharp } from "react-icons/io5";
import { useRouter } from "next/router";

const block = dynamic(
  () => import("../../components/Blog/single-component/BlockContentComponent"),

  {
    ssr: false,
  }
);

const load = dynamic(() => import("../../components/Loading/Loading"), {
  ssr: false,
});

let BlockContent = block;
let Loading = load;
const Authors = ({ authors, author, posts }) => {
  const router = useRouter();
  return (
    <div style={{ backgroundColor: "#333" }}>
      <div
        className="profile-nav"
        style={{
          width: "100%",
          backgroundColor: "#262626",

          padding: "1%",
          position: "fixed",
          top: "0",
          zIndex: "100000",
        }}
      >
        {" "}
        <IoArrowBackSharp
          onClick={() => router.back()}
          title="Назад"
          cursor={"pointer"}
          size={30}
        />
        <h4
          style={{
            textAlign: "center",
            position: "absolute",
            top: "15px",
            left: "25%",
            right: "25%",
          }}
        >
          Профил
        </h4>
      </div>{" "}
      <Head>
        <title>{author?.name}</title>
      </Head>
      <div
        id="profilePage"
        className=" container "
        style={{ marginTop: "20px" }}
      >
        <div>
          <div
            className="staffCard"
            style={{ marginBottom: "5%", position: "" }}
          >
            <div class="social-media-cover">
              <Image
                className="cover-image"
                src={cover}
                alt={`${author.name}`}
              />{" "}
              <img
                src={urlForImg(author.image.asset)}
                width={120}
                height={120}
                className="profile-image"
                style={{
                  borderRadius: "4%",
                  marginTop: "5%",
                  marginBottom: "2%",
                }}
                alt={`${author.name}`}
              />{" "}
            </div>
            <div class="profile-info">
              <h2 class="profile-name">{author.name}</h2>
            </div>

            <div
              className="author-div"
              style={{ width: "70%", margin: "auto" }}
            >
              {author.name !== "Георги Тонков" ? (
                <p style={{ textAlign: "center" }}>Няма налична информация</p>
              ) : (
                <BlockContent post={author.bio} />
              )}
            </div>
            <div style={{ marginTop: "5%" }}>
              <PostsComponent
                posts={posts.filter((p) => p.author._ref === author._id)}
                button={"Зареди още"}
                info={`Статии от ${author.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const query = `*[_type == "author" && slug.current == $slug][0]{
  bio,
name,
    _id,
  slug,
  image{
    asset->{
    _id,
    url
  },

}
}`;
const isServerReq = (req) => !req.url.startsWith("/_next");
export async function getStaticPaths() {
  const models = `*[_type == "author" ]{
    bio,
name,
    publishedAt,
    slug,
    image{
      asset->{
      _id,
      url
    },
  
}
  }`;
  const model = await client.fetch(models);
  const paths = model.map((v) => ({ params: { slug: v.slug.current } }));
  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const author = isServerReq ? await client.fetch(query, { slug }) : null;
  const authorsQuery = `*[_type == "author" ]{
    bio,
name,
    publishedAt,
    slug,
    image{
      asset->{
      _id,
      url
    },
  
}
  }`;
  const authors = await client.fetch(authorsQuery);
  const postQuery = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    "authorImage": author->image,
    "category": categories[0]->title,
    description,
    author,
    likes,
    rowTitle,
    _id,
    body,
    publishedAt,
    mainImage{
      asset->{
        _id,
        url
      }
    }
  }`;

  const posts = await client.fetch(postQuery);
  return {
    props: {
      authors,
      author,
      posts,
    },
    revalidate: 10,
  };
}

export default Authors;
