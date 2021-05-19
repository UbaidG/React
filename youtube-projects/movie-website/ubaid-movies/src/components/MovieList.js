import React from "react";

const MovieList = (props) => {
  const FavComponent = props.favComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-4">
          <img src={movie.Poster} alt={movie.Tiltle}></img>
          <div
            onClick={() => props.handleFavClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
