import React, { Fragment } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/Nav/NavBar";
import { ModalMobileProject } from "./Components/Modals/ModalMobileProject";

function App() {
  const location = useLocation();
  return (
    <Fragment>
      <NavBar />
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
    </Fragment>
  );
}

export default App;
