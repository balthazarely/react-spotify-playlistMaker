import React, { useState } from "react";
import { Input, Loader } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SliderWindow({
  getTopSongsSimilarArtists,
  sliderWindowOpen,
  setSliderWindowOpen,
  notify,
}) {
  const [playlistName, setPlaylistName] = useState("");

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
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <div className="btn-container">
          <button
            className={"btn success"}
            onClick={() => {
              getTopSongsSimilarArtists(playlistName);
              setSliderWindowOpen(false);
              notify();
            }}
          >
            Make Playlist
          </button>
          <button
            className={"btn cancle"}
            onClick={() => setSliderWindowOpen(false)}
          >
            cancle
          </button>
        </div>
      </div>
      )
    </div>
  );
}

// export default function SearchInput({ searchHandler, searchArtists }) {
//   const handleEnterPress = (e) => {
//     if (e.key === "Enter") {
//       searchArtists(e);
//     }
//   };

//   return (
//     <div className="input-wrapper">
//       <Input
//         className="input-search"
//         placeholder="Search Artist..."
//         size="medium"
//         onChange={(e) => searchHandler(e)}
//         fluid
//         onKeyDown={(e) => handleEnterPress(e)}
//       />
//       {/* Might need button for moible */}
//       {/* <Button onClick={(e) => searchArtists(e)}>Search</Button> */}
//     </div>
//   );
// }
