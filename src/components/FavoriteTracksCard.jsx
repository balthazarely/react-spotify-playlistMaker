import React, { useState } from "react";
import { Label, Checkbox } from "semantic-ui-react";

export default function FavoriteTracksCard({
  song,
  index,
  getSimilarSongsRecomendations,
  usesTools,
  updateUsesTools,
}) {
  const checkHandler = (e) => {
    const tools = usesTools; //Array in parent component
    const value = e.target.value; //Checkbox value
    updateUsesTools(value);
  };
  return (
    <div className={"result-container"}>
      <index className="index-wrapper">
        <div>{index + 1}</div>
      </index>
      <img
        className="image-wrapper"
        src={song.album.images.length > 0 ? song.album.images[1].url : null}
        alt="artist-image"
      />
      <div className="text-wrapper">
        <div className="header">{song.name}</div>
        <div className="artist-small-wrapper">
          {song.artists.slice(0, 6).map((song, index) => {
            return <span key={index}>{(index ? ", " : "") + song.name}</span>;
          })}
        </div>
      </div>
      {/* <div className="btn-wrapper"> */}
      <div class="checkbox-wrapper">
        <input
          type="checkbox"
          id="test1"
          className="checkmark"
          label="Add"
          value={song.id}
          onChange={(e) => checkHandler(e)}
        />

        {/* <button
          onClick={() =>
            getSimilarSongsRecomendations(song.artists[0].id, song.id)
          }
        >
          Make Playlist
        </button> */}
      </div>{" "}
      {/* </div> */}
    </div>
  );
}
