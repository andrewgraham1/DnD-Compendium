import * as React from "react";

import "./EncyclopediaHome.css";
import KingdomsThumbnail from "./../../images/Kingdoms_thumbnail.jpg";

const EncyclopediaHome = () => {
  return (
    <div className="encyclopedianContainer">
      <div className="Kingdoms">
        <img
          className="KingdomThumbnail"
          src={KingdomsThumbnail}
          alt="Thumbnail of the kingdoms button"
        />
      </div>
      <div className="Settlements" />
      <div className="Characters" />
      <div className="Items" />
      <div className="Goods" />
    </div>
  );
};

export default EncyclopediaHome;
