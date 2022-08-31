import React, { Fragment } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutMePage from "./Pages/AboutMePage";
import ResumePage from "./Pages/ResumePage";
import ProjectPage from "./Pages/ProjectPage";
import FormPage from "./Pages/FormPage";
import NavBar from "./Components/Nav/NavBar";
import { AnimatePresence } from "framer-motion";
import { ModalMobileProject } from "./Components/Modals/MobileProjects/ModalMobileProject";
import NotificationsIndex from "./Components/Modals/Notifications/NotificationsIndex";
import Mouse from "./Components/UI/Cursor/Mouse";
import useWindowSize from "./Hooks/use-windowSize";

function App() {
  const location = useLocation();
  const { isTabletView } = useWindowSize();

  return (
    <Fragment>
      {!isTabletView && <Mouse />}
      <NavBar />
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<HomePage />}>
            <Route path="/Home/Linkedin" element={<HomePage />} />
            <Route path="/Home/Github" element={<HomePage />} />
          </Route>
          <Route path="/AboutMe" element={<AboutMePage />} />
          <Route path="/Resume" element={<ResumePage />} />
          <Route path="/Projects" element={<ProjectPage />}></Route>
          <Route
            path="MobileProject/:projectID"
            element={<ModalMobileProject />}
          />
          <Route path="/Contact" element={<FormPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
      <NotificationsIndex />
    </Fragment>
  );
}

export default App;
