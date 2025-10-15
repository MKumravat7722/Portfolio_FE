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

  useEffect(() => {;
    getHomeData()
      .then((res) => setHomeData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section
      className="d-flex align-items-center justify-content-center text-center vh-100 text-white position-relative"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
          Hi, I’m{" "}
          <span className="text-info">
            {homeData.name || "Your Name"}
          </span>
        </h1>
        <p className="lead mt-3">
          {homeData.title || "Your Title"} |{" "}
          {homeData.subtitle || "Your Specialization"}
        </p>

        <div className="mt-4">
          <a
            href="#projects"
            className="btn btn-info btn-lg me-3 text-white"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn btn-outline-light btn-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
