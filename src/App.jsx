import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Project from "./Pages/Project";
import Contact from "./Pages/Contect";
import Resume from "./Pages/Resume";


const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Resume/>} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;