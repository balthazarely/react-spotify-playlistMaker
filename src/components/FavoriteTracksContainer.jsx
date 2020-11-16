import React from "react";
import FavoriteTracksCard from "./FavoriteTracksCard";

export default function FavoriteTracksContainer({
  myFavoriteTracks,
  getSimilarSongsRecomendations,
  //

  usesTools,
  updateUsesTools,
}) {
  return (
    <div className="favorite-songs-container">
      {myFavoriteTracks &&
        myFavoriteTracks.map((song, index) => {
          return (
            <FavoriteTracksCard
              song={song}
              getSimilarSongsRecomendations={getSimilarSongsRecomendations}
              index={index}
              //

              usesTools={usesTools}
              updateUsesTools={updateUsesTools}
            />
          );
        })}
    </div>
  );
}
