import React from "react";

import "./InfoBox.css";
import Button from "../Button";

const ChangePage = () => {
  console.log("Change Page");
};

//Create a internal link using Router and create a workable button
//below doesn't work

const InfoBox = () => {
  return (
    <div className="position">
      <a className="link" href="/test">
        <Button onClick={ChangePage}></Button>
      </a>
    </div>
  );
};

export default InfoBox;
