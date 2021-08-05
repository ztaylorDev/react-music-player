import React from "react";
import logo from '../Components/rubber soul album pic.jpeg';

const Song = (props) => {
  return (
    <div>
      {props.songs.map((song, index) => (
        // <p>
        //   Hello, {song.title} from {song.album}!
        // </p>
        <div>
              <img src={logo} style={{paddingLeft:'411px'}} alt="Logo" />
              <div style={{paddingBottom:'30px', paddingLeft:'20px'}} />
              <h2 style={{textAlign:'center', paddingLeft:'20px'}}>Song:</h2>
              <h4 style={{textAlign: 'center',color:'darkgreen', paddingLeft:'20px'}}> {song.title} </h4>
              <br></br>
              <h2 style={{textAlign:'center', paddingLeft:'20px'}}>Artist:</h2>
              <h4 style={{textAlign: 'center',color:'darkgreen', paddingLeft:'20px'}}> {song.artist} </h4>
              <br></br>
              <h2 style={{textAlign:'center', paddingLeft:'20px'}}>Album:</h2>
              <h4 style={{textAlign: 'center',color:'darkgreen', paddingLeft:'20px'}}> {song.album} </h4>
              <br></br>
              <h2 style={{textAlign:'center', paddingLeft:'20px'}}>Genre:</h2>
              <h4 style={{textAlign: 'center',color:'darkgreen', paddingLeft:'20px'}}> {song.genre} </h4>
              <br></br>
              <h2 style={{textAlign:'center', paddingLeft:'20px'}}>Release Date:</h2>
              <h4 style={{textAlign: 'center',color:'darkgreen', paddingLeft:'20px'}}> {song.releaseDate} </h4>
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
