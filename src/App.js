import React, { useState, useEffect } from "react";
import MainConatiner from "./components/MainContainer";
import Menu from "./components/Menu";
import Nav from "./components/Nav";

import Login from "./components/Login";
import Playlist from "./components/Playlist";
import Spotify from "./utils/spotify";
import "./styles/app.scss";

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [myDetails, setMyDetails] = useState({});

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [artist, setArtist] = useState([]);
  const [similarArtists, setSimilarArtists] = useState([]);

  const getAccessToken = () => {
    const results = Spotify.getAccessToken();
    setAccessToken(results);
  };
  const getDetails = () => {
    const results = Spotify.getMyDetails().then((results) => {
      console.log(results);
    });
    setMyDetails(results);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const searchArtists = (e) => {
    e.preventDefault();
    Spotify.searchArtists(searchTerm).then((results) => {
      setSearchResults(results.artists.items);
      console.log(results.artists.items);
    });
  };

  const selectArtist = (artist) => {
    setArtist(artist);
    console.log(artist);
  };

  const getSimilarArtists = (e) => {
    e.preventDefault();
    Spotify.getSimilarArtists(artist.id).then((results) => {
      console.log(results);
      setSimilarArtists(results.artists);
    });
  };

  const getTopSongsSimilarArtists = async (e) => {
    e.preventDefault();
    let artistSongArray = [];

    await similarArtists.map((artist) => {
      Spotify.getTopSongs(artist.id).then((results) => {
        artistSongArray.push(results);
        console.log(artistSongArray);
      });
    });
    setTimeout(() => {
      let flattened = artistSongArray.flat();
      let mapped = [].concat(...flattened.map(Object.values));
      console.log(mapped, "this is the final array");
      let name = "test Playlist 1";
      let songURI = mapped;
      Spotify.savePlaylist(name, songURI);
    }, 3000);
  };

  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="App">
      {/* <button onClick={getAccessToken}>Login</button>
      <button onClick={getDetails}>getDetails</button>
      <form>
        <input placeholder="search" onChange={(e) => searchHandler(e)}></input>
        <button onClick={searchArtists}>search</button>
        {searchTerm}
      </form>
      <ul>
        {searchResults &&
          searchResults.map((artist) => {
            return (
              <li key={artist.id} onClick={() => selectArtist(artist)}>
                {artist.name} |
              </li>
            );
          })}
      </ul>
      <div style={{ border: "2px solid red" }}>
        {artist.name} | {artist.id}
      </div>
      <button onClick={(e) => getSimilarArtists(e)}>FIND SIMs</button>
      <button onClick={(e) => getTopSongsSimilarArtists(e)}>
        getTopSongsSimilarArtists
      </button>
      <button onClick={() => Spotify.getUsersTopArtists()}>
        User TOP USER DATA
      </button>

      {similarArtists && similarArtists.map((artist) => artist.name)} */}
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MainConatiner
        menuOpen={menuOpen}
        searchHandler={searchHandler}
        searchArtists={searchArtists}
        searchResults={searchResults}
      />
      <Menu menuOpen={menuOpen} />
    </div>
  );
}

export default App;
