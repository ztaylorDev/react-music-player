import React, { Component } from "react";
import axios from "axios";
import Song from "./Components/Song";
import "./App.css";
import NavBar from './Components/NavBar';
// import Artists from "./Components/Artists";
// import SearchBar from "./Components/SearchBar";


class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      userInput: "",
      songs: [{ title: "", artist: "", genre: "", album: "", releaseDate: "" }],
      // testCollection: [
      //   {id: 1, name: "Picasso"},
      //   {id: 2, name: "Van Gogh"},
      //   {id: 3, name: "Pollock"},
      //   {id: 4, name: "Michaelangelo"},
      //   {id: 5, name: "Da Vinci"}
      // ],
    };
  }

  componentDidMount() {
    console.log("i mounted");
    this.makeGetRequest();
    console.log("i requested");
  }

  async makeGetRequest() {
    try {
      let response = await axios.get(
        "http://localhost:9000/api/songs/"
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
      if (this.state.userInput === "artists") {
        return (true)
      }
      if (this.state.userInput === "songs") {
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
    console.log(e.target.value);
  }

  render() {
    const userInput = this.state.userInput;
    return (
      <div>
        <NavBar style={{position:'static'}}></NavBar> 
        {/* <ul> filter method USE THIS!
          {this.state.testCollection.filter((artist) => artist.name[0] === "P").map((artist) => <li key={artist.id}> {artist.name} </li>)}
        </ul> */}
        <fieldset style={{fontFamily:'verdana', paddingLeft:'20px', paddingBottom:'20px'}}>
          <legend>Search by Song:</legend>
          <input value={userInput} onChange={this.handleChange} />
        </fieldset>
        <h1 style={{position:'sticky', padding:'30px'}}>My Library:</h1>
        <Song songs={this.state.songs} />
        {this.makeGetRequest}
      </div>
    );
  }
}

export default App;


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