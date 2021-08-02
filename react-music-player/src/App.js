import React, { Component } from "react";
import axios from "axios";
import Song from "./Components/Song";
import "./App.css";
import NavBar from './Components/NavBar';
// import SearchBar from "./Components/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      userInput: "",
      songs: [{ title: "", artist: "", genre: "", album: "", releaseDate: "" }],
    };
  }

  // goToNextSong() {
  //   let tempSongNumber = this.state.props;
  //   tempSongNumber++;
  //   if (tempSongNumber === this.Song.length) {
  //     tempSongNumber = 0;
  //   }
  //   this.setState({
  //     songNumber: tempSongNumber,
  //   });
  // }
  // goToPreviousSong() {
  //   let tempSongNumber = this.state.props;
  //   tempSongNumber--;
  //   if (tempSongNumber < 0) {
  //     tempSongNumber = this.Song.length;
  //   }
  //   this.setState({
  //     songNumber: tempSongNumber,
  //   });
  // }

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
      this.setState({
        songs: response.data,
      });
    } catch (err) {
      console.log("Error in API call!", err);
    }
  }

  filterList() {
    const filteredList = this.state.songs.filter(() => {
      if (this.state.userInput === "The Beatles") {
        return(true)
      }
      else {
        return false
      }
    });
    return filteredList
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
    console.log(this.state.userInput);
    console.log(this.filterList());
  }

  render() {
    const userInput = this.state.userInput;
    return (
      <div>
        <NavBar />
        {/* <fieldset>
          <legend>Search by Song:</legend>
          <input value={userInput} onChange={this.handleChange} />
        </fieldset> */}
        {/* <SearchBar /> */}
        <Song songs={this.state.songs} />
        {this.makeGetRequest}
      </div>
    );
  }
}

export default App;
