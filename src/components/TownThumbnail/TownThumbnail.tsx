import React from "react";
import { motion } from "framer-motion";

import "./TownThumbnail.css";

interface Props {
  townName: string;
  gridRowStart: string;
  gridRowEnd: string;
  gridColumnStart: string;
  gridColumnEnd: string;
  source: string;
  link: string;
  alt: string;
}

const TownThumbnail: React.FC<Props> = ({
  townName,
  gridRowStart,
  gridRowEnd,
  gridColumnStart,
  gridColumnEnd,
  source,
  link,
  alt
}) => {
  const Styles = {
    gridRowStart: gridRowStart,
    gridRowEnd: gridRowEnd,
    gridColumnStart: gridColumnStart,
    gridColumnEnd: gridColumnEnd
  };

  return (
    <motion.div
      style={Styles}
      className="position"
      whileHover={{ scale: 1.7, zIndex: 100 }}
      whileTap={{
        scale: 0.8
      }}
    >
      <a className="link" href={link}>
        <img className="linkResize" src={source} alt={alt} />
        <link />
      </a>
    </motion.div>
  );
};

export default TownThumbnail;
