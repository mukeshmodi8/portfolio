import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Ecomerce Website - Alakh Fashion",
      imgUrl: "/alakh fashion.jpg",
      liveLink: "https://alakh-fashion.vercel.app/",
      githubLink: "https://github.com/mukeshmodi8/alakh-fashion",
    },
    {
      title: "Expense Tracker",
      imgUrl: "/Expense Tracker.png",
      liveLink: "https://expense-tracker-pearl-tau-59.vercel.app/",
      githubLink: "https://github.com/mukeshmodi8/crud-app",
    },
    {
      title: "Blog Website",
      imgUrl: "/blog.png",
      liveLink: "https://happyblogg.com/",
      githubLink: "https://github.com/mukeshmodi8/crud-app",
    },
    {
      title: "CRUD App",
      imgUrl: "/crud.png",
      liveLink: "https://crud-app-iota-ivory.vercel.app/",
      githubLink: "https://github.com/mukeshmodi8/crud-app",
    },
    {
      title: "Ecomerce Website",
      imgUrl: "/ecommerce.png",
      liveLink: "https://ecomerce-a82i.vercel.app/",
      githubLink: "https://github.com/mukeshmodi8/ecomerce.git",
    },
  ];

  return (
    <section className="bg-dark text-white py-5 min-vh-100">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">🚀 All Projects</h2>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card bg-secondary h-100">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="card-body text-center">
                  <h5 className="card-title">{project.title}</h5>

                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-info btn-sm"
                    >
                      Live
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light btn-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
