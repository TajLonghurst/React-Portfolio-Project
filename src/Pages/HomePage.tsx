import React, { Fragment } from "react";
// import AboutMe from "../Components/AboutMe/AboutMe";
import Hero from "../Components/Home/Hero";
import Projects from "../Components/Projects/Projects";
import Resume from "../Components/Resume/Resume";
import { Outlet } from "react-router-dom";
import Form from "../Components/ContactMe/Form";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      {/* <AboutMe /> */}
      <Resume />
      <Projects />
      <Outlet />
      <Form />
    </Fragment>
  );
};

export default HomePage;
