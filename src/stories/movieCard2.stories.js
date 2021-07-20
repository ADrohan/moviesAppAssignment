import React from "react";
import MovieCard2 from "../components/movieCard2";
import SampleMovie from "./sampleData";

export default {
  title: "Home Page/MovieCard2",
  component: MovieCard2,
};

export const Basic = () => {
  return (
    <MovieCard2
      movie={SampleMovie}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
  return (
    <MovieCard2
      movie={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";