import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Artists, Albums, Songs } from ".";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/albums" element={<Albums />} />
    </Routes>
  );
};

export default RouterComponent;
