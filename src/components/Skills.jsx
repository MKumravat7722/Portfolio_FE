import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../assets/skill.jpg";
import { getSkills } from "../api/api";

export default function Skills() {

  // ✅ Hard-coded fallback skills
  const [skills, setSkills] = useState([
    { name: "Ruby on Rails", percentage: 90 },
    { name: "ReactJS", percentage: 85 },
    { name: "JavaScript (ES6+)", percentage: 80 },
    { name: "PostgreSQL", percentage: 85 },
    { name: "MySQL", percentage: 80 },
    { name: "HTML5 & CSS3", percentage: 88 },
    { name: "Bootstrap / Tailwind CSS", percentage: 82 },
    { name: "Docker & Kubernetes", percentage: 70 },
    { name: "AWS (EC2, S3, CloudFront)", percentage: 75 },
    { name: "CI/CD with GitHub Actions", percentage: 78 },
    { name: "RSpec / Capybara Testing", percentage: 70 },
    { name: "Agile & Scrum Methodology", percentage: 80 },
  ]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    getSkills()
      .then((res) => {
        // ✅ Override only if API returns valid array
        if (Array.isArray(res?.data) && res.data.length > 0) {
          setSkills(res.data);
        }
      })
      .catch((err) =>
        console.error("Skills API failed, using fallback data", err)
      )
      .finally(() => setTimeout(() => setMounted(true), 100));
  }, []);

  const normalize = (val) => {
    if (val === undefined || val === null) return 0;
    const cleaned = String(val).trim().replace("%", "");
    const n = parseInt(cleaned, 10);
    return Number.isNaN(n) ? 0 : Math.max(0, Math.min(100, n));
  };

  return (
    <section
      id="skills"
      className="py-20 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <style>{`
        .skills-overlay {
          position:absolute; inset:0;
          background: linear-gradient(180deg, rgba(10,12,30,0.75), rgba(10,12,30,0.85));
          z-index:0;
        }
        .skills-container { position:relative; z-index:1; }
        .skill-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.035);
          padding:14px; border-radius:12px;
          transition: transform .18s ease, box-shadow .18s ease;
          box-shadow: 0 8px 18px rgba(2,6,23,0.45);
        }
        .skill-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(2,6,23,0.55);
        }
        .skill-name { font-weight:600; color:#e6eef8; }
        .skill-percent {
          font-weight:600;
          background: rgba(255,255,255,0.03);
          padding:6px 10px;
          border-radius:999px;
          min-width:48px;
          text-align:center;
        }
        .progress-outer {
          height:14px;
          background: rgba(255,255,255,0.03);
          border-radius:999px;
          overflow:hidden;
        }
        .progress-inner {
          height:100%;
          width:0%;
          transition: width 900ms cubic-bezier(.2,.9,.2,1);
          background: linear-gradient(90deg,#06b6d4,#7c3aed,#fb7185);
        }
      `}</style>

      <div className="skills-overlay" />
      <div className="container skills-container">
        <h2 className="text-center display-4 fw-bold mb-5">My Skills</h2>

        <div className="row">
          {skills.map((skill, index) => {
            const pct = normalize(skill.percentage);
            return (
              <div key={index} className="col-md-6 mb-4">
                <div className="skill-card">
                  <div className="d-flex justify-content-between mb-2">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-percent">{pct}%</div>
                  </div>

                  <div className="progress-outer">
                    <div
                      className="progress-inner"
                      style={{
                        width: mounted ? `${pct}%` : "0%",
                        transitionDelay: `${index * 70}ms`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
