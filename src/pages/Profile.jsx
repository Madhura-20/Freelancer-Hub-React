import "../css/style1.css";
import { Link } from "react-router-dom";
import profilePic from "../assets/f1.jpg";

function Profile() {
  const saveProfile = () => {
    const name = document.getElementById("profileName").value.trim();
    const email = document.getElementById("profileEmail").value.trim();
    const phone = document.getElementById("profilePhone").value.trim();
    const skills = document.getElementById("profileSkills").value.trim();
    const experience = document.getElementById("profileExperience").value.trim();
    const rate = document.getElementById("profileRate").value.trim();
    const location = document.getElementById("profileLocation").value.trim();
    const about = document.getElementById("profileAbout").value.trim();

    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9][0-9]{9}$/;

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      skills === "" ||
      experience === "" ||
      rate === "" ||
      location === "" ||
      about === ""
    ) {
      alert("Please fill all the fields.");
      return;
    }

    if (!nameRegex.test(name)) {
      alert("Name should contain only letters.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Enter a valid 10-digit phone number.");
      return;
    }

    if (isNaN(rate)) {
      alert("Hourly Rate should contain only numbers.");
      return;
    }

    if (about.length < 20) {
      alert("About Me should contain at least 20 characters.");
      return;
    }

    alert("✅ Profile Saved Successfully!");
  };

  return (
    <>
      <nav>
        <div className="logo">Freelance Hub</div>

        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/freelancers">Freelancers</Link></li>
          <li><Link to="/payment">Milestone Payments</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </nav>

      <div className="profile-container">

        <h2>My Freelancer Profile</h2>

        <br />

        <img
  src={profilePic}
  alt="Profile"
  className="profile-pic"
/>

        <input
          type="text"
          id="profileName"
          placeholder="Full Name"
        />

        <input
          type="email"
          id="profileEmail"
          placeholder="Email"
        />

        <input
          type="tel"
          id="profilePhone"
          placeholder="Phone Number"
        />

        <input
          type="text"
          id="profileSkills"
          placeholder="Skills (HTML, CSS, JavaScript)"
        />

        <input
          type="text"
          id="profileExperience"
          placeholder="Experience (Eg: 2 Years)"
        />

        <input
          type="text"
          id="profileRate"
          placeholder="Hourly Rate (₹/hour)"
        />

        <input
          type="text"
          id="profileLocation"
          placeholder="Location"
        />

        <textarea
          rows="5"
          id="profileAbout"
          placeholder="About Me"
        ></textarea>

        <button
          type="button"
          onClick={saveProfile}
        >
          Save Profile
        </button>

      </div>
    </>
  );
}

export default Profile;