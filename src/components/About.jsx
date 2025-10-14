import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../assets/profile.jpg"; // your profile image
import test from "../assets/test.jpg"; // your profile image

// import { getProfile } from "../api/api"; // Uncomment when API is ready

export default function About() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Simulating API call with dummy data for now
    const dummyResponse = {
      name: "Mohit Kumravat",
      email: "mohit.kumravat@example.com",
      dob: "1999-05-12",
      location: "Indore, India",
      bio: "Hi! I'm a passionate Full-Stack Developer with 2+ years of experience building web applications. I specialize in React and Ruby on Rails. I love creating responsive, user-friendly, and high-performance applications.",
      experience: "2+ Years",
      availability: "Freelance & Remote",
      profileImage: profileImage, // using local image for now
    };

    // Simulate async API call
    setTimeout(() => {
      setProfile(dummyResponse);
    }, 500);

    // Actual API call example:
    // getProfile().then(res => setProfile(res.data)).catch(console.log);
  }, []);

  return (
    <section id="about" className="py-5 text-white" style={{ backgroundColor: "#1a1a2e" }}>
      <div className="container py-5">
        <h2 className="text-center display-4 fw-bold mb-5">About Me</h2>

        <div className="card bg-dark text-white shadow-lg p-4 rounded-4 border-0">
          <div className="row align-items-center">
            
            {/* Profile Image */}
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src={profile?.profileImage || profileImage}
                alt={profile?.name || "Profile Image"}
                className="img-fluid rounded-circle border border-3 border-info"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </div>

            {/* About Info */}
            <div className="col-md-8">
              <h3 className="fw-bold">{profile?.name || "Your Name"}</h3>
              <p className="lead mt-3">{profile?.bio || "I'm a passionate developer. Your introduction goes here."}</p>

              <div className="row text-start mt-4">
                <div className="col-6 mb-2">
                  <strong className="text-info">Experience:</strong> {profile?.experience || "N/A"}
                </div>
                <div className="col-6 mb-2">
                  <strong className="text-info">Location:</strong> {profile?.location || "N/A"}
                </div>
                <div className="col-6 mb-2">
                  <strong className="text-info">Email:</strong> {profile?.email || "you@example.com"}
                </div>
                <div className="col-6 mb-2">
                  <strong className="text-info">DOB:</strong> {profile?.dob || "DD/MM/YYYY"}
                </div>
                <div className="col-12 mb-2">
                  <strong className="text-info">Available:</strong> {profile?.availability || "N/A"}
                </div>
              </div>

              <a
                href="/resume.pdf"
                className="btn btn-outline-info text-white fw-semibold"
                download
              >
                Download Resume
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
