import React from "react";
import { Button, Icon, Dropdown, Menu } from "semantic-ui-react";

export default function SingleResult({ artist, index }) {
  return (
    <div className={`result-container`}>
      <index className="index-wrapper">
        <div>{index}</div>
      </index>
      <img
        className="image-wrapper"
        src={artist.images.length > 0 ? artist.images[1].url : null}
        alt="artist-image"
      />
      <div className="text-wrapper">
        <div className="image-text">{artist.name}</div>
        <div className="icon-wrapper">
          {/* <Icon className="image-icon" name="ellipsis vertical" /> */}
          <button>Make Playlist</button>
        </div>
      </div>
    </div>
  );
}
