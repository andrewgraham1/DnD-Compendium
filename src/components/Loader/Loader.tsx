import React, { useState } from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "./Loader.css";
import MainContent from "../PageStructure/MainComponent";

interface type {
  done: boolean;
}

const Loader = () => {
  const [done, setDone] = useState(false);
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => setDone(true));
  }, 1200);

  return (
    <div className="loaderContainer">
      {!done ? (
        <ReactLoading className="loader" type={"bars"} color={"white"} />
      ) : (
        <MainContent />
      )}
    </div>
  );
};

export default Loader;
