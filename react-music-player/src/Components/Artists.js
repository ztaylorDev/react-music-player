import React from 'react';
import App from '../App';


class Artists extends App {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      songs: [{ title: "", artist: "", genre: "", album: "", releaseDate: "" }],
    };
  }

  Artists(props) {
    this.setState({songs: [artist]})
  return (
    <div> 
    {props.artists}
    {this.makeGetRequest}
    </div>
   );
  }
}

export default Artists