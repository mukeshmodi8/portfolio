import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Resume from "./Pages/Resume";
import Project from "./Pages/Project";
import ProjectsPage from "./Pages/ProjectsPage";
import Contact from "./Pages/Contect";
import Loading from "./Pages/Loading";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> 
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/resume" element={<Resume />} />

          {/* Projects */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
