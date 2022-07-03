import React, { Fragment } from "react";
import AboutMe from "../Components/AboutMe/AboutMe";
import Hero from "../Components/Home/Hero";
import Projects from "../Components/Projects/Projects";
import Resume from "../Components/Resume/Resume";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <AboutMe />
      <Resume />
      <Projects />
    </Fragment>
  );
};

export default HomePage;
