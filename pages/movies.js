import React from "react";
import Layout from "../components/Layout/Layout";
import { useEffect, useState } from "react";
const movies = ({}) => {
  const [data, setData] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetch("/api/movies");
      const d = await movies.json();
      setData(d.data);
    };
    getMovies();
  }, []);

  return (
    <Layout posts={""}>
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
              data.results.map((movie, index) => {
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
                          backgroundImage: `url(${`http://image.tmdb.org/t/p/w500/${
                            movie.backdrop_path
                              ? movie.backdrop_path
                              : movie.poster_path
                          }`})`,
                        }}
                      ></div>
                      <article>
                        <h4>{movie.overview.slice(0, 150)}...</h4>
                      </article>
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="rightcolumn">
          <div className="columns "></div>
        </div>
      </div>
    </Layout>
  );
};
// export const getStaticProps = async () => {
//     let data;
//   const url =
//     "https://api.themoviedb.org/3/search/multi?query=vikings&include_adult=false&language=en-US&page=1";
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzUzODg4YWEyYzhkNmM5MDY0ZTVhZjg3MGI5YjZkZiIsInN1YiI6IjY0YTE2YjcyOGMwYTQ4MDEzYjNkZWE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FF2os7VDydRDKvCYUZmAeA2p-OtxtNCZhZM8Aqv6qyo",
//     },
//   };
//   await fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => (data = json))
//     .catch((err) => console.error("error:" + err));

//   return {
//     props: { data },
//   };
// };

export default movies;
