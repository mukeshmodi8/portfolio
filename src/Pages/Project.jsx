import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Project = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand fw-bold" href="/">Start Bootstrap</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="/portfolio">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/resume">Resume</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="container text-center project">
        <h2 className="fw-bold">Projects</h2>
      </div>

      <div className="container">
        {[1, 2].map((_, index) => (
          <div className="card shadow mt-5 p-4 border-0" key={index}>
            <div className="row">
              <div className="col-lg-8 col-md-7 card border-0 p-2">
                <h3>Project Name {index + 1}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat
                  esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo
                  itaque! Ipsam!
                </p>
              </div>
              <div className="col-lg-3 col-md-5 offset-lg-1 project-img">
                <img
                  src={index === 0 ? "/images/smiling-young-male.jpg" : "/images/prof.jpg"}
                  alt="Project"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="built my-5 text-center bg-dark text-white py-5">
        <h2 className="display-4 fw-bold">Let's build something together</h2>
        <a href="#" className="btn btn-outline-light fw-bold">Contact Me</a>
      </div>

      <footer className="bg-white px-4 mt-auto">
        <div className="container d-flex justify-content-between">
          <p>Copyright © Your Website 2023</p>
          <div className="link">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Project;
