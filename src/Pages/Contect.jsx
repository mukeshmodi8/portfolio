import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/home">
            Start Bootstrap
          </a>
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
                <a className="nav-link active" href="/portfolio">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/project">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Form */}
      <div className="text-center bg-light container my-5 p-5">
        <div className="contact">
          <i className="fa-regular fa-envelope text-white"></i>
        </div>
        <h2>Get in touch</h2>
        <p className="text-muted fs-5">Let's work together!</p>
        <div className="row justify-content-center">
          <form className="col-md-6">
            <input
              type="text"
              placeholder="Full Name"
              className="form-control mt-3"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="form-control mt-3"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="form-control mt-3"
            />
            <textarea
              cols="30"
              rows="5"
              placeholder="Message"
              className="form-control mt-3"
            ></textarea>
            <button className="btn btn-primary mt-3 w-100 border-0">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white px-4 mt-5">
        <div className="container d-flex">
          <p>Copyright © Your Website 2023</p>
          <div className="link ms-auto">
            <a href="#">Privacy</a>
            <a href="#">Terms.</a>
            <a href="#">Contact.</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
