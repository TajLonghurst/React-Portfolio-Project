import React, { Fragment } from "react";
import AboutMe from "../Components/AboutMe/AboutMe";
import Hero from "../Components/Home/Hero";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <AboutMe />
    </Fragment>
  );
};

export default HomePage;
