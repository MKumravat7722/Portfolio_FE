import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePlaceholder from "../assets/profile.jpg";
import { getProfile } from "../api/api";

export default function About() {
  // ✅ Hardcoded fallback data
  const [profile, setProfile] = useState({
    name: "Mohit Kumravat",
    email: "mohitkumravat22@gmail.com",
    dob: "2002-05-10",
    location: "Indore, India",
    bio: "Full Stack Developer with 2+ years of hands-on experience in Ruby on Rails, ReactJS, and PostgreSQL. Passionate about solving real-world problems with clean code, scalable design, and modern DevOps practices.",
    experience: "2+ Years",
    availability: "Open for full-time and freelance opportunities",
    profile_image_url: "src/assets/Screenshot 2025-12-17 133617.png",
    resume_url: "",
  });

  useEffect(() => {
    getProfile()
      .then((res) => {
        if (res?.data && Object.keys(res.data).length > 0) {
          setProfile((prev) => ({
            ...prev,
            ...res.data,
          }));
        }
      })
      .catch((err) => {
        console.error("Profile API failed, using fallback data", err);
      });
  }, []);

  return (
    <section
      id="about"
      className="py-5 text-white"
      style={{
        background:
          "linear-gradient(135deg,#071124 0%, #0b2540 55%, #06202a 100%)",
      }}
    >
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
                src={profile.profile_image_url || profilePlaceholder}
                alt={profile.name}
                className="img-fluid rounded-circle border border-3 border-info profile-img"
              />
            </div>

            <div className="col-md-8">
              <h3 className="fw-bold name-gradient">{profile.name}</h3>

              <p className="lead mt-3 card-meta">{profile.bio}</p>

              <div className="row text-start mt-4 card-meta">
                <div className="col-6 mb-2">
                  <strong className="text-info">Experience:</strong>{" "}
                  {profile.experience}
                </div>
                <div className="col-6 mb-2">
                  <strong className="text-info">Location:</strong>{" "}
                  {profile.location}
                </div>
                <div className="col-6 mb-2">
                  <strong className="text-info">Email:</strong>{" "}
                  <a
                    className="card-meta"
                    href={`mailto:${profile.email}`}
                  >
                    {profile.email}
                  </a>
                </div>
                <div className="col-6 mb-2">
                  <strong className="text-info">DOB:</strong>{" "}
                  {profile.dob}
                </div>
                <div className="col-12 mb-2">
                  <strong className="text-info">Available:</strong>{" "}
                  {profile.availability}
                </div>
              </div>

              {profile.resume_url && (
                <a
                  href={profile.resume_url}
                  className="btn btn-outline-info text-white fw-semibold mt-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Download Resume
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
