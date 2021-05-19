import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="d-flex justify-content-start m-4">
          <img src={movie.Poster} alt={movie.Tiltle}></img>
        </div>
      ))}
    </>
  );
};

export default MovieList;
