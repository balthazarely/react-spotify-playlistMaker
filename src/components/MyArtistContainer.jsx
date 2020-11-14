import React, { useState } from "react";
import FavoriteArtistContainer from "./FavoriteArtistContainer";
import FavoriteTracksContainer from "./FavoriteTracksContainer";

export default function MyArtistsContainer({
  menuOpen,
  myFavoriteArtists,
  myFavoriteTracks,
  getSimilarArtists,
  myDetails,
}) {
  const [artistsShowing, setArtistShowing] = useState(true);
  console.log(myDetails);

  return (
    <div className={`main-container ${menuOpen ? "" : "no-margin"}`}>
      <div className="container">
        <div className="main-header">Recent Favorites</div>
        <div
          className="main-image-wrapper"
          style={{
            // height: "300px",
            backgroundImage:
              "linear-gradient(to right, rgba(7, 176, 242, 0.3), rgba(7, 176, 242, 0.3)), url('/dj2.jpg')",
            backgroundBlendMode: "darken",
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="btn-wrapper">
          {/* <button className="button-primary">
            Make Playlist with Favorites{" "}
          </button> */}
        </div>
        <div className="selector-words-container flex-horizontal">
          <div
            className={`selector-word ${artistsShowing ? "active" : ""}`}
            onClick={() => setArtistShowing(true)}
          >
            {" "}
            Artists
          </div>
          <div
            className={`selector-word ${artistsShowing ? "" : "active"}`}
            onClick={() => setArtistShowing(false)}
          >
            Songs
          </div>
        </div>
        {artistsShowing ? (
          <FavoriteArtistContainer
            myFavoriteArtists={myFavoriteArtists}
            getSimilarArtists={getSimilarArtists}
          />
        ) : (
          <FavoriteTracksContainer myFavoriteTracks={myFavoriteTracks} />
        )}

        {/* <Tab menu={{ secondary: true, pointing: true }} panes={panes} /> */}
      </div>
    </div>
  );
}
