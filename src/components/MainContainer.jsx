import React from "react";
import { Image } from "semantic-ui-react";
import Accordian from "./Accordian";
import ResultsContainer from "./ResultsContainer";
import SearchInput from "./SearchInput";

export default function MainContainer({
  menuOpen,
  searchHandler,
  searchArtists,
  searchResults,
}) {
  return (
    <div className={`main-container ${menuOpen ? "" : "no-margin"}`}>
      <div className="container">
        <div className="main-image-wrapper">
          <Image src="dj.jpg" />
        </div>

        <SearchInput
          searchHandler={searchHandler}
          searchArtists={searchArtists}
        />
        <ResultsContainer searchResults={searchResults} />
      </div>
    </div>
  );
}
