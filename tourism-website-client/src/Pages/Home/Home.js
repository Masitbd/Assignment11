import React from "react";
import About from "../About/About";
import Consultants from "../Consultants/Consultants";

const Home = () => {
  return (
    <div className="container">
      <h2 className="text-warning ">Tours Package</h2>
      <Consultants></Consultants>
      <About></About>
    </div>
  );
};

export default Home;
