import React, { useState } from "react";
import { Icon } from "semantic-ui-react";

export default function Menu({
  menuOpen,
  setSliderWindowOpen,
  setSearchPageShowing,
}) {
  const [btnActive, setBtnActive] = useState("favorite");

  return (
    <div className={`sidemenu ${menuOpen ? "active-menu" : ""}`}>
      <div className="button-wrapper">
        <div
          className="icon-btn-wrapper"
          onClick={() => {
            setSearchPageShowing(true);
            setSliderWindowOpen(false);
            setBtnActive("search");
          }}
        >
          <Icon
            name="search"
            size="big"
            className={`icon-btn ${
              btnActive === "search" ? "btn-active-icon" : ""
            }`}
          />
          <div className="btn-text">Search Artists</div>
        </div>
        <div
          className="icon-btn-wrapper"
          onClick={() => {
            setSearchPageShowing(false);
            setSliderWindowOpen(false);
            setBtnActive("favorite");
          }}
        >
          <Icon
            name="favorite"
            size="big"
            className={`icon-btn ${
              btnActive === "favorite" ? "btn-active-icon" : ""
            }`}
          />
          <div className="btn-text">Favorite Artists</div>
        </div>
        <div
          className="icon-btn-wrapper"
          onClick={() => {
            setSearchPageShowing(false);
            setBtnActive("about");
          }}
        >
          <Icon
            name="question"
            size="big"
            className={`icon-btn ${
              btnActive === "about" ? "btn-active-icon" : ""
            }`}
          />
          <div className="btn-text">About</div>
        </div>
      </div>
    </div>
  );
}
