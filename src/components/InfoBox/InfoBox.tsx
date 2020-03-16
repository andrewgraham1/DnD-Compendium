import React from "react";
import { motion } from "framer-motion";

import "./InfoBox.css";

//Create a internal link using Router and create a workable button
//below doesn't work

const InfoBox = () => {
  return (
    <motion.div
      className="position"
      whileHover={{ scale: 1.7 }}
      whileTap={{
        scale: 0.8,
        rotate: -360
      }}
    >
      <img
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

export default InfoBox;
