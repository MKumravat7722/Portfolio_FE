import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getEducation } from "../api/api";
import eduBg from "../assets/education.jpg";

export default function Education() {

  // ✅ Hard-coded fallback education
  const [education, setEducation] = useState([
    {
      degree: "Bachelor of Computer Science",
      institution: "Swami Vivekanand College Of Engineering, Indore",
      year: "2019–2023",
      grade: "CGPA: 7.22",
    },
    {
      degree: "12th (PCM)",
      institution: "Saraswati Vidhya Mandir, Pipalrawan",
      year: "2018–2019",
      grade: "83.6%",
    },
    {
      degree: "10th",
      institution: "Saraswati Vidhya Mandir, Pipalrawan",
      year: "2016–2017",
      grade: "80.6%",
    },
  ]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    getEducation()
      .then((res) => {
        // ✅ Override only if API returns valid data
        if (Array.isArray(res?.data) && res.data.length > 0) {
          setEducation(res.data);
        }
      })
      .catch((err) =>
        console.error("Education API failed, using fallback data", err)
      );

    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
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
      }}
    >
      <style>{`
        .edu-overlay {
          position:absolute; inset:0;
          background: linear-gradient(180deg, rgba(8,10,20,0.78), rgba(8,10,20,0.86));
          z-index:0;
        }
        .edu-container { position:relative; z-index:1; }
        .edu-heading { color:#f8fafc; text-align:center; margin-bottom:28px; }
        .edu-timeline { position:relative; padding-left:28px; margin-top:12px; }
        .edu-timeline::before {
          content:""; position:absolute; left:10px; top:0; bottom:0;
          width:3px; background: linear-gradient(180deg,#06b6d4,#7c3aed);
          border-radius:2px;
        }
        .edu-item {
          position:relative; margin-bottom:20px; padding:18px 18px 18px 36px;
          background: rgba(255,255,255,0.02); border-radius:12px;
          border:1px solid rgba(255,255,255,0.03);
          box-shadow: 0 8px 24px rgba(2,6,23,0.45);
          transform: translateY(12px); opacity:0;
          transition: transform 360ms cubic-bezier(.2,.9,.2,1), opacity 360ms ease;
        }
        .edu-item.visible { transform: translateY(0); opacity:1; }
        .edu-dot {
          position:absolute; left:-3px; top:18px; width:18px; height:18px;
          background: radial-gradient(circle at 30% 30%, #fff, rgba(255,255,255,0.85));
          border-radius:50%;
          border: 3px solid rgba(7,10,24,0.9);
        }
        .edu-degree { font-weight:700; margin-bottom:6px; }
        .edu-meta { color: rgba(255,255,255,0.8); margin-bottom:8px; }
        .edu-grade { color: rgba(255,255,255,0.78); font-weight:600; }
      `}</style>

      <div className="edu-overlay" />
      <div className="container edu-container">
        <h2 className="text-center display-4 fw-bold edu-heading">Education</h2>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="edu-timeline">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className={`edu-item ${mounted ? "visible" : ""}`}
                  style={{ transitionDelay: `${idx * 90}ms` }}
                >
                  <div className="edu-dot" />
                  <div className="edu-degree">{edu.degree}</div>
                  <div className="edu-meta">
                    <strong className="text-info">Institution:</strong>{" "}
                    {edu.institution} ·{" "}
                    <strong className="text-info">Year:</strong> {edu.year}
                  </div>
                  <div className="edu-grade">
                    <strong className="text-info">Grade/CGPA:</strong>{" "}
                    {edu.grade || "N/A"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
