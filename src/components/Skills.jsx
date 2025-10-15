import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../assets/skill.jpg";
import { getSkills } from "../api/api";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {

    getSkills().then(res => setSkills(res.data)).catch(console.log);
  }, []);

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
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(26, 26, 46, 0.8)",
          zIndex: 0,
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <h2 className="text-center display-4 fw-bold mb-5">My Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="mb-2 d-flex justify-content-between">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="progress" style={{ height: "20px" }}>
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: `${skill.percentage}%` }}
                  aria-valuenow={skill.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
