import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import contactBg from "../assets/new.jpg";
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
      <style>{`
        .contact-overlay { position:absolute; inset:0; background: rgba(20,22,40,0.78); z-index:0; }
        .contact-container { position:relative; z-index:1; }
        .contact-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.04);
          padding: 28px;
          border-radius: 12px;
          box-shadow: 0 12px 30px rgba(2,6,23,0.5);
        }
        .contact-label { color: #cfe9ff; font-weight:600; }
        .custom-input {
          background: rgba(10,12,20,0.6) !important;
          color: #fff !important;
          border: 1px solid rgba(255,255,255,0.06) !important;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
          transition: border-color .15s ease, box-shadow .15s ease, transform .12s ease;
        }
        .custom-input:focus {
          border-color: rgba(99,102,241,0.9) !important;
          box-shadow: 0 6px 18px rgba(99,102,241,0.12);
          transform: translateY(-1px);
        }
        .btn-primary-custom {
          background: linear-gradient(90deg,#06b6d4,#7c3aed);
          border: none;
          box-shadow: 0 10px 24px rgba(99,102,241,0.14);
        }
        .status-success {
          background: rgba(16,185,129,0.12);
          border-left: 4px solid rgba(16,185,129,0.95);
          padding: 12px;
          color: #e6fff6;
          border-radius:6px;
        }
        .status-error {
          background: rgba(239,68,68,0.12);
          border-left: 4px solid rgba(239,68,68,0.95);
          padding: 12px;
          color: #fff1f1;
          border-radius:6px;
        }
      `}</style>

      <div className="contact-overlay" />
      <div className="container contact-container">
        <h2 className="text-center display-4 fw-bold mb-3">Get in Touch</h2>
        <p className="text-center mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
          Feel free to drop me a message. I would love to hear from you!
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-card">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label contact-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label contact-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control custom-input"
                    id="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label contact-label">
                    Message
                  </label>
                  <textarea
                    className="form-control custom-input"
                    id="message"
                    rows="5"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg px-5 py-2 btn-primary-custom"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {status.message && (
                  <div className="mt-3">
                    <div className={status.type === "success" ? "status-success" : "status-error"}>
                      {status.message}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}