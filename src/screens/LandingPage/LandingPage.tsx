import React from "react";

import "./LandingPage.css";
import Footer from "../../components/PageStructure/Footer";
import MainContent from "../../components/PageStructure/MainComponent";
import Navbar from "../../components/PageStructure/Navbar";
import Loader from "../../components/Loader";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Loader />
      {/*<MainContent />*/}
      <Navbar />
      <Footer />
    </div>
  );
};

export default LandingPage;
