import React from "react";
import "./InfoBox.css";

const InfoBox = () => {
  let test = "inherit";
  return (
    <p
      className="test"
      onClick={() => {
        console.log("click");
        test = "none";
      }}
      style={{ display: test }}
    >
      This is the InfoBox
    </p>
  );
};

export default InfoBox;
