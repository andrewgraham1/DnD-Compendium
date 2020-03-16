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
      whileHover={{ scale: 1.7 }}
      whileTap={{
        scale: 0.8,
        rotate: -360
      }}
    >
      <img className="linkResize" src={source} alt={alt} />
      <a className="link" href={link}>
        <link />
      </a>
    </motion.div>
  );
};

export default TownThumbnail;
