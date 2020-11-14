import React from "react";
import { Label } from "semantic-ui-react";

export default function FavoriteTracksCard({ song }) {
  console.log(song);
  return (
    <div className={"result-container"}>
      <index className="index-wrapper">{/* <div>{index}</div> */}</index>
      <img
        className="image-wrapper"
        src={song.album.images.length > 0 ? song.album.images[1].url : null}
        alt="artist-image"
      />
      <div className="text-wrapper">
        <div className="header">{song.name}</div>
        <div className="artist-small-wrapper">
          {song.artists.map((song, index) => {
            return <span key={index}>{(index ? ", " : "") + song.name}</span>;

            // return <div>{song.name},</div>;
          })}
        </div>
      </div>
      {/* <div className="btn-wrapper">
      <button onClick={() => getSimilarArtists(artist.id)}>
        Make Playlist
      </button>
    </div> */}
    </div>

    // <div>
    //   {song.name}
    //   {song.artists.map((artist) => {
    //     return <div>{artist.name}</div>;
    //   })}
    // </div>
  );
}
