import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getProjects } from "../api/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(res => setProjects(res.data)).catch(console.log);
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
