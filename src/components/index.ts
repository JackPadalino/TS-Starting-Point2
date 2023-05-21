import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  // misc components
  Home,
  Login,
  // class components
  SingleClassPage,
  AllClassesPage,
  // teacher components
  SingleTeacherPage,
  AllTeachersPage,
  // coverage components
  CoveragesPage,
  AvailableCoverages,
  // schedule components
  SchedulePage,
  // day component
  SingleDay,
} from ".";

const RouterComponent = () => {
  return (
    <Routes>
      {/* misc routes */}
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />

      {/* class routes */}
      <Route exact path="/classes" element={<AllClassesPage />} />
      <Route exact path="/classes/:id" element={<SingleClassPage />} />

      {/* teacher routes */}
      <Route exact path="/teachers" element={<AllTeachersPage />} />
      <Route exact path="/teachers/:id" element={<SingleTeacherPage />} />

      {/* coverage routes */}
      <Route exact path="/coverages" element={<CoveragesPage />} />
      <Route
        exact
        path="/coverages/:classId/:school/:period/:letterDay"
        element={<AvailableCoverages />}
      />

      {/* schedule routes */}
      <Route exact path="/schedules" element={<SchedulePage />} />
      {/* day routes */}
      <Route exact path="/single-day" element={<SingleDay />} />
    </Routes>
  );
};

export default RouterComponent;
