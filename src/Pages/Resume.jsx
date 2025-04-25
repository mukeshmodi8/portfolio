import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaMobileAlt,
  FaDatabase,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSass,
} from "react-icons/fa";
// import {  FaCss3Alt } from "react-icons/fa";
import { SiJquery, SiTailwindcss } from "react-icons/si";
import { MdDevices } from "react-icons/md";



const myPhoto = "/mukesh.jpg";

const Resume = () => {
  const skills = [
    { icon: <FaHtml5 color="#e34c26" />, label: "HTML" },
    { icon: <FaCss3Alt color="#1572B6" />, label: "CSS" },
    { icon: <SiTailwindcss color="#38BDF8" />, label: "Tailwind CSS" },
    { icon: <FaBootstrap color="#7952B3" />, label: "Bootstrap" },
    { icon: <SiJquery color="#0769ad" />, label: "jQuery" },
    { icon: <MdDevices color="#00f7ff" />, label: "Media Query" },
    { icon: <MdDevices color="#28a745" />, label: "Responsive Design" },
    { icon: <FaSass color="#cc6699" />, label: "SASS" },
    { icon: <FaJs color="#F0DB4F" />, label: "JavaScript" },
    { icon: <FaReact color="#61DBFB" />, label: "React.js" },
    { icon: <FaDatabase color="#764abc" />, label: "Redux Toolkit" },
    { icon: <FaGitAlt color="#f34f29" />, label: "Git" },
  ];

  const crud = "/crud.png";
  const projects = [
    {
      title: "Portfolio Website",
      imgUrl: "",
      liveLink: "https://your-portfolio-link.com",
      githubLink: "https://github.com/mukeshmodi8/crud-app",
    },
    {
      title: "CRUD App",
      imgUrl: "/crud.png",
      liveLink: "https://crud-app-iota-ivory.vercel.app/",
      githubLink: "https://github.com/yourusername/crud-app",
    },
    {
      title: "Ecomerce Website",
      imgUrl: "/ecommerce.png",
      liveLink: "https://ecomerce-a82i.vercel.app/",
      githubLink: "https://github.com/mukeshmodi8/ecomerce.git",
    },
  ];



  return (
    <>
      <style>{`
        body {
          background-color: #0d1117;
          color: white;
        }

        a, a:hover {
          text-decoration: none;
        }

        .lighting-bg {
          background: linear-gradient(270deg, #3a0ca3, #4361ee, #4cc9f0, #7209b7);
          background-size: 800% 800%;
          animation: lightingMove 10s ease infinite;
          color: white;
          padding: 100px 20px;
          border-radius: 20px;
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.2);
        }

        .glow-text {
          font-size: 3rem;
          font-weight: bold;
          color: #ffffff;
          text-shadow: 0 0 10px #4cc9f0, 0 0 20px #4361ee, 0 0 30px #3a0ca3;
          animation: fadeInUp 3s ease forwards;
          opacity: 0;
        }
       .devloper{
         animation: fadeInUp 2s ease forwards;
        // animation: fadeInLeft 3s ease forwards;
        // opacity: 0;
        }
        .btn-custom {
          background-color: #4cc9f0;
          color: #0d1117;
          font-weight: bold;
          box-shadow: 0 0 15px rgba(76, 201, 240, 0.6);
          transition: all 0.3s ease-in-out;
        }

        .btn-custom:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(76, 201, 240, 0.9);
        }

        .btn-outline-light:hover {
          background-color: white;
          color: #0d1117;
          transform: scale(1.05);
        }

        .navbar,
        footer {
          background-color: #161b22 !important;
        }

        .nav-link {
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #4cc9f0 !important;
        }

        @keyframes lightingMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeInUp {
          0% { transform: translateY(40px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .skills-section {
        animation: fadeInUp 2s ease forwards;
          padding: 60px 0;
        }

        .skill-card {
          background-color: #1f1f2e;
          border-radius: 20px;
          padding: 40px 20px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
          height: 220px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .skill-icon {
          font-size: 4rem;
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .skill-label {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%) translateY(20px);
          opacity: 0;
          transition: all 0.4s ease;
          font-weight: 600;
          font-size: 1.1rem;
          color: #ffffff;
        }

        .skill-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(76, 201, 240, 0.4);
        }
          

        .skill-card:hover .skill-icon {
          transform: scale(1.1);
          filter: drop-shadow(0 0 10px currentColor);
          
        }
          

        .skill-card:hover .skill-label {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
          @keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.bounce-hover:hover {
  animation: bounce 0.6s ease-in-out;
}


        .form-control {
          background-color: #161b22;
          color: white;
          border: 1px solid #4cc9f0;
        }

        .form-control::placeholder {
          color: #888;
        }

        .form-control:focus {
          box-shadow: 0 0 10px #4cc9f0;
        }

        .card {
          background-color: #21262d;
          color: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: scale(1.03);
          box-shadow: 0 0 20px rgba(76, 201, 240, 0.3);
        }

        .image-wrapper {
                animation: fadeInUp 2s ease forwards;

          position: relative;
          width: 300px;
          height: 300px;
          margin: 0 auto;
          border-radius: 50%;
          padding: 10px;
          background: conic-gradient(from 0deg, #ff6ec4, #7873f5, #4cc9f0, #f72585, #ff6ec4);
          box-shadow: 0 0 20px rgba(255, 110, 196, 0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .image-wrapper:hover {
        animation: fadeInUp 2s ease forwards;
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(255, 110, 196, 0.7);
        }

        .image-wrapper img {
        // animation: fadeInUp 10s ease forwards;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .about-img-wrapper {
          width: 100%;
          max-width: 600px;
          height: 600px;
          margin: 0 auto;
          border-radius: 10px;
          padding: 8px;
          background: conic-gradient(from 0deg, #ff6ec4, #7873f5, #4cc9f0, #f72585, #ff6ec4);
          box-shadow: 0 0 15px rgba(255, 110, 196, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: borderSpin 6s linear infinite;
        }

        .about-img-wrapper:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(255, 110, 196, 0.6);
        }

        .about-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }

        @keyframes borderSpin {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        .contact-card {
          background-color: #21262d;
          color: white;
          border: 2px solid #4cc9f0;
          transition: all 0.3s ease;
          box-shadow: 0 0 8px rgba(76, 201, 240, 0.2);
        }

        .contact-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(76, 201, 240, 0.6);
        }
          .resume-section {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #fff;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #00f7ff;
}

.resume-text {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.resume-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.resume-button {
  background: transparent;
  border: 2px solid #00f7ff;
  color: #00f7ff;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px #00f7ff40;
}

.resume-button:hover {
  background: #00f7ff;
  color: #000;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 0 20px #00f7ff, 0 0 40px #00d9ff;
}

/* Responsive Text and Button Padding */
@media (max-width: 600px) {
  .section-title {
    font-size: 1.8rem;
  }

  .resume-button {
    padding: 10px 20px;
    font-size: 0.95rem;
  }
}
 .project-card {
  transition: transform 0.5s, box-shadow 0.5s;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
}

.project-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(138, 43, 226, 0.6);
}

.project-card img {
  transition: transform 0.5s ease-in-out;
  object-fit: cover;
  height: 250px;
}

.project-card:hover img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-title {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 0 10px #a855f7;
}

.project-btn {
  border-radius: 20px;
  padding: 6px 20px;
  font-weight: 500;
  transition: all 0.3s;
}

.project-btn:hover {
  transform: scale(1.1);
}

      `}</style>

      {/* Navbar */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark px-4">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold text-info" href="#">Mukesh Modi</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="home" smooth duration={500}>Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="about" smooth duration={500}>About Me</Link></li>
                <li className="nav-item"><Link className="nav-link" to="resume" smooth duration={500}>Resume</Link></li>
                <li className="nav-item"><Link className="nav-link" to="skills" smooth duration={500}>Skills</Link></li>
                <li className="nav-item"><Link className="nav-link" to="projects" smooth duration={500}>Projects</Link></li>
                <li className="nav-item"><Link className="nav-link" to="contact" smooth duration={500}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Home */}
      <section id="home" className="lighting-bg text-center">
        <div className="image-wrapper mb-4">
          <img src={myPhoto} alt="Mukesh Modi" />
        </div>
        <h1 className="glow-text">Hi, I'm Mukesh Modi</h1>
        <p className="devloper mt-3 fs-4 text-white-50 ">Frontend Developer | React.js | Redux Toolkit</p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <Link to="projects" smooth duration={500} className="btn btn-custom px-4">Projects</Link>
          <Link to="contact" smooth duration={500} className="btn btn-outline-light px-4">Contact</Link>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-5">
        <h2 className="text-center mb-4 text-info">About Me</h2>
        {/* <div className="row align-items-center"> */}
        {/* <div className="col-md-6 text-center"> */}
        <p style={{ fontSize: "1.1rem", lineHeight: "2.2 text-center" }}>
          Hello! I'm <strong>Mukesh Modi</strong>, a dedicated and creative Frontend Developer from <strong>Banaskantha</strong>. I specialize in crafting responsive, modern, and user-friendly web applications using technologies like <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>Redux Toolkit</strong>, <strong>Bootstrap</strong>, <strong>Tailwind CSS</strong>, <strong>SASS</strong>, <strong>jQuery</strong>, and <strong>Media Query</strong>.
          <br /><br />
          I'm currently pursuing Frontend Development at <strong>Red & White Multimedia Education, Ahmedabad</strong>, and I hold a <strong>Bachelor of Arts</strong> degree from <strong>Hemchandracharya North Gujarat University</strong>.
          <br /><br />
          I enjoy transforming ideas into beautiful and interactive websites. Let's build something amazing together!
        </p>
        <div>
          <h1 className="text-center my-5 text-info">My Goal </h1>
        </div>
        <div>
          <p>
            My goal is to become a highly skilled Frontend Developer who can build user-friendly, efficient, and attractive web applications. In the long term, I aim to grow into a Full Stack Developer and contribute to solving real-world problems through technology.
          </p>
        </div>
        {/* </div> */}
        {/* </div> */}
      </section>

      <section id="resume" className="resume-section">
        <h2 className="section-title">Resume</h2>
        <p className="resume-text">You can view or download my resume below:</p>

        <div className="resume-buttons">
          <a
            href="/Blue Simple Professional CV Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            👁️ View Resume
          </a>

          <a
            href="/Blue Simple Professional CV Resume.pdf"
            download
            className="resume-button"
          >
            ⬇️ Download Resume
          </a>
        </div>
      </section>


      {/* Skills */}
      <section id="skills" className="skills-section container">
        <h2 className="text-center text-info mb-5">Skills</h2>
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className="skill-card bounce-hover">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-label">{skill.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Projects */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-light glow-text">🚀 My Projects</h2>
          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="project-card bg-secondary position-relative">
                  {/* <img src={crud} alt="local" /> */}
                  <img src={project.imgUrl} className="w-100" alt={project.title} />
                  <div className="project-overlay d-flex flex-column justify-content-center align-items-center text-center px-3">
                    <div className="project-title mb-3">{project.title}</div>
                    <div className="d-flex gap-3">
                      <a
                        href={project.liveLink}
                        className="btn btn-primary project-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live
                      </a>
                      <a
                        href={project.githubLink}
                        className="btn btn-outline-light project-btn"
                        target="_blank"
                        rel="noreferrer"
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





      {/* Contact */}
      <section id="contact" className="container py-5">
        <h2 className="text-center mb-4 text-info">Contact Me</h2>
        <form className="col-md-8 mx-auto mb-5">
          <input type="text" placeholder="Full Name" className="form-control mb-3" />
          <input type="email" placeholder="Email" className="form-control mb-3" />
          <textarea placeholder="Your Message" rows="4" className="form-control mb-3"></textarea>
          <button className="btn btn-custom w-100">Send Message</button>
        </form>

        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card contact-card p-4 h-100 text-white">
              <FaPhoneAlt size={30} className="mb-3 text-info" />
              <h5>Phone</h5>
              <p><a href="tel:+917698778390" className="text-info text-decoration-none">+91 76987 78390</a></p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card contact-card p-4 h-100 text-white">
              <FaEnvelope size={30} className="mb-3 text-info" />
              <h5>Email</h5>
              <p><a href="mailto:mvmodi41@gmail.com" className="text-info text-decoration-none">mvmodi41@gmail.com</a></p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card contact-card p-4 h-100 text-white">
              <FaMapMarkerAlt size={30} className="mb-3 text-info" />
              <h5>Address</h5>
              <p>Red & White Multimedia, Maninagar, Ahmedabad</p>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="text-center py-3 mt-5">
        <p className="mb-0 text-white-50">© 2025 Copyright | All Rights Reserved</p>
      </footer>

    </>
  );
};

export default Resume;