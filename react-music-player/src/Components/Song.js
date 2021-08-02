import React from "react";

const Song = (props) => {
  return (
    <div>
      {props.songs.map((song, index) => (
        // <p>
        //   Hello, {song.title} from {song.album}!
        // </p>
        <div>
              <h2 style={{textAlign:'left'}}>Song:</h2>
              <div src="" /> 
              <h2 style={{color:'darkgreen'}}> {song.title} </h2>
              <h2 style={{textAlign:'left'}}>Artist:</h2>
              <h4 style={{color:'darkgreen'}}> {song.artist} </h4>
              <h2 style={{textAlign:'left'}}>Album:</h2>
              <span style={{color:'darkgreen'}}> {song.album} </span>
              <h2 style={{textAlign:'left'}}>Genre:</h2>
              <span style={{color:'darkgreen'}}> {song.genre} </span>
              <h2 style={{textAlign:'left'}}>Release Date:</h2>
              <span style={{color:'darkgreen'}}> {song.releaseDate} </span>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
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
