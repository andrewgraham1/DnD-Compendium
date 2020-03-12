import React from "react";

import "./TestPage.css";
import Footer from "../../components/PageStructure/Footer";
import MainContent from "../../components/PageStructure/MainComponent";
import Navbar from "../../components/PageStructure/Navbar";

const TestPage = () => {
  return (
    <div className="testPage">
      <MainContent />
      <Navbar />
      <Footer />
    </div>
  );
};

export default TestPage;
