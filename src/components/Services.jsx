import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Dummy data for now
const dummyServices = [
  {
    icon: "⚛️", // React emoji
    title: "Frontend Development",
    description: "Responsive and modern UI using React, Bootstrap, and Tailwind CSS.",
  },
  {
    icon: "🖥️", // Server emoji
    title: "Backend Development",
    description: "APIs, database management, authentication, and secure endpoints with Ruby on Rails.",
  },
  {
    icon: "💻", // Laptop emoji
    title: "Full-Stack Applications",
    description: "End-to-end web applications with React frontend and Rails backend.",
  },
  {
    icon: "💻", // Laptop emoji
    title: "Full-Stack Applications",
    description: "End-to-end web applications with React frontend and Rails backend.",
  },
];

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setServices(dummyServices);
    }, 500);

    // Actual API call example:
    // getServices().then(res => setServices(res.data)).catch(console.log);
  }, []);

  return (
    <section id="services" className="py-20 bg-dark text-white">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5">My Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card bg-secondary text-white h-100 text-center p-4 shadow-lg rounded-4">
                <div className="display-1 mb-3">{service.icon}</div>
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
