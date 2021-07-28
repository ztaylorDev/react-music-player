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
