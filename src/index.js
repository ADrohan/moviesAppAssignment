import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; 
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import MustWatchPage from './pages/mustWatchPage';
import TopRatedMoviesPage from './pages/topRatedMoviesPage';
import TrendingMoviesPage from './pages/trendingMoviesPage';
import similarMoviesPage from "./pages/similarMoviesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
            {" "}
            <Switch>
              <Route exact path="/reviews/form" component={AddMovieReviewPage} /> 
              <Route exact path="/movies/trending" component={TrendingMoviesPage} />
              <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route exact path="/movies/watch" component={MustWatchPage} />
              <Route exact path="/movies/top-rated" component={TopRatedMoviesPage} />
              <Route path="/similar/:id" component={similarMoviesPage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route exact path="/" component={HomePage} />
              <Redirect from="*" to="/" />
            </Switch>
        </MoviesContextProvider>    
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));