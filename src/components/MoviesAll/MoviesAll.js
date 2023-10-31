import { useState } from "react";
import "../MoviesAll/MoviesAll.css";
export default function MoviesAll({ movies, }) {
  const [check, setCheck] = useState(false)
  const onClick=(id)=>{
    window.location.assign(`http://localhost:3000/movie/${id}`);
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWQ5ZTg1ZThjZjAwOGVlZDZmNjVlNjJlYTgwOTgxMyIsInN1YiI6IjY1MDU3YmExMzczYWMyMDEzOWZlNDI5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CraoGpirhFmWph62Tt9uKe5wzbQ1TRHvwoWjEGrML30'
    //   }
    // };
    
    // fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2f36dcf39939fab027c6a615ea6552f8`, options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));
  }
  return (
    <div className="movieList">
      <div className="movieListTitle">
        <p>Popular Movies</p>
      </div>
      <div className="mainMoviesList">
        {movies.length > 0
          ? movies.map((movie, index) => (
              <img
                className="movie"
                src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                alt=""
                key={index}
                onClick={()=>onClick(movie.id)}
              />
            ))
          : ""}
      </div>
    </div>
  );
}
