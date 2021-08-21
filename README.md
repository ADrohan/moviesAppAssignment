# Assignment - ReactJS app.

Name: Aileen Drohan

## Overview.
The app concept: This is an app for movie lovers, to help users decide if they would like to see a movie. 
The app now hosts two movie card designs and two filter card designs for users to search by movie title or genre. Tagged movies in the upcoming movies page will render in a mustwatch page for user to keep track of movies they would like to see, with delete funtionality to remove movies already watched from this page. Added to the The movie details page is a new link to view similar movies to the current movie in view. Movie information additionally returns the cast information and production companies on a particular movie. Users may also request to see the top rated movies and trending movies.
The application makes requests to TMDB API for movie data
https://www.themoviedb.org/



 New/modified features:
 
 + Must Watch page (renders tagged upcoming movies in Must Watch Page)
 + movieCard2 (new UI design)
 + templateMoviesListPage2 (new UI design)
 + filterMoviesCard2 (new UI design)
 + util.js (compact function added to truncate character length to 200, for use in new movie card)
 + Movie Details Component (production companies added, cast added and Similar Movies floating action button)
 + templateMoviePage (breakpoint down integration with grid)
 + Top rated movies Page (utilising new UI design)
 + Trending Movies Page (utilising new UI design)
 + Similar Movies Page (utilising new UI design) 

## Setup requirements.

To run this app A TMDb user account is required. You must create an account and request an API key. 
https://developers.themoviedb.org/3/getting-started/introduction

Your API key should be kept secret.
Create a .env file to separate your secrets from your source code. Required in this .env file is:
REACT_APP_TMDB_KEY='your api key'
FAST_REFRESH=false

Don't forget to include your .env file in your .gitignore (before pushing to your own repository to keep your api key a secret)

Run npm install (from the app base folder)
Run npm start
Run npm run storybook (if relevant)

## API Data Model.
### Get a specific movie by id with credits appended to response
https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=credits
>Example of JSON data returned:
![][append]

### Get Top Rated Movies
https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1
>Example of JSON data returned:
![][toprated]

### Get Trending Movies
https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1
>Example of JSON data returned:
![][trending]

### Get Similar Movies to the id specified
https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
>Example of JSON data returned:
![][similar]

## App Design.

### Component catalogue.

Screenshot from the Storybook UI showing my component catalogue. The hi-light stories relating to new/modified components

![][mystories]

### UI Design.

![][mustwatch]
>Shows the tagged must watch movies as selected in the upcoming movies page.

![][topratedmovies]
>Top Rated movies page.

![][trendingmovies]
>Trending movies page.

![][similarfab]
> Clicking the 'Similar Movies' floating action button will display a page of similar movies to the movie currently in view.

![][similarmovies]
>Similar movies page rendered after clicking on the'Similar Movies' floating action button.

![][responsive]
>Responsive breakpoint down with grid list


### Routing.

+ GET /movie/{movie_id}   - with append_to_response support for credits
+ GET /trending/{media_type}/{time_window}  - media_type used = movie, time_window used = day
+ GET /movie/top_rated - gets top rated movies
+ GET /movie/{movie_id}/similiar - gets similar movies to the movie id specified


## Independent learning

### Styling
Use of linear gradient, styled with hook api for more info button
https://material-ui.com/styles/basics/

### Hidden
Breakpoint down iteration with grid
https://material-ui.com/components/hidden/


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png
[append]: ./AppendToResponse.jpg
[trending]: ./TrendingEndpoint.png
[toprated]: ./TopRatedEndpoint.png
[similar]: ./similarMoviesEndpoint.png
[mustwatch]: ./MustWatchMovies.png
[topratedmovies]: ./TopRatedMovies.png
[trendingmovies]: ./TrendingMovies.png
[similarmovies]: ./SimilarMoviesPage.png
[similarfab]: ./SimilarFab.png
[responsive]: ./responsivebreakpoint.jpg
[mystories]: ./mystories.png