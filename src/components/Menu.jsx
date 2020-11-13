import React from "react";

export default function Menu({ menuOpen }) {
  return (
    <div className={`sidemenu ${menuOpen ? "active-menu" : ""}`}>
      this is a menu
    </div>
  );
}
