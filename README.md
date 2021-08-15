# Assignment - ReactJS app.

Name: Aileen Drohan

## Overview.

The app concept is to expand upon the Movies App - an app for movie lovers - created using the TMBD database.

 New/modified features:
 
 + Must Watch page (renders tagged upcoming movies in Must Watch Page)
 + movieCard2 (new UI design)
 + templateMoviesListPage2 (new UIdesign)
 + filterMoviesCard2 (new UI design)
 + util.js (compact function added to truncate character length to 200)
 + templateMoviePage (production companies and cast added)
 + templateMoviePage (breakpoint down integration with grid)
 + Top rated movies Page (utilising new UI design)
 + Trending Movies Page (utilising new UI design)

## Setup requirements.

To run this app A TMDb user account is required. You must create an account and request an API key. 
https://developers.themoviedb.org/3/getting-started/introduction

Your API key should be kept secret.
Create a .env file to separate your secrets from your source code. Required in this .env file is:
REACT_APP_TMDB_KEY='your api key'
FAST_REFRESH=false

Don't forget to nclude your .env file in your .gitignore (before pushing to your own repository to keep your api key a secret)

Run npm install (from the app base folder)
Run npm start
Run npm run storybook (if relevant)

## API Data Model.

https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=credits

![][append]

https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1

![][toprated]

https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1

![][trending]

## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your component catalogue. [For the Movies app, hi-light stories relating to new/modified components - see the example screenshot below] .......

![][stories]

### UI Design.

![][mustwatch]
>Shows the tagged must watch movies as selected in the upcoming movies page.

![][topratedmovies]
>Top Rated movies page.

![][trendingmovies]
>Trending movies page.


### Routing.

+ GET /movie/{movie_id}   - with append_to_response support for credits
+ GET /trending/{media_type}/{time_window}  - media_type used = movie, time_window used = day
+ GET /movie/top_rated - gets top rated movies

## Independent learning

Styling
Use of linear gradient, styled with hook api for more info button
https://material-ui.com/styles/basics/

Hidden
Breakpoint down iteration with grid
https://material-ui.com/components/hidden/


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png
[append]: ./AppendToResponse.jpg
[trending]: ./TrendingEndpoint.png
[toprated]: ./TopRatedEndpoint.png
[mustwatch]: ./MustWatchMovies.png
[topratedmovies]: ./TopRatedMovies.png
[trendingmovies]: ./TrendingMovies.png
[responsive]: ./responsivebreakpoint.jpg