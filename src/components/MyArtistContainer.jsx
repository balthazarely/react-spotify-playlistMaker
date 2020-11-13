import React, { useEffect, useState } from "react";
import FavoriteArtistContainer from "./FavoriteArtistContainer";
import { Tab, Dimmer, Loader, Image } from "semantic-ui-react";

export default function MyArtistsContainer({
  menuOpen,
  accessToken,
  myDetails,
  myFavoriteArtists,
}) {
  const [isLoggedIn, setIsLoggedIn] = useState("");

  const panes = [
    {
      menuItem: "Favorite Artists",
      render: () => (
        <Tab.Pane attached={false}>
          <FavoriteArtistContainer myFavoriteArtists={myFavoriteArtists} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Favorites Songs",
      render: () => <Tab.Pane attached={false}> </Tab.Pane>,
    },
  ];

  return (
    <div className={`main-container ${menuOpen ? "" : "no-margin"}`}>
      <div className="container">
        <div
          className="main-header"
          //  style={{ top: "330px" }}
        >
          Most Played Artists
        </div>

        <div
          className="main-image-wrapper"
          style={{
            // height: "300px",
            backgroundImage:
              "linear-gradient(to right, rgba(7, 176, 242, 0.3), rgba(7, 176, 242, 0.3)), url('/dj.jpg')",
            backgroundBlendMode: "multiply",
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="btn-wrapper">
          {/* <button className="button-primary">
            Make Playlist with Favorites{" "}
          </button> */}
        </div>
        <FavoriteArtistContainer myFavoriteArtists={myFavoriteArtists} />

        {/* <Tab menu={{ secondary: true, pointing: true }} panes={panes} /> */}
      </div>
    </div>
  );
}
