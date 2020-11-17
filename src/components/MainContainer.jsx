import React from "react";

import ResultsContainer from "./ResultsContainer";
import SearchInput from "./SearchInput";

export default function MainContainer({
  menuOpen,
  searchHandler,
  searchArtists,
  searchResults,
  getSimilarArtists,
}) {
  return (
    <div className={`main-container ${menuOpen ? "" : "no-margin"}`}>
      <div className="container">
        <div className="main-header">Search Artist </div>

        <div
          className="main-image-wrapper"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7, 176, 242, 0.3), rgba(7, 176, 242, 0.3)), url('/dj2.jpg')",
            backgroundBlendMode: "multiply",
            backgroundPosition: "top",

            backgroundSize: "cover",
          }}
        ></div>
        <SearchInput
          searchHandler={searchHandler}
          searchArtists={searchArtists}
        />
        <ResultsContainer
          searchResults={searchResults}
          getSimilarArtists={getSimilarArtists}
        />
      </div>
    </div>
  );
}
