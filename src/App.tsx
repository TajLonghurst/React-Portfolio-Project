import React, { Fragment } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  const location = useLocation();
  return (
    <Fragment>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
