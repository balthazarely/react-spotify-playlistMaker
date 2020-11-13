import React from "react";
import { Button, Icon } from "semantic-ui-react";

export default function Menu({
  menuOpen,
  getAccessToken,
  setSliderWindowOpen,
  setSearchPageShowing,
}) {
  return (
    <div className={`sidemenu ${menuOpen ? "active-menu" : ""}`}>
      <div className="button-wrapper">
        {/* <button className="button-primary" onClick={(e) => getAccessToken(e)}>
          Login
        </button> */}
        <div
          className="icon-btn-wrapper"
          onClick={() => {
            setSearchPageShowing(true);
            setSliderWindowOpen(false);
          }}
        >
          <Icon name="search" size="big" className="icon-btn" />
          <div className="btn-text">Search Artists</div>
        </div>
        <div
          className="icon-btn-wrapper"
          onClick={() => {
            setSearchPageShowing(false);
            setSliderWindowOpen(false);
          }}
        >
          <Icon name="favorite" size="big" className="icon-btn" />
          <div className="btn-text">Favorite Artists</div>
        </div>
        <div
          className="icon-btn-wrapper"
          onClick={() => setSearchPageShowing(false)}
        >
          <Icon name="question" size="big" className="icon-btn" />
          <div className="btn-text">About</div>
        </div>
      </div>
    </div>
  );
}
