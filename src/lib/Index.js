const API_KEY = "bad9e85e8cf008eed6f65e62ea809813";

export const movieLoader = async ({ params }) => {
  const movieId = params.id;

  const credits = await getMovieCredits(movieId);
  const movieData = await getMovieData(movieId);

  return {
    credits,
    movieData,
  };
};

const getMovieData = async (movieId) => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&include_adult=false&language=en-EN&page=1`;

  const res = await fetch(URL);
  return await res.json();
};

const getMovieCredits = async (movieId) => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&include_adult=false&language=en-EN&page=1`;
  const res = await fetch(URL);
  return await res.json();
};