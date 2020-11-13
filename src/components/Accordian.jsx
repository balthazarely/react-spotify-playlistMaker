// import React, { useState } from "react";

// export default function Accordian({ artist }) {
//   const [setActive, setActiveState] = useState(false);
//   //   const [setHeight, setHeightState] = useState("0px");

//   console.log(artist);
//   const toggleAccordion = () => {
//     // setActiveState(setActive === "" ? "active" : "");
//     // setHeightState(
//     //   setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
//     // );
//   };

//   return (
//     // <div className="accordion__section">
//     //   <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
//     //     {/* <p className="accordion__title">{artist.name}</p> */}
//     //   </button>
//     //   <div className="accordion__content">
//     //     {/* <div className="accordion__content">{artist.name}</div> */}
//     //   </div>
//     // </div>
//     <div>{artist.name}</div>
//   );
// }
import React, { useState } from "react";

export default function Accordian(props) {
  const [setActive, setActiveState] = useState(false);

  const toggleAccordion = () => {
    console.log("toggle away");
    setActiveState(!setActive);
    // setActiveState(setActive === "" ? "active" : "");
    // setHeightState(
    //   setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    // );
  };

  return (
    <div className="accordion__section">
      <button className={`accordion`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.artist.name}</p>
      </button>
      <div
        className={`accordion__content ${setActive ? "accordion_active" : ""}`}
      >
        <div className="">{props.artist.name}</div>
      </div>
    </div>
  );
}
