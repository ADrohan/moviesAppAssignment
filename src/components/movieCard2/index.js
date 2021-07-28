import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png';
import { compact } from "../../util";


const useStyles = makeStyles({
  card: { 
    maxWidth: 300,
    backgroundColor: "rgb(30, 30, 30)",
    color: "rgb(200, 200, 200)",
  },
  media: { height: 420},
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
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

export default function MovieCard(props) {
  const classes = useStyles();
  const movie = props.movie;
  return (
    <Card className={classes.card}  >
      
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
        <IconButton aria-label="add to favorites" onClick={null}>
          <FavoriteBorderIcon color="secondary" fontSize="large" />
        </IconButton>
        <Button className={classes.buttonStyle} variant="outlined" size="large" color="secondary" align="right">
          More Info ...
        </Button>
      </CardActions>
    </Card>
  );
}