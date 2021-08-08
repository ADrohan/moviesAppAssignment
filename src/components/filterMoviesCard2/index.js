import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    backgroundColor: "rgb(30, 30, 30)",
    color: "rgb(220, 220, 200)",
  },
  media: { height: 420},

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(220, 220, 220)",
  },
  searchIcon: { 
    color: "rgb(210, 210, 0)",
  },
}));

export default function FilterMoviesCard2(props) {
  const classes = useStyles();

  const genres = [
    {id: 1, name: "Animation"},
    {id: 2, name: "Comedy"},
    {id: 3, name: "Thriller"}
  ]

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon className={classes.searchIcon} fontSize="large" />
          Search the movies.
        </Typography>
         <TextField
        className={classes.formControl}
        id="input-with-icon-textfield"
        label="Search by Title"
        type="search"
        variant="filled"
        color="secondary"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          ),
        }}
      />
        <FormControl className={classes.formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={img}
      />
    </Card>
  );
}