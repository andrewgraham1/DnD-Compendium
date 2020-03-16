import React from "react";

import "./LandingPage.css";
import Footer from "../../components/PageStructure/Footer";
import MainContent from "../../components/PageStructure/MainComponent";
import Navbar from "../../components/PageStructure/Navbar";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <MainContent />
      <Navbar />
      <Footer />
    </div>
  );
};

export default LandingPage;
