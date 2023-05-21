import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Artists, Albums, Songs } from ".";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/songs" element={<Songs />} />
    </Routes>
  );
};

export default RouterComponent;
