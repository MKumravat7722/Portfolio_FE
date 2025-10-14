import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import eduBg from "../assets/education.jpg"; // background image

// Dummy education data
const dummyEducation = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Swami Vivekanand College of Engineering, Indore",
    year: "2019 - 2023",
    grade: "CGPA: 7.22",
  },
  {
    degree: "High School – PCM",
    institution: "Saraswati Vidya Mandir, Pipalrawan",
    year: "2017 - 2019",
    grade: "Percentage: 85%",
  },
];

export default function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setEducation(dummyEducation);
    }, 500);

    // Replace with API call later
    // getEducation().then(res => setEducation(res.data)).catch(console.log);
  }, []);

  return (
    <section
      id="education"
      className="py-20 text-white position-relative"
      style={{
        backgroundImage: `url(${eduBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(26, 26, 46, 0.85)", // same dark overlay as About
          zIndex: 0,
        }}
      ></div>

<div className="container" style={{ position: "relative", zIndex: 1 }}>
  <h2 className="text-center display-4 fw-bold mb-10">Education</h2>
  <div className="row justify-content-center">
    {education.map((edu, index) => (
      <div key={index} className="col-md-8 mb-4">
        <div className="card bg-dark text-white shadow-lg p-4 rounded-4 border-0">
          <h4 className="fw-bold">{edu.degree}</h4>
          <p className="mb-1">
            <strong className="text-info">Institution:</strong> {edu.institution}
          </p>
          <p className="mb-1">
            <strong className="text-info">Year:</strong> {edu.year}
          </p>
          <p className="mb-0">
            <strong className="text-info">Grade/CGPA:</strong> {edu.grade}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}
