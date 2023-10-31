import { movieLoader } from "./lib/Index";
import MoviePage from "./Page/MoviePage";
import Main from "./Page/Main";
import Header from "./components/Header/Header";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

const Head = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Head />}>
      <Route index element={<Main />} />
      <Route path="/movie/:id" loader={movieLoader} element={<MoviePage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;