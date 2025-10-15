import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePlaceholder from "../assets/profile.jpg";

import { getProfile } from "../api/api";

export default function About() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile()
      .then((res) => setProfile(res.data))
      .catch(console.log);
  }, []);

  const skills = profile?.skills || ["React", "JavaScript", "CSS"];

  return (
    <section id="about" className="py-5 text-white" style={{ background: "linear-gradient(135deg,#071124 0%, #0b2540 55%, #06202a 100%)" }}>
      <style>{`
        .about-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.04);
          backdrop-filter: blur(4px);
        }
        .profile-img {
          width:200px; height:200px; object-fit:cover;
          transition: transform .3s ease, box-shadow .3s ease;
          box-shadow: 0 8px 24px rgba(2,6,23,0.5);
        }
        .profile-img:hover { transform: translateY(-6px) scale(1.03); }
        .name-gradient {
          background: linear-gradient(90deg,#60a5fa,#7c3aed,#fb7185);
          -webkit-background-clip:text; background-clip:text; color:transparent;
        }
        .skill-badge {
          display:inline-block;
          margin:6px 6px 6px 0;
          padding:6px 10px;
          font-size:0.85rem;
          border-radius:999px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.03);
          color: #e6f0ff;
        }
        .card-meta { color: rgba(255,255,255,0.9); }
        @media (max-width:767px) {
          .profile-img { width:140px; height:140px; }
        }
      `}</style>

      <div className="container py-5">
        <h2 className="text-center display-4 fw-bold mb-5">About Me</h2>

        <div className="card about-card text-white shadow-lg p-4 rounded-4 border-0">
          <div className="row align-items-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src={profile?.profile_image_url || profilePlaceholder}
                alt={profile?.name || "Profile Image"}
                className="img-fluid rounded-circle border border-3 border-info profile-img"
                style={{ width: "200px", height: "200px" }}
              />
            </div>

            <div className="col-md-8">
              <h3 className="fw-bold name-gradient">{profile?.name || "Your Name"}</h3>
              <p className="lead mt-3 card-meta">{profile?.bio || "I'm a passionate developer. Your introduction goes here."}</p>

              <div className="row text-start mt-4 card-meta">
                <div className="col-6 mb-2">
                  <strong className="text-info">Experience:</strong> {profile?.experience || "N/A"}
                </div>
                <div className="col-6 mb-2">
                  <strong className="text-info">Location:</strong> {profile?.location || "N/A"}
                </div>
                <div className="col-6 mb-2">
                  <strong className="text-info">Email:</strong> <a className="card-meta" href={`mailto:${profile?.email || "you@example.com"}`}>{profile?.email || "you@example.com"}</a>
                </div>
                <div className="col-6 mb-2">
                  <strong className="text-info">DOB:</strong> {profile?.dob || "DD/MM/YYYY"}
                </div>
                <div className="col-12 mb-2">
                  <strong className="text-info">Available:</strong> {profile?.availability || "N/A"}
                </div>
              </div>

              <div className="mt-3">
                {skills.map((s) => (
                  <span key={s} className="skill-badge">{s}</span>
                ))}
              </div>

              <div className="mt-3">
                {profile?.resume_url ? (
                  <a
                    href={profile.resume_url}
                    className="btn btn-outline-info text-white fw-semibold mt-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    aria-label="Download resume"
                  >
                    Download Resume
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}