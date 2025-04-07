import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Project from "./Pages/Project";
import Contact from "./Pages/Contect";
import Resume from "./Pages/Resume";
import Loading from "./Pages/Loading";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
