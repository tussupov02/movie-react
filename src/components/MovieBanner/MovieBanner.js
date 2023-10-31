export default function MovieBanner({ movieBanner, checkBanner }) {
  return (
    <div>
      {checkBanner ? (
        <div
          className="bannerMovie"
          style={
            movieBanner.poster_path
              ? {
                  background: `linear-gradient( rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.4) ), url(https://image.tmdb.org/t/p/w780/${movieBanner?.backdrop_path})`,
                }
              : { background: "black" }
          }
        >
          <div className="bannerMovieBox">
            <img
              className="bannerMovieBoxImg"
              src={`https://image.tmdb.org/t/p/w780/${movieBanner?.poster_path}`}
              alt=""
            />
            <div className="bannerMovieBoxText">
              <h2>{movieBanner?.original_title}</h2>
              <p className="bannerMovieBoxPlot">PLOT</p>
              <p className="bannerMovieBoxPlotText">{movieBanner?.overview}</p>
              <div className="rating">
                <p>RATING</p>
                <div className="ratingBox">{movieBanner?.vote_average}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="bannerMovieFalse"
          style={
            movieBanner?.poster_path
              ? {
                  backgroundImage: `linear-gradient( rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.6) ), url(https://image.tmdb.org/t/p/w780/${movieBanner?.backdrop_path})`,
                }
              : { background: "black" }
          }
        >
          <div className="bannerMovieFalse">
            <div className="bannerMovieBoxTextFalse">
              <h2>{movieBanner?.original_title}</h2>
              <p>{movieBanner?.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
