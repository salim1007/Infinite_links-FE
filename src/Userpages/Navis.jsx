import React from "react";
import {  Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboarder";
import Candidates from "./Candidates";
import Procedures from "./Procedures";
import Vote from "./Vote";
import Progress from "./Progress";
import Results from "./Results";
import Remarks from "./Remarks";
import About from "./About";


const Navis = () => {
  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path="/user-dash" element={<Dashboard />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/v-results" element={<Results />} />
          <Route path="/remarks" element={<Remarks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Sidebar>
    </div>
  );
};

export default Navis;
