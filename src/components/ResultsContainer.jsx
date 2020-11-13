import React from "react";
import SingleResult from "./SingleResult";

export default function ResultsContainer({ searchResults }) {
  return (
    <div>
      {searchResults &&
        searchResults.map((artist, i) => {
          return <SingleResult artist={artist} key={artist.id} index={i} />;
        })}
    </div>
  );
}
