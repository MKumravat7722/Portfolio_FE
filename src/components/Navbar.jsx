import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold fs-4 text-white" href="#">
          Mohit’s Portfolio
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className=" navbar-collapse justify-content-end align-items-center"
          id="navbarNav"
        >
          <ul className="navbar-nav me-3">
            {["Home", "About", "Services", "Skills", "Projects", "Education", "Contact"].map(
              (item) => (
                <li className="nav-item" key={item}>
                <a className="nav-link text-white fw-semibold px-3" href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
                </li>
              )
            )}
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
