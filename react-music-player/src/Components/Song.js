import React from "react";

const Song = (props) => {
  //   return (

  // <div>

  // </div>
   // );

  return (
    <div>
      {props.songs.map((song, index) => (
        // <p>
        //   Hello, {song.title} from {song.album}!
        // </p>
        <div>
              <span> {song.title} </span>
              <span> {song.artist} </span>
              <span> {song.album} </span>
              <span> {song.genre} </span>
              <span> {song.releaseDate} </span>
        </div>
      ))}
    </div>
  );
 
};

// function songButton(props){
//     return(
//         <div className="row row-spacer">
//             <div className="col-md-4">
//                 <button onClick={() => props.previousSong()}>Pevious Song</button>
//             </div>
//             <div className="col-md-4">
//                 <Song book={props.book}/>
//             </div>
//             <div className="col-md-4">
//              <button onClick={() => props.nextSong()}>Next Song</button>
//             </div>
//         </div>
//     )
// }

export default Song;
