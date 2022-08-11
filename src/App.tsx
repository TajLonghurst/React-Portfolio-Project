import React, { Fragment } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/Nav/NavBar";
import { ModalMobileProject } from "./Components/Modals/MobileProjects/ModalMobileProject";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <Fragment>
      <NavBar />
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<HomePage />}>
            <Route
              path="/MobileProject/:projectID"
              element={<ModalMobileProject />}
            />
          </Route>
          <Route path="/AboutMe" element={<HomePage />} />
          <Route path="/Resume" element={<HomePage />} />
          <Route path="/Projects" element={<HomePage />} />
          <Route path="/Contact" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </Fragment>
  );
}

export default App;
