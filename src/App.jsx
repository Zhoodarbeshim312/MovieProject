import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Main from "./components/pages/main/Main";
import Popular from "./components/pages/popular/Popular";
import TopRated from "./components/pages/topRated/TopRated";
import MovieDetails from "./components/pages/movieDetails/MovieDetails";
import ActorsDetails from "./components/pages/actorsDetails/ActorsDetails";

function App() {
  const routers = [
    {
      id: 1,
      path: "/",
      element: <Main />,
    },
    {
      id: 2,
      path: "/popular",
      element: <Popular />,
    },
    {
      id: 3,
      path: "/topRated",
      element: <TopRated />,
    },
    {
      id: 4,
      path: "/movieDetails/:movieId",
      element: <MovieDetails />,
    },
    {
      id: 5,
      path: "/movieDetails/actorDetails/:actorId",
      element: <ActorsDetails />,
    },
  ];
  return (
    <div className="app">
      <Header />
      <Routes>
        {routers.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
