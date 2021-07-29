import React, { Component } from "react";
import axios from "axios";
import Song from "./Components/Song";
import "./App.css";
//import NavBar from './Navbar';
import SearchBar from "./Components/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [{ title: "", artist: "", genre: "", album: "", releaseDate: "" }],
    };
  }

  goToNextSong() {
    let tempSongNumber = this.state.props;
    tempSongNumber++;
    if (tempSongNumber === this.Song.length) {
      tempSongNumber = 0;
    }
    this.setState({
      songNumber: tempSongNumber,
    });
  }
  goToPreviousSong() {
    let tempSongNumber = this.state.props;
    tempSongNumber--;
    if (tempSongNumber < 0) {
      tempSongNumber = this.Song.length;
    }
    this.setState({
      songNumber: tempSongNumber,
    });
  }

  componentDidMount() {
    console.log("i mounted");
    this.makeGetRequest();
    console.log("i requested");
  }

  async makeGetRequest() {
    try {
      let response = await axios.get(
        "http://www.devcodecampmusiclibrary.com/api/music/"
      );
      console.log(response.data);
      this.setState( 
          { 
              songs: response.data 
            }
          );
    } catch (err) {
      console.log("Error in API call!", err);
    }
  }

  render() {
    return (
      <div>
        {/* <SearchBar /> */}
        <Song songs={this.state.songs} />
        {/* <Song songs={this.songs[this.state.songNumber]} nextSong={() => this.goToNextSong()}  */}
        {/* previousSong={() => this.goToPreviousSong()}/>  */}
        <button onClick={this.makeGetRequest}>Previous track</button>
        <button className="nextbutton">Next Track</button>
      </div>
    );
  }
}

export default App;
