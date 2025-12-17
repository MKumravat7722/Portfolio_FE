import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getProjects } from "../api/api";

export default function Projects() {

  const [projects, setProjects] = useState([
    {
      title: "Business Payment & Transaction Platform",
      description:
        "Developed and maintained a full-stack payment solution enabling users to send, receive, and manage transactions securely. Implemented two-factor authentication, Twilio SMS alerts, and real-time updates using Pusher.",
      techStack: [
        "Ruby on Rails",
        "ReactJS",
        "PostgreSQL",
        "Twilio",
        "Pusher",
        "Active Storage",
        "AASM",
      ],
      liveUrl: "https://example.com/payment-platform",
      githubUrl: "https://github.com/MKumravat7722/payment-platform",
    },
    {
      title: "Continuous Integration & Deployment Automation",
      description:
        "Built CI/CD pipelines using GitHub Actions and Docker with automated testing and deployments on AWS and Heroku.",
      techStack: [
        "RSpec",
        "Capybara",
        "Docker",
        "GitHub Actions",
        "Heroku",
        "AWS EC2",
      ],
      liveUrl: "https://example.com/ci-cd-pipeline",
      githubUrl: "https://github.com/MKumravat7722/ci-cd-pipeline",
    },
    {
      title: "Pet Care Management Platform",
      description:
        "Built backend APIs for a two-sided pet care marketplace with Stripe payments and admin analytics dashboard.",
      techStack: [
        "Ruby on Rails",
        "PostgreSQL",
        "Stripe",
        "Devise",
        "ReactJS",
        "Chart.js",
      ],
      liveUrl: "https://example.com/pet-platform",
      githubUrl: "https://github.com/MKumravat7722/pet-services",
    },
    {
      title: "Learning & Assessment Portal",
      description:
        "Developed a learning platform with course management, assessments, certificates, and ActiveAdmin dashboard.",
      techStack: [
        "Ruby on Rails",
        "ActiveAdmin",
        "PostgreSQL",
        "JavaScript",
        "HTML/CSS",
      ],
      liveUrl: "https://example.com/learning-platform",
      githubUrl: "https://github.com/MKumravat7722/learning-platform",
    },
    {
      title: "Portfolio & Profile Management App",
      description:
        "Built a personal portfolio app with Rails backend, React frontend, and responsive UI using Bootstrap & Tailwind.",
      techStack: [
        "Ruby on Rails",
        "ReactJS",
        "Active Storage",
        "Bootstrap",
        "Tailwind CSS",
      ],
      liveUrl: "https://example.com/portfolio",
      githubUrl: "https://github.com/MKumravat7722/portfolio",
    },
  ]);

  useEffect(() => {
    getProjects()
      .then((res) => {
        if (Array.isArray(res?.data) && res.data.length > 0) {
          // ✅ Normalize API response to match frontend keys
          const normalized = res.data.map((p) => ({
            title: p.title,
            description: p.description,
            techStack: Array.isArray(p.tech_stack)
              ? p.tech_stack
              : JSON.parse(p.tech_stack || "[]"),
            liveUrl: p.live_url,
            githubUrl: p.github_url,
            image_url: p.image_url,
            year: p.year,
          }));

          setProjects(normalized);
        }
      })
      .catch((err) =>
        console.error("Projects API failed, using fallback data", err)
      );
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
      `}</style>

      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5">My Projects</h2>

        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card project-card h-100 p-4 rounded-4">
                {project.image_url && (
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="project-thumb"
                  />
                )}

                <h4 className="fw-bold">{project.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.9)" }}>
                  {project.description}
                </p>

                <div>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="d-flex gap-2 mt-3">
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
