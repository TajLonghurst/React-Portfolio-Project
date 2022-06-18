import React, { Fragment } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/Nav/NavBar";

function App() {
  const location = useLocation();
  return (
    <Fragment>
      <NavBar />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<HomePage />}>
          <Route path="/AboutMe" element={<HomePage />} />
          <Route path="/Resume" element={<HomePage />} />
          <Route path="/Projects" element={<HomePage />} />
          <Route path="/Contact" element={<HomePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
