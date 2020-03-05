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
      "I do stuff when the window width changes, width = " +
        windowWidth +
        " height = " +
        windowHeight
    );
    setTopConstraint((1413 - windowHeight) * -1 - 100);
    setLeftConstraint((2000 - windowWidth) * -1);
    setDragConstraintWidth((2000 - windowWidth) * 2 + windowWidth);
    setDragConstraintHeight((1413 - windowHeight) * 2 + windowHeight + 200);
    console.log("width = " + dragConstraintWidth);
    console.log("height = " + dragConstraintHeight);
  }, [
    setLeftConstraint,
    dragConstraintWidth,
    dragConstraintHeight,
    windowHeight,
    windowWidth,
    setTopConstraint
  ]);

  return (
    <div className="example-container">
      <motion.div
        className="drag-area"
        ref={constraintsRef}
        style={{
          width: dragConstraintWidth,
          height: dragConstraintHeight,
          left: leftConstraint,
          top: topConstraint
        }}
      />
      <motion.div
        className="picture-motion"
        drag
        dragConstraints={constraintsRef}
      >
        <img
          className="picture-area"
          src="https://i.imgur.com/D7poN81.jpg"
          alt="A map of the kingdom of Craetho"
        />
      </motion.div>
    </div>
  );
};

export default Animate;
