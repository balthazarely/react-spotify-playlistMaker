import React from "react";
import { Button, Icon } from "semantic-ui-react";

export default function Menu({
  menuOpen,
  getAccessToken,
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
          onClick={() => setSearchPageShowing(true)}
        >
          <Icon name="search" size="big" className="icon-btn" />
          <div className="btn-text">Search Artists</div>
        </div>
        <div
          className="icon-btn-wrapper"
          onClick={() => setSearchPageShowing(false)}
        >
          <Icon name="favorite" size="big" className="icon-btn" />
          <div className="btn-text">Favorite Artists</div>
        </div>
      </div>
    </div>
  );
}
