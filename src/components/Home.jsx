import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import homeImage from "../assets/Home.jpg";

const Home = () => {
  return (
    <>
      <section
        className="d-flex align-items-center justify-content-center text-center vh-100 text-white"
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        {/* Optional dark overlay for better text visibility */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 className="display-3 fw-bold">
            Hi, I’m <span className="text-info">Mohit Kumravat</span>
          </h1>
          <p className="lead mt-3">
            Full-Stack Developer | React & Ruby on Rails Specialist
          </p>
          <div className="mt-4">
            <a href="#projects" className="btn btn-info btn-lg me-3 text-white">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline-light btn-lg">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
