import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./Animate.css";
import TownThumbnail from "../TownThumbnail";
import Craetho from "./../../images/Craetho_Without_Towns.png";
import Cethel from "./../../images/Cethel_finished.png";
import Daggerfirth from "./../../images/Daggerfirth_finished.png";
import Dragonia from "./../../images/Dragonia_finished.png";
import Dulfadir from "./../../images/Dulfadir_finished.png";
import FortFrink from "./../../images/FortFrink_finished.png";
import Kigdarim from "./../../images/Kigdarim_finished.png";
import Lundy from "./../../images/Lundy_finished.png";
import Onlandorei from "./../../images/Onlandorei_finished.png";
import Whiteridge from "./../../images/Whiteridge_finished.png";
import Yellowseed from "./../../images/Yellowseed_finished.png";
import Addogh from "./../../images/Addogh_finished.png";
import Garaldur from "./../../images/Garaldur_finished.png";

const Animate = () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const constraintsRef = useRef(null);

  const [dragConstraintWidth, setDragConstraintWidth] = useState(0);
  const [dragConstraintHeight, setDragConstraintHeight] = useState(0);
  const [leftConstraint, setLeftConstraint] = useState(0);
  const [topConstraint, setTopConstraint] = useState(0);
  const [resize, SetResize] = useState(0);
  let [scale, SetScale] = useState(1);

  useEffect(() => {
    SetScale((scale = 1));
    console.log(scale);
    //Sets the constraint box based on the browser size
    setTopConstraint((scale * 1413 - window.innerHeight) * -1 - 100);
    setLeftConstraint((scale * 2000 - window.innerWidth) * -1);
    setDragConstraintWidth(
      (scale * 2000 - window.innerWidth) * 2 + window.innerWidth
    );
    setDragConstraintHeight(
      (scale * 1413 - window.innerHeight) * 2 + window.innerHeight + 200
    );
    window.onresize = function () {
      SetResize(window.innerHeight + window.innerWidth);
    };
  }, [dragConstraintHeight, dragConstraintWidth, resize, scale]);

  return (
    <div
      className="example-container"
      style={{ height: windowHeight, width: windowWidth }}
    >
      <motion.div
        className="drag-area"
        ref={constraintsRef}
        style={{
          left: leftConstraint,
          top: topConstraint,
          width: dragConstraintWidth,
          height: dragConstraintHeight,
        }}
      >
        <motion.div
          className="picture-motion"
          initial={{ scale: 0 }}
          animate={{
            scale: scale,
            y: dragConstraintHeight / 2 - 707,
            x: dragConstraintWidth / 2 - 1000,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          drag
          dragElastic={0.1}
          dragConstraints={constraintsRef}
        >
          <img
            className="picture-area"
            src={Craetho}
            alt="A map of the kingdom of Craetho"
          />
          <TownThumbnail
            townName="Whiteridge"
            gridRowStart="25"
            gridRowEnd="29"
            gridColumnStart="-17"
            gridColumnEnd="-12"
            source={Whiteridge}
            link="/Whiteridge"
            alt="Link to info about Whiteridge"
          />
          <TownThumbnail
            townName="Addogh"
            gridRowStart="31"
            gridRowEnd="33"
            gridColumnStart="-28"
            gridColumnEnd="-26"
            source={Addogh}
            link="/Addogh"
            alt="Link to info about Addogh"
          />
          <TownThumbnail
            townName="Yellowseed"
            gridRowStart="25"
            gridRowEnd="29"
            gridColumnStart="-25"
            gridColumnEnd="-22"
            source={Yellowseed}
            link="/Yellowseed"
            alt="Link to info about Yellowseed"
          />
          <TownThumbnail
            townName="Kigdarim"
            gridRowStart="24"
            gridRowEnd="27"
            gridColumnStart="-29"
            gridColumnEnd="-25"
            source={Kigdarim}
            link="/Kigdarim"
            alt="Link to info about Kigdarim"
          />
          <TownThumbnail
            townName="Lundy"
            gridRowStart="30"
            gridRowEnd="32"
            gridColumnStart="-9"
            gridColumnEnd="-7"
            source={Lundy}
            link="/Lundy"
            alt="Link to info about Lundy"
          />
          <TownThumbnail
            townName="FortFrink"
            gridRowStart="21"
            gridRowEnd="26"
            gridColumnStart="-35"
            gridColumnEnd="-33"
            source={FortFrink}
            link="/FortFrink"
            alt="Link to info about FortFrink"
          />
          <TownThumbnail
            townName="Dulfadir"
            gridRowStart="20"
            gridRowEnd="22"
            gridColumnStart="-5"
            gridColumnEnd="-3"
            source={Dulfadir}
            link="/Dulfadir"
            alt="Link to info about Dulfadir"
          />
          <TownThumbnail
            townName="Garaldur"
            gridRowStart="14"
            gridRowEnd="15"
            gridColumnStart="25"
            gridColumnEnd="29"
            source={Garaldur}
            link="/Garaldur"
            alt="Link to info about Garaldur"
          />
          <TownThumbnail
            townName="Cethel"
            gridRowStart="12"
            gridRowEnd="14"
            gridColumnStart="30"
            gridColumnEnd="32"
            source={Cethel}
            link="/Cethel"
            alt="Link to info about Cethel"
          />
          <TownThumbnail
            townName="Onlandorei"
            gridRowStart="10"
            gridRowEnd="13"
            gridColumnStart="9"
            gridColumnEnd="13"
            source={Onlandorei}
            link="/Onlandorei"
            alt="Link to info about Onlandorei"
          />
          <TownThumbnail
            townName="Daggerfirth"
            gridRowStart="5"
            gridRowEnd="7"
            gridColumnStart="21"
            gridColumnEnd="26"
            source={Daggerfirth}
            link="/Daggerfirth"
            alt="Link to info about Daggerfirth"
          />
          <TownThumbnail
            townName="Dragonia"
            gridRowStart="6"
            gridRowEnd="8"
            gridColumnStart="28"
            gridColumnEnd="31"
            source={Dragonia}
            link="/Dragonia"
            alt="Link to info about Dragonia"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Animate;
