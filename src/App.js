import React, { useState, useEffect } from "react";
import MainConatiner from "./components/MainContainer";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import MyModal from "./components/MyModal";
import MyArtistContainer from "./components/MyArtistContainer";
import Spotify from "./utils/spotify";
import "./styles/app.scss";

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [myDetails, setMyDetails] = useState({});
  const [myFavoriteArtists, setMyFavoriteArtists] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const getAccessToken = (e) => {
    // const results = Spotify.getAccessToken();
    // setAccessToken(results);
    e.preventDefault();
    Spotify.getAccessToken().then((token) => {
      console.log(token);
      setAccessToken(token);
    });
  };

  useEffect(() => {
    // console.log("calling useffect");
    const results = Spotify.getAccessToken();
    setAccessToken(results);

    Spotify.getMyDetails().then((results) => {
      // console.log(results);
      setMyDetails(results);
    });
    Spotify.getUsersTopArtists().then((favArtists) => {
      // console.log(favArtists);
      setMyFavoriteArtists(favArtists);
    });
  }, []);

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
    // Spotify.getMyDetails().then((results) => {
    //   console.log(results);
    //   setMyDetails(results);
    // });
  };

  const [artist, setArtist] = useState([]);
  const [similarArtists, setSimilarArtists] = useState([]);

  const getSimilarArtists = (artistID) => {
    // e.preventDefault();
    setModalOpen(true);
    Spotify.getSimilarArtists(artistID).then((results) => {
      console.log(results);
      setSimilarArtists(results.artists);
    });
  };

  const getTopSongsSimilarArtists = async (playListName) => {
    // e.preventDefault();
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
      let name = playListName;
      let songURI = mapped;
      Spotify.savePlaylist(name, songURI);
    }, 3000);
  };

  const [menuOpen, setMenuOpen] = useState(true);

  // Making playlist time
  const [searchPageShowing, setSearchPageShowing] = useState(false);

  // const loginToSpotfiy = () => {
  //   console.log("trying to get details");
  //   Spotify.getMyDetails().then((results) => {
  //     console.log(results);
  //     setMyDetails(results);
  //   });
  // };

  return (
    <div className="App">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {searchPageShowing ? (
        <>
          <MainConatiner
            menuOpen={menuOpen}
            searchHandler={searchHandler}
            searchArtists={searchArtists}
            searchResults={searchResults}
            getSimilarArtists={getSimilarArtists}
          />

          <MyModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            getTopSongsSimilarArtists={getTopSongsSimilarArtists}
          />
        </>
      ) : (
        <MyArtistContainer
          menuOpen={menuOpen}
          accessToken={accessToken}
          myDetails={myDetails}
          myFavoriteArtists={myFavoriteArtists}
        />
      )}

      <Menu
        menuOpen={menuOpen}
        getAccessToken={getAccessToken}
        setSearchPageShowing={setSearchPageShowing}
      />
    </div>
  );
}

export default App;
