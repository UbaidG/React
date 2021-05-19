import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        value={props.value}
        className="form-control"
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type the movie name..."
      ></input>
    </div>
  );
};

export default SearchBox;
