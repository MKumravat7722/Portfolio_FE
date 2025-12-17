import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getServices } from "../api/api"; 

export default function Services() {

  // ✅ Hard-coded fallback services
  const [services, setServices] = useState([
    {
      title: "Full Stack Web Application Development",
      description:
        "Building complete web applications from backend to frontend using Ruby on Rails and ReactJS. Ensuring responsive design, RESTful APIs, secure authentication, and high performance across the stack.",
      icon_url: "",
    },
    {
      title: "Custom API Development & Integration",
      description:
        "Designing and developing scalable REST APIs and integrating third-party services like Twilio (SMS), Stripe (Payments), and Google APIs (Calendar, Gmail) for enhanced functionality.",
      icon_url: "",
    },
    {
      title: "DevOps, Deployment & Automation",
      description:
        "Automating build, test, and deploy processes using Docker and GitHub Actions. Experienced in deploying and managing applications on AWS EC2, S3, and Heroku environments.",
      icon_url: "",
    },
    {
      title: "Database Architecture & Performance Tuning",
      description:
        "Designing normalized database schemas and writing optimized SQL queries. Managing migrations, indexing, and performance improvements in PostgreSQL and MySQL.",
      icon_url: "",
    },
    {
      title: "Frontend UI Development",
      description:
        "Developing responsive and user-friendly interfaces using ReactJS, Bootstrap, and Tailwind CSS. Focusing on clean layouts, accessibility, and interactive design for a better user experience.",
      icon_url: "",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Implementing automated test suites using RSpec and Capybara to ensure reliable, bug-free, and maintainable applications before deployment.",
      icon_url: "",
    },
  ]);

  useEffect(() => {
    getServices()
      .then((res) => {
        // ✅ Override only if API returns valid list
        if (Array.isArray(res?.data) && res.data.length > 0) {
          setServices(res.data);
        }
      })
      .catch((err) => {
        console.error("Services API failed, using fallback data", err);
      });
  }, []);

  return (
    <section id="services" className="py-20 bg-dark text-white bg-color">
      <style>{`
        .service-card {
          background: linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%);
          border: none;
          color: #fff;
          transition: transform .18s ease, box-shadow .18s ease;
          box-shadow: 0 8px 30px rgba(0,0,0,0.45);
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.55);
        }
        .service-card img {
          filter: drop-shadow(0 6px 18px rgba(0,0,0,0.35));
        }
      `}</style>

      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5">My Services</h2>

        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card service-card text-white h-100 text-center p-4 shadow-lg rounded-4 align-items-center">
                {service.icon_url && (
                  <img
                    src={service.icon_url}
                    alt={service.title}
                    className="mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />
                )}

                <h4 className="fw-bold">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
