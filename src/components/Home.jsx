// ...existing code...
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import homeImage from "../assets/Home.jpg";
import { getHomeData } from "../api/api";

export default function Home() {
  const [homeData, setHomeData] = useState({
    name: "",
    title: "",
    subtitle: "",
  });

  useEffect(() => {
    getHomeData()
      .then((res) => setHomeData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section
      className="d-flex align-items-center justify-content-center text-center vh-100 text-white position-relative home-hero"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <style>{`
        .home-hero::before{
          content:"";
          position:absolute;
          inset:0;
          background: linear-gradient(180deg, rgba(6,8,15,0.55), rgba(6,8,15,0.75));
          z-index:0;
        }
        .hero-inner{ position:relative; z-index:1; max-width:900px; padding:0 16px; }
        .hero-title { font-weight:700; letter-spacing: -0.02em; margin-bottom:8px; }
        .hero-title .name { color: #06b6d4; }
        .hero-sub {
          display:inline-block;
          margin-top:10px;
          background: rgba(255,255,255,0.06);
          padding:8px 14px;
          border-radius:999px;
          color: #e6f0ff;
          font-weight:600;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .hero-lead { color: rgba(255,255,255,0.88); margin-top:12px; font-size:1.125rem; }
        .cta-btn {
          min-width:160px;
        }
        .btn-info-custom {
          background: linear-gradient(90deg,#06b6d4,#7c3aed);
          border: none;
        }
        .btn-outline-custom {
          border-color: rgba(255,255,255,0.18);
          color: #fff;
        }
        .hero-actions { margin-top:22px; }
        @media (max-width:575px){
          .hero-title { font-size:2rem; }
        }
      `}</style>

      <div className="hero-inner">
        <h1 className="display-3 hero-title">
          Hi, I’m{" "}
          <span className="name">
            {homeData.name || "Your Name"}
          </span>
        </h1>

        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="hero-sub">
            {homeData.title || "Your Title"} &nbsp;•&nbsp; {homeData.subtitle || "Your Specialization"}
          </div>

          <p className="lead hero-lead">
            {homeData.description || "Crafting clean, responsive web apps with attention to UX and performance."}
          </p>

          <div className="hero-actions d-flex flex-wrap justify-content-center gap-3">
            <a href="#projects" className="btn btn-info btn-lg cta-btn btn-info-custom text-white">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline-light btn-lg cta-btn btn-outline-custom">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}