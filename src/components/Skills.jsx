// ...existing code...
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../assets/skill.jpg";
import { getSkills } from "../api/api";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    getSkills()
      .then((res) => setSkills(res.data || []))
      .catch(console.log)
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
        .skill-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(2,6,23,0.55); }
        .skill-row { display:flex; align-items:center; gap:12px; }
        .skill-name { font-weight:600; color:#e6eef8; }
        .skill-percent {
          font-weight:600; color: rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.03); padding:6px 10px; border-radius:999px;
          border: 1px solid rgba(255,255,255,0.03); min-width:48px; text-align:center;
        }
        .progress-outer {
          flex:1; height:14px; background: rgba(255,255,255,0.03);
          border-radius:999px; overflow:hidden; box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
        }
        .progress-inner {
          height:100%; width:0%;
          transition: width 900ms cubic-bezier(.2,.9,.2,1);
          border-radius:999px;
          background: linear-gradient(90deg,#06b6d4 0%, #7c3aed 60%, #fb7185 100%);
          box-shadow: 0 6px 16px rgba(124,58,237,0.12);
        }
        .skill-heading { color: #f1f5f9; text-align:center; margin-bottom:18px; }
        @media (max-width:767px) {
          .skill-percent { min-width:40px; font-size:0.9rem; }
        }
      `}</style>

      <div className="skills-overlay" />
      <div className="container skills-container">
        <h2 className="text-center display-4 fw-bold skill-heading">My Skills</h2>

        <div className="row">
          {skills.length === 0 ? (
            <div className="col-12">
              <div className="skill-card">No skills found.</div>
            </div>
          ) : (
            skills.map((skill, index) => {
              const pct = normalize(skill.percentage);
              return (
                <div key={index} className="col-md-6 mb-4">
                  <div className="skill-card">
                    <div className="mb-2 d-flex justify-content-between align-items-center">
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-percent">{pct}%</div>
                    </div>

                    <div className="skill-row">
                      <div className="progress-outer" aria-hidden>
                        <div
                          className="progress-inner"
                          style={{
                            width: mounted ? `${pct}%` : "0%",
                            transitionDelay: `${index * 70}ms`,
                          }}
                          role="progressbar"
                          aria-valuenow={pct}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
