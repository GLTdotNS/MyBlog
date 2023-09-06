import React from "react";
import Layout from "../../components/Layout/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { client } from "../../lib/sanityClient";
import groq from "groq";
const movies = ({ data, posts }) => {
  const router = useRouter();
  let next = Number(router.query.page) + 1;
  const [hideButton, sethideButton] = useState(false);

  if (next > data.total_pages) {
    next = 1;
    // sethideButton(true);
  }

  return (
    <Layout posts={posts}>
      <div id="blurBackground">
        <div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>
      </div>

      <div className="row ">
        <div className=" ">
          <div className="band">
            {data &&
              data.results.slice(0, 19).map((movie, index) => {
                return (
                  <div className={`item-${index + 1}`} key={movie.name}>
                    <a
                      href={`https://www.themoviedb.org/${movie.media_type}/${movie.id}`}
                      className="postCard"
                    >
                      <h3 style={{ color: "#999" }}>
                        {movie.original_name
                          ? movie.original_name
                          : movie.original_title}
                      </h3>
                      <div
                        class="thumb"
                        style={{
                          backgroundImage: `url(
                            
                            ${
                              movie.backdrop_path
                                ? ` http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                                : logo.src
                            }  )`,
                        }}
                      ></div>
                      <article>
                        <h4>
                          {movie.overview
                            ? movie.overview.slice(0, 150)
                            : "Липсващо описание"}
                          ...
                        </h4>
                      </article>
                    </a>
                  </div>
                );
              })}
          </div>

          <button
            className="next-btn"
            onClick={() => router.push("/movies/" + next)}
          >
            {!hideButton ? "Следваща страница" : "Към първата страница"}
          </button>
        </div>
      </div>
    </Layout>
  );
};

const isServerReq = (req) => !req.url.startsWith("/_next");
export async function getServerSideProps(context) {
  const { page } = context.params;
  const key = process.env.NEXT_PUBLIC_MOVIE;
  let data;
  const url = `https://api.themoviedb.org/3/search/multi?query=vikings&include_adult=false&language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer  ${key}`,
    },
  };
  await fetch(url, options, { page })
    .then((res) => res.json())
    .then((json) => (data = json))
    .catch((err) => console.error("error:" + err));
  const query = groq`*[_type == "post"] | order(publishedAt desc)
  {
  title,
  slug,
  "authorImage": author->image,
  "category": categories[0]->title,
  description,
  "author": author->name,
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
},

}`;
  const posts = await client.fetch(query);

  return {
    props: {
      key: page,
      data,
      posts,
    },
  };
}

export default movies;
