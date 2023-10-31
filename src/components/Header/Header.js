import "../Header/Header.css";
export default function Header() {
  return (
    <header>
      <div className="headerMain">
        <img
          src="https://moviemania-app.vercel.app/static/media/react-movie-logo.e88a4cae.svg"
          alt=""
          className="headerTitle"
        />
        <img
          src="https://moviemania-app.vercel.app/static/media/tmdb_logo.2ecbb19c.svg"
          alt=""
          className="headerImg"
        />
      </div>
    </header>
  );
}
