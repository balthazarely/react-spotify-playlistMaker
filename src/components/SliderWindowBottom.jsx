import React, { useState } from "react";
import { Input, Loader } from "semantic-ui-react";

export default function SliderWindowBottom({
  sliderWindowBottomOpen,
  setSliderWindowBottomOpen,
  makePlaylistFromSong,
  notify,
}) {
  const [playlistName, setPlaylistName] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      className={`slider-container ${
        sliderWindowBottomOpen ? "slider-open" : ""
      }`}
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
              makePlaylistFromSong(playlistName);
              setSliderWindowBottomOpen(false);
              setInputValue("");
            }}
          >
            Make Playlist
          </button>
          <button
            className={"btn cancle"}
            onClick={() => {
              setSliderWindowBottomOpen(false);
              setInputValue("");
            }}
          >
            cancle
          </button>
        </div>
      </div>
      )
    </div>
  );
}
