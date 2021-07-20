import React from "react";
import Movie from "../movieCard2";
import Grid from "@material-ui/core/Grid";

const MovieLists = ( {movies, action }) => {
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={6} sm={4} md={3} lg={3} xl={2}>
      <Movie key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return movieCards;
};

export default MovieLists;