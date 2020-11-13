import React from "react";

import ResultsContainer from "./ResultsContainer";
import SearchInput from "./SearchInput";

export default function myArtistsContainer({ menuOpen }) {
  return (
    <div className={`main-container ${menuOpen ? "" : "no-margin"}`}>
      <div className="container">
        <div className="main-header" style={{ top: "330px" }}>
          Most Played Artists{" "}
        </div>
        <div
          className="main-image-wrapper"
          style={{
            height: "300px",
            backgroundImage:
              "linear-gradient(to right, rgba(7, 176, 242, 0.3), rgba(7, 176, 242, 0.3)), url('/dj.jpg')",
            backgroundBlendMode: "multiply",
            // backgroundImage: "url(/dj.jpg)",
            backgroundPosition: "top",
            // backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* <Image src="dj.jpg" /> */}
        </div>
      </div>
    </div>
  );
}
