import React, { useState } from "react";
import { Input, Loader } from "semantic-ui-react";

export default function SliderWindow({
  getTopSongsSimilarArtists,
  sliderWindowOpen,
  setSliderWindowOpen,
  notify,
}) {
  const [playlistName, setPlaylistName] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      className={`slider-container ${sliderWindowOpen ? "slider-open" : ""}`}
    >
      <div className="controls-before">
        <h2>Please name playlist</h2>
        <Input
          fluid
          placeholder="Playlist name"
          size="medium"
          value={inputValue}
          onChange={(e) => {
            setPlaylistName(e.target.value);
            setInputValue(e.target.value);
          }}
        />
        <div className="btn-container">
          <button
            className={"btn success"}
            onClick={() => {
              getTopSongsSimilarArtists(playlistName);
              setSliderWindowOpen(false);
              setInputValue("");
            }}
          >
            Make Playlist
          </button>
          <button
            className={"btn cancle"}
            onClick={() => {
              setSliderWindowOpen(false);
              setInputValue("");
            }}
          >
            cancel
          </button>
        </div>
      </div>
      )
    </div>
  );
}
