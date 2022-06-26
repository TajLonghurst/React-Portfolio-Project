import React, { Fragment } from "react";
import AboutMe from "../Components/AboutMe/AboutMe";
import Hero from "../Components/Home/Hero";
import Resume from "../Components/Resume/Resume";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <AboutMe />
      <Resume />
    </Fragment>
  );
};

export default HomePage;
