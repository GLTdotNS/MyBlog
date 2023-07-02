export default async function getMovies(req, res) {
  let data = [];
  const url = `https://api.themoviedb.org/3/search/multi?query=vikings&include_adult=false&language=en-US&page=${1}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzUzODg4YWEyYzhkNmM5MDY0ZTVhZjg3MGI5YjZkZiIsInN1YiI6IjY0YTE2YjcyOGMwYTQ4MDEzYjNkZWE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FF2os7VDydRDKvCYUZmAeA2p-OtxtNCZhZM8Aqv6qyo",
    },
  };
  await fetch(url, options)
    .then((res) => res.json())
    .then((json) => (data = json))
    .catch((err) => console.error("error:" + err));
  res.status(200).json({ data });
}
