import React from "react";

const Song = (props) => {
  return (
        
        <div>
            <h1>{props.songs[0].title}</h1>
            <p>{props.songs[0].artist}</p>
            <p>{props.songs[0].album}</p>
            <p>{props.songs[0].genre}</p>
            <p>{props.songs[0].releaseDate}</p>
        </div>
    );    
};

export default Song;
