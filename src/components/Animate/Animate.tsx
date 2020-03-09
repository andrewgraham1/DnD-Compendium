import * as React from "react";
import { useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import "./Animate.css";

// let width = "Total Width: " + screen.width;

const Animate = () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const constraintsRef = useRef(null);

  // https://reactjs.org/docs/hooks-intro.html
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const [dragConstraintWidth, setDragConstraintWidth] = useState(0);
  const [dragConstraintHeight, setDragConstraintHeight] = useState(0);
  const [leftConstraint, setLeftConstraint] = useState(0);
  const [topConstraint, setTopConstraint] = useState(0);

  useLayoutEffect(() => {
    console.log(
      "I do stuff when the window refreshes, width = " +
        windowWidth +
        " height = " +
        windowHeight
    );
    window.onresize = function() {
      console.log(window.innerWidth);
      console.log(window.innerHeight);
    };
    setTopConstraint((1413 - windowHeight) * -1 - 100);
    setLeftConstraint((2000 - windowWidth) * -1);
    setDragConstraintWidth((2000 - windowWidth) * 2 + windowWidth);
    setDragConstraintHeight((1413 - windowHeight) * 2 + windowHeight + 200);

    console.log("width of constraint box = " + dragConstraintWidth);
    console.log("height of constraint box = " + dragConstraintHeight);
  }, [
    setLeftConstraint,
    dragConstraintWidth,
    dragConstraintHeight,
    windowHeight,
    windowWidth,
    setTopConstraint
  ]);

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
          height: dragConstraintHeight
        }}
      >
        <motion.div
          className="picture-motion"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            y: dragConstraintHeight / 2 - 707,
            x: dragConstraintWidth / 2 - 1000
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          drag
          dragElastic={0.1}
          dragConstraints={constraintsRef}
        >
          <img
            className="picture-area"
            src="https://i.imgur.com/D7poN81.jpg"
            alt="A map of the kingdom of Craetho"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Animate;
