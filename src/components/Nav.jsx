import React from "react";

export default function Nav({ setMenuOpen, menuOpen }) {
  return (
    <nav>
      <div className="nav-wrapper">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          Menu
          {/* <FontAwesomeIcon icon={faMusic} /> */}
        </button>
      </div>
    </nav>
  );
}

// import React from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faMusic } from "@fortawesome/free-solid-svg-icons";

// export default function Nav({ setMenuOpen, menuOpen }) {
//   return (
//     <nav>
//       <div className="nav-wrapper">
//         <button onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? "Menu Open" : "Menu Closed"}
//           {/* <FontAwesomeIcon icon={faMusic} /> */}
//         </button>
//       </div>
//     </nav>
//   );
// }
