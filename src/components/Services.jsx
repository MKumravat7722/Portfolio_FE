import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getServices } from "../api/api"; 

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices()
      .then(res => setServices(res.data))
      .catch(console.log);
  }, []);

  return (
    <section id="services" className="py-20 bg-dark text-white">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5">My Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card bg-secondary text-white h-100 text-center p-4 shadow-lg rounded-4 align-items-center">
                {service.icon_url && (
                  <img
                    src={service.icon_url}
                    alt={service.title}
                    className="mb-3"
                    style={{ width: "80px", height: "80px", objectFit: "contain" }}
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
