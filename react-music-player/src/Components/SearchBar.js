import React from "react";
import Song from "./Song";

const SearchBar = ({ props, setKeyword }) => {
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };
  return (
      <div>
          {props.songs.filter((song, index) => (
              <span> {song.genre} </span>
          ))}
    <input
      style={BarStyling}
      key="random1"
      value={song.genre}
      placeholder={"search"}
      onChange={(e) => setKeyword(e.target.value)}
    />
    </div>
  );
    
};


export default SearchBar;
