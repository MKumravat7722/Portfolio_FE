// ...existing code...
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
    <section id="services" className="py-20 bg-dark text-white bg-color" >
      {/* simple scoped styles to change card background and hover */}
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
        <div className="row bg-color ">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card service-card text-white h-100 text-center p-4 shadow-lg rounded-4 align-items-center ">
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
