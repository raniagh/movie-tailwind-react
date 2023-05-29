import { Route, Routes } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing" />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route
          path="movies/top"
          element={<MovieList apiPath="movie/top_rated" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList urlType="upcoming" apiPath="movie/upcoming" />}
        />
        <Route
          path="movies/popular"
          element={<MovieList urlType="popular" apiPath="movie/popular" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
