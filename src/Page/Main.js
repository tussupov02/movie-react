import Form from "../components/Form/Form";
import MoviesAll from "../components/MoviesAll/MoviesAll";
import { useEffect, useState } from "react";
import MovieBanner from "../components/MovieBanner/MovieBanner";

function Main() {
  const [movies, setMovies] = useState([]);
  const [bannerMovie, setBannerMovie] = useState([]);
  const [loadpage, setPage] = useState(2);
  const [inputValue, setInputValue] = useState("");
  const API_KEY = "bad9e85e8cf008eed6f65e62ea809813";

  const getFilmData = async (value, search, query, newPage, array) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/${search}?api_key=${API_KEY}${
        query || ""
      }&include_adult=false&language=en-US&page=${newPage || "1"}`
    );
    const { results } = await response.json();
    if (array) {
      value([...array, ...results]);
    } else {
      value(results);
    }
  };

  const onClick = () => {
    setPage(loadpage + 1);
    console.log(loadpage);
    if (inputValue !== "") {
      getFilmData(
        setMovies,
        "search/movie",
        `&query=${inputValue}`,
        loadpage,
        movies
      );
      console.log(inputValue);
    } else {
      getFilmData(setMovies, "movie/popular", "", loadpage, movies);
    }
  };
  useEffect(() => {
    getFilmData(setBannerMovie, "movie/popular");
    getFilmData(setMovies, "movie/popular");
    console.log(movies)
  }, []);

  useEffect(() => {
    getFilmData(setMovies, "search/movie", `&query=${inputValue}`);

    if (!inputValue.trim()) {
      getFilmData(setMovies, "movie/popular");
    }
    console.log(movies);
  }, [inputValue]);

  return (
    <div>

      {inputValue ? (
        <></>
      ) : (
        <MovieBanner movieBanner={bannerMovie[0]} checkBanner={false} />
      )}
      <Form
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <MoviesAll movies={movies} />
      <div className="btn">
        <button onClick={onClick}>Load more</button>
      </div>
    </div>
  );
}

export default Main;
