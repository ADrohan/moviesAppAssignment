import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png';
import { compact } from "../../util";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../contexts/moviesContext";


const useStyles = makeStyles({
  card: { 
    maxWidth: 300,
    backgroundColor: "rgb(30, 30, 30)",
    color: "rgb(200, 200, 200)",
  },
  media: { height: 420
  },
  star: { 
    color: "rgb(210, 210, 0)",
  },
  buttonStyle: { 
    color: "white",
    background: 'linear-gradient(45deg, #FE4B8B 30%, #FF8E80 80%)',
    border: 0,
  }
});

export default function MovieCard({movie, action }) {
  const classes = useStyles();
  const { favorites } = useContext(MoviesContext);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography className={classes.star} variant="h4" component="p">
              {movie.vote_average}
              <StarRateIcon fontSize="medium" />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" component="p" align="center">
              {compact(movie.overview)}
            </Typography>
          </Grid>  
        </Grid>
      </CardContent> 
      <CardActions>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button className={classes.buttonStyle} variant="outlined" size="large" color="secondary" align="right">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}