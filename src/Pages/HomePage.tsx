import React, { Fragment } from "react";
import Hero from "../Components/Home/Hero";

// import AboutMe from "../Components/AboutMe/AboutMe";
// import Resume from "../Components/Resume/Resume";
// import Projects from "../Components/Projects/Projects";
// import Form from "../Components/ContactMe/Form";

// const Hero = React.lazy(() => import("../Components/Home/Hero"));
// const AboutMe = React.lazy(() => import("../Components/AboutMe/AboutMe"));
// const Resume = React.lazy(() => import("../Components/Resume/Resume"));
// const Projects = React.lazy(() => import("../Components/Projects/Projects"));
// const Form = React.lazy(() => import("../Components/ContactMe/Form"));

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
    </Fragment>
  );
};

export default HomePage;
