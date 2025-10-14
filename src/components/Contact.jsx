// src/components/Contact.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import contactBg from "../assets/new.jpg"; // Your background image
import { sendContactMessage } from "../api/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await sendContactMessage(form);
      if (res.data.status === "success") {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: res.data.message || "Something went wrong.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Error sending message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 text-white position-relative"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(26,26,46,0.85)",
          zIndex: 0,
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <h2 className="text-center display-4 fw-bold mb-5">Get in Touch</h2>
        <p className="text-center mb-5">
          Feel free to drop me a message. I would love to hear from you!
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-1"
                  id="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control bg-dark text-white border-1"
                  id="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control bg-dark text-white border-1"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg px-5 py-2"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>

              {status.message && (
                <div
                  className={`mt-3 p-3 rounded ${
                    status.type === "success"
                      ? "bg-success bg-opacity-25 text-white"
                      : "bg-danger bg-opacity-25 text-white"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
