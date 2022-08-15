import React, { Fragment } from "react";
// import { AnimatePresence } from "framer-motion";
import Hero from "../Components/Home/Hero";
// import AboutMe from "../Components/AboutMe/AboutMe";
// import Resume from "../Components/Resume/Resume";
// import Projects from "../Components/Projects/Projects";
// import Form from "../Components/ContactMe/Form";
// import PageLoading from "../Components/LazyLoading/PageLoading";

// const Hero = React.lazy(() => import("../Components/Home/Hero"));
// const AboutMe = React.lazy(() => import("../Components/AboutMe/AboutMe"));
// const Resume = React.lazy(() => import("../Components/Resume/Resume"));
// const Projects = React.lazy(() => import("../Components/Projects/Projects"));
// const Form = React.lazy(() => import("../Components/ContactMe/Form"));

const HomePage = () => {
  // const [isAnimated, setIsAnimated] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => setIsAnimated(false), 2000);
  //   setIsAnimated(true);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <Fragment>
      {/* <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isAnimated && <PageLoading />}
      </AnimatePresence> */}
      <Hero />
      {/* <AboutMe />
      <Resume />
      <Projects />
      <Form /> */}
    </Fragment>
  );
};

export default HomePage;
