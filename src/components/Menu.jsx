import React, { useState } from "react";
import { Icon } from "semantic-ui-react";

export default function Menu({
  menuOpen,
  setSliderWindowOpen,
  setSliderWindowBottomOpen,
  setSearchPageShowing,
  myDetails,
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
            setSliderWindowBottomOpen(false);
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

          {/* <div className="profile-container">
            {myDetails.display_name ? (
              <>
                <div className="my-profile-photo">
                  <img src={myDetails.images[0].url} />
                </div>
                <div className="my-profile-name">{myDetails.display_name}</div>
               
              </>
            ) : null}
          </div> */}
          {myDetails.display_name ? <div>{myDetails.display_name}</div> : null}
        </div>
      </div>
    </div>
  );
}
