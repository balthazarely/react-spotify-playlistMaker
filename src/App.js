import React, { useState, useEffect } from "react";
import MainConatiner from "./components/MainContainer";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import SliderWindow from "./components/SliderWindow";
import SliderWindowBottom from "./components/SliderWindowBottom";
import MyArtistContainer from "./components/MyArtistContainer";
import Spotify from "./utils/spotify";
import shuffle from "./utils/helpers";

// Martin127792
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/app.scss";

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [myDetails, setMyDetails] = useState({});

  // User infomation
  const [myFavoriteArtists, setMyFavoriteArtists] = useState([]);
  const [myFavoriteTracks, setMyFavoriteTracks] = useState([]);
  // Search hanlers
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // Apperance
  const [menuOpen, setMenuOpen] = useState(true);
  const [sliderWindowOpen, setSliderWindowOpen] = useState(false);
  const [sliderWindowBottomOpen, setSliderWindowBottomOpen] = useState(false);
  const [showPlaylistBtnSongs, setShowPlaylistBtnSongs] = useState(true);

  // THis is my shit version of a tab that i made.
  const [searchPageShowing, setSearchPageShowing] = useState(false);

  const getAccessToken = (e) => {
    console.log("its going");
    const results = Spotify.getAccessToken();
    setAccessToken(results);
  };

  // On Mount, initialize app
  useEffect(() => {
    const results = Spotify.getAccessToken();
    setAccessToken(results);

    Spotify.getMyDetails().then((results) => {
      console.log(results);
      setMyDetails(results);
    });
    Spotify.getUsersTopArtists().then((favArtists) => {
      setMyFavoriteArtists(favArtists);
    });
    Spotify.getUsersTopTracks().then((favTracks) => {
      setMyFavoriteTracks(favTracks);
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
  };

  // Playlist Making hooks
  const [similarArtists, setSimilarArtists] = useState([]);
  // FROM THE SEED
  const [
    similarArtistsTrackSeedReco,
    setSimilarArtistsTrackSeedReco,
  ] = useState([]);

  const getSimilarArtists = (artistID) => {
    setSliderWindowOpen(true);
    Spotify.getSimilarArtists(artistID).then((results) => {
      console.log(results);
      setSimilarArtists(results.artists);
    });
  };

  const getTopSongsSimilarArtists = async (playListName) => {
    if (similarArtists.length === 0) {
      console.log("sorry, noe enoguth related artists");
      notifyError();
      return;
    } else {
      let artistSongArray = [];
      await similarArtists.map((artist) => {
        Spotify.getTopSongs(artist.id).then((results) => {
          artistSongArray.push(results);
        });
      });
      setTimeout(() => {
        let flattened = artistSongArray.flat();
        let mapped = [].concat(...flattened.map(Object.values));
        // console.log(mapped, "this is the final array");
        let name = playListName;
        let songURI = shuffle(mapped);
        Spotify.savePlaylist(name, songURI);
      }, 2000);
      notify();
    }
  };

  const [usesTools, setUsesTools] = useState([]);
  const updateUsesTools = (item) => {
    if (usesTools.includes(item)) {
      setUsesTools(usesTools.filter((tool) => tool != item));
    } else {
      setUsesTools([...usesTools, item]); // or push
    }
  };

  // Need to add the condition to NOT make a platlist like above if there isnt enought data

  const makePlaylistFromSong = async (playlistname) => {
    let array = [];
    await usesTools.map((item) => {
      Spotify.makePlaylistFromArtistAndSong(item).then((result) => {
        result.tracks.map((item) => {
          console.log(item.uri);
          array.push(item.uri);
        });
      });
    });
    setTimeout(() => {
      if (array.length === 0) {
        notifyError();
        return;
      } else {
        let name = playlistname;
        let songURI = shuffle(array);
        Spotify.savePlaylist(name, songURI);
      }
    }, 2000);
    notify();
  };

  const notify = () =>
    toast.info("Playlist Created!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyError = () =>
    toast.error("Not enough similar artists", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

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
          <SliderWindow
            sliderWindowOpen={sliderWindowOpen}
            setSliderWindowOpen={setSliderWindowOpen}
            getTopSongsSimilarArtists={getTopSongsSimilarArtists}
            notify={notify}
          />

          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      ) : (
        <>
          <MyArtistContainer
            menuOpen={menuOpen}
            accessToken={accessToken}
            myFavoriteArtists={myFavoriteArtists}
            myFavoriteTracks={myFavoriteTracks}
            getSimilarArtists={getSimilarArtists}
            showPlaylistBtnSongs={showPlaylistBtnSongs}
            usesTools={usesTools}
            updateUsesTools={updateUsesTools}
            makePlaylistFromSong={makePlaylistFromSong}
            setSliderWindowBottomOpen={setSliderWindowBottomOpen}
            setSliderWindowOpen={setSliderWindowOpen}
          />
          <SliderWindow
            sliderWindowOpen={sliderWindowOpen}
            setSliderWindowOpen={setSliderWindowOpen}
            getTopSongsSimilarArtists={getTopSongsSimilarArtists}
            notify={notify}
          />
          <SliderWindowBottom
            sliderWindowBottomOpen={sliderWindowBottomOpen}
            setSliderWindowBottomOpen={setSliderWindowBottomOpen}
            makePlaylistFromSong={makePlaylistFromSong}
            notify={notify}
          />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      )}
      <Menu
        setSliderWindowOpen={setSliderWindowOpen}
        menuOpen={menuOpen}
        getAccessToken={getAccessToken}
        setSearchPageShowing={setSearchPageShowing}
        setSliderWindowBottomOpen={setSliderWindowBottomOpen}
        myDetails={myDetails}
      />
    </div>
  );
}

export default App;
