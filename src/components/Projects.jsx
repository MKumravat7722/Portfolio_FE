// ...existing code...
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
      <style>{`
        .project-card {
          background: linear-gradient(135deg,#06b6d4 0%, #7c3aed 100%);
          border: none;
          color: #fff;
          transition: transform .18s ease, box-shadow .18s ease;
          box-shadow: 0 8px 30px rgba(0,0,0,0.45);
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 50px rgba(0,0,0,0.6);
        }
        .project-thumb {
          width:100%;
          height:140px;
          object-fit:cover;
          border-radius:8px;
          margin-bottom:12px;
          box-shadow: 0 8px 30px rgba(2,6,23,0.45);
        }
        .tech-badge {
          display:inline-block;
          margin:4px 6px 4px 0;
          padding:6px 10px;
          font-size:0.8rem;
          border-radius:999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .project-actions a { margin-right:8px; }
      `}</style>

      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card project-card text-white h-100 p-4 shadow-lg rounded-4">
                {project.image_url && (
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="project-thumb"
                  />
                )}
                <h4 className="fw-bold">{project.title}</h4>
                <p className="mb-2" style={{ color: "rgba(255,255,255,0.9)" }}>{project.description}</p>

                <div className="mb-2">
                  {project.techStack?.length ? (
                    project.techStack.map((t, i) => (
                      <span key={i} className="tech-badge">{t}</span>
                    ))
                  ) : (
                    <span className="tech-badge">No tech listed</span>
                  )}
                </div>

                <div className="d-flex justify-content-between mt-3 project-actions">
                  <div>
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
                  <small style={{ color: "rgba(255,255,255,0.75)" }}>{project.year || ""}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}