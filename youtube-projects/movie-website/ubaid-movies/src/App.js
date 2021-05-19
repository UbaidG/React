import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFav from "./components/AddFav";
import RemoveFav from "./components/RemoveFav";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [fav, setFav] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=28c258db`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFav = JSON.parse(localStorage.getItem("react-movie-app-fav"));
    setFav(movieFav);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-fav", JSON.stringify(items));
  };
  const addFavMovie = (movie) => {
    const newFavList = [...fav, movie];
    setFav(newFavList);
    saveToLocalStorage(newFavList);
  };

  const removeFavMovie = (movie) => {
    const newFavList = fav.filter((fav) => fav.imdbID !== movie.imdbID);
    setFav(newFavList);
    saveToLocalStorage(newFavList);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleFavClick={addFavMovie}
          favComponent={AddFav}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="row">
        <MovieList
          movies={fav}
          handleFavClick={removeFavMovie}
          favComponent={RemoveFav}
        />
      </div>
    </div>
  );
};

export default App;
