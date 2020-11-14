import React from "react";
import FavoriteTracksCard from "./FavoriteTracksCard";

export default function FavoriteTracksContainer({ myFavoriteTracks }) {
  return (
    <div>
      {myFavoriteTracks &&
        myFavoriteTracks.map((song) => {
          return <FavoriteTracksCard song={song} />;
        })}
    </div>
  );
}
