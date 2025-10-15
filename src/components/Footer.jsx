import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import footerBg from "../assets/project.jpg";

export default function Footer() {
  return (

    <footer
  className="py-12 text-white relative"
  style={{
    backgroundImage: `url(${footerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "150px",
  }}
>
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 0,
    }}
  ></div>

  <div className="container text-center relative z-10">
    <p className="mb-2 text-lg">
      © {new Date().getFullYear()} Mohit Kumravat. All rights reserved.
    </p>
    <p className="mb-4 text-gray-200">
      Thank you for visiting my portfolio! Let's connect.
    </p>

    <div className="flex justify-center space-x-6">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-300 transition duration-300"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-300 transition duration-300"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-300 transition duration-300"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="mailto:your.email@example.com"
        className="hover:text-yellow-300 transition duration-300"
      >
        <FaEnvelope size={24} />
      </a>
    </div>

    <div className="mt-4">
      <a
        href="#home"
        className="text-yellow-300 hover:text-yellow-200 transition-colors"
      >
        Back to Top ↑
      </a>
    </div>
  </div>
</footer>

  );
}
