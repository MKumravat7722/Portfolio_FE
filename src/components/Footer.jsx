import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import footerBg from "../assets/project.jpg";

export default function Footer() {
  return (
    <footer
      className="py-5 text-white position-relative"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "150px",
      }}
    >
      <style>{`
        .footer-overlay { position:absolute; inset:0; background: rgba(0,0,0,0.55); z-index:0; }
        .footer-icon { color: rgba(255,255,255,0.9); transition: color .18s ease, transform .18s ease; }
        .footer-icon:hover { color: #fbbf24; transform: translateY(-3px); }
        .footer-link { color: rgba(255,255,255,0.92); text-decoration:none; }
        .footer-link:hover { color: #fde68a; text-decoration:underline; }
      `}</style>

      <div className="footer-overlay" />

      <div className="container text-center position-relative" style={{ zIndex: 1 }}>
        <p className="mb-1" style={{ fontSize: 14 }}>
          © {new Date().getFullYear()} Mohit Kumravat. All rights reserved.
        </p>
        <p className="mb-3" style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
          Thank you for visiting my portfolio! Let's connect.
        </p>

        <div className="d-flex justify-content-center align-items-center" style={{ gap: 20 }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-icon"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-icon"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="footer-icon"
          >
            <FaTwitter size={22} />
          </a>

          <a
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="footer-icon"
          >
            <FaEnvelope size={22} />
          </a>
        </div>

        <div className="mt-3">
          <a href="#home" className="footer-link" aria-label="Back to top">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}