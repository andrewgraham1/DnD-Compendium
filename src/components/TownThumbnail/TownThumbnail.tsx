import React from "react";
import { motion } from "framer-motion";

import "./TownThumbnail.css";

//Create a internal link using Router and create a workable button
//below doesn't work

const TownThumbnail = (props: {
  gridRowStart: any;
  gridRowEnd: any;
  gridColumnStart: any;
  gridColumnEnd: any;
}) => {
  const styles = {
    gridRowStart: props.gridRowStart,
    gridRowEnd: props.gridRowEnd,
    gridColumnStart: props.gridColumnStart,
    gridColumnEnd: props.gridColumnEnd
  };

  return (
    <motion.div
      style={styles}
      className="position"
      whileHover={{ scale: 1.7 }}
      whileTap={{
        scale: 0.8,
        rotate: -360
      }}
    >
      <img
        style={styles}
        className="linkResize"
        src="https://i.imgur.com/C8x4jTb.png"
        alt="Link to info about Whiteridge"
      />
      <a className="link" href="/test">
        <link />
      </a>
    </motion.div>
  );
};

export default TownThumbnail;
