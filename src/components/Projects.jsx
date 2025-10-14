import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Dummy data for now
const dummyProjects = [
  {
    title: "InstaClone",
    description: "A full-stack social media application built with React and Ruby on Rails.",
    techStack: ["React", "Rails", "PostgreSQL", "Bootstrap"],
    liveUrl: "#", // Replace with actual URL later
    githubUrl: "#",
  },
  {
    title: "E-Commerce App",
    description: "Online shopping platform with product catalog, cart, and checkout system.",
    techStack: ["React", "Rails", "Stripe API", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website to showcase projects and skills.",
    techStack: ["React", "Bootstrap", "Vite", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website to showcase projects and skills.",
    techStack: ["React", "Bootstrap", "Vite", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProjects(dummyProjects);
    }, 500);

    // Replace with API call when backend is ready
    // getProjects().then(res => setProjects(res.data)).catch(console.log);
  }, []);

  return (
    <section id="projects" className="py-20 bg-dark text-white">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card bg-secondary text-white h-100 p-4 shadow-lg rounded-4">
                <h4 className="fw-bold">{project.title}</h4>
                <p>{project.description}</p>
                <p>
                  <strong className="text-info">Tech Stack:</strong>{" "}
                  {project.techStack.join(", ")}
                </p>
                <div className="d-flex justify-content-between mt-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-info btn-sm"
                    >
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light btn-sm"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
