import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "./Loader.css";

interface Props {
  done: boolean;
}

const Loader: React.FC<Props> = ({ done }) => {
  console.log("loader");
  return (
    <div className="loaderContainer">
      <ReactLoading className="loader" type={"bars"} color={"white"} />
    </div>
  );
};

export default Loader;
