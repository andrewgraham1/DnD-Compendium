import React from "react";

import "./LandingPage.css";
import Footer from "../../components/PageStructure/Footer";
import Navbar from "../../components/PageStructure/Navbar";
import MainContent from "../../components/PageStructure/MainComponent";
import EncyclopediaHome from "../../components/EncyclopediaHome";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <MainContent />
      <Navbar />
      {/*<EncyclopediaHome />*/}
      <Footer />
    </div>
  );
};

export default LandingPage;
