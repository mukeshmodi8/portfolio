import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";

const Myresume = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand fw-bold" href="/home">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/portfolio">Home</a>
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

      <section className="bg-light text-center py-5">
        <div className="container">
          <h2 className="fw-bold">Resume</h2>
        </div>
      </section>

      <section className="container my-5">
        <div className="d-flex justify-content-between">
          <h2 className="text-primary">Experience</h2>
          <a href="/resume.pdf" className="btn btn-primary py-3 fw-bold text-capitalize">Download Resume</a>
        </div>

        {["2019 - Present", "2017 - 2019"].map((year, index) => (
          <div className="card shadow mt-5 p-5 border-0" key={index}>
            <div className="row">
              <div className="col-lg-3 col-md-5 bg-light border-0 p-2">
                <h5 className="text-primary">{year}</h5>
                <span className="fw-bold">Web Developer</span>
                <p>Stark Industries, Los Angeles, CA</p>
              </div>
              <div className="col-lg-8 col-md-7 offset-lg-1">
                <p className="py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        ))}

        <h2 className="pt-5">Education</h2>

        {["2015-2017", "2011-2015"].map((year, index) => (
          <div className="card shadow mt-5 p-5 border-0" key={index}>
            <div className="row">
              <div className="col-lg-3 col-md-5 bg-light border-0 p-2">
                <h5>{year}</h5>
                <span className="fw-bold">Barnett College</span>
                <p className="text-muted">Fairfield, NY</p>
                <p className="fst-italic text-muted">Master's Web Development</p>
              </div>
              <div className="col-lg-8 col-md-7 offset-lg-1">
                <p className="py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        ))}

        <h3 className="pt-5">Professional Skills</h3>
        <div className="row">
          {["Statistical Analysis", "SEO/SEM Marketing", "Web Development", "Network Security", "Adobe Software Suite", "UI Design"].map((skill, index) => (
            <div className="col-lg-4 mt-3" key={index}>
              <div className="bg-light rounded-4 p-3 text-center">{skill}</div>
            </div>
          ))}
        </div>

        <h3 className="pt-5">Languages</h3>
        <div className="row">
          {["HTML", "CSS", "JavaScript", "Python", "Ruby", "Node.js"].map((lang, index) => (
            <div className="col-lg-4 mt-3" key={index}>
              <div className="bg-light rounded-4 p-3 text-center">{lang}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-white px-4 mt-5 text-center py-3">
        <p>Copyright © Your Website 2023</p>
        <div>
          <a href="#">Privacy</a> | <a href="#">Terms</a> | <a href="#">Contact</a>
        </div>
      </footer>
    </>
  );
};

export default Myresume;
