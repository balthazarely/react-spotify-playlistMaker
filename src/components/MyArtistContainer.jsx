import React, { useEffect, useState } from "react";
import FavoriteArtistContainer from "./FavoriteArtistContainer";

export default function MyArtistsContainer({
  menuOpen,
  accessToken,
  myDetails,
  myFavoriteArtists,
}) {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  //   const [accessToken, setAccessToken] = useState("");

  const loginToSpotify = () => {
    // const results = Spotify.getAccessToken();
    // setAccessToken(results);
    // console.log("welcome");
    // Spotify.getUsersTopArtists();
  };

  //   useEffect(() => {
  //     const results = Spotify.getAccessToken();
  //     setAccessToken(results);
  //   }, []);

  return (
    <div className={`main-container ${menuOpen ? "" : "no-margin"}`}>
      <div className="container">
        <div
          className="main-header"
          //  style={{ top: "330px" }}
        >
          Most Played Artists{" "}
        </div>
        <div
          className="main-image-wrapper"
          style={{
            // height: "300px",
            backgroundImage:
              "linear-gradient(to right, rgba(7, 176, 242, 0.3), rgba(7, 176, 242, 0.3)), url('/dj.jpg')",
            backgroundBlendMode: "multiply",
            // backgroundImage: "url(/dj.jpg)",
            backgroundPosition: "top",
            // backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="btn-wrapper">
          {/* <button className="button-primary" onClick={loginToSpotify}>
            Login to see Favorites
          </button> */}
        </div>
        <FavoriteArtistContainer myFavoriteArtists={myFavoriteArtists} />
        {/* {accessToken} */}
      </div>
    </div>
  );
}
