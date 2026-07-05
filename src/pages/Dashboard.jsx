import "../css/style1.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <nav>

        <div className="logo">Freelance Hub</div>

        <ul>

          <li><Link to="/dashboard">Home</Link></li>

          <li><Link to="/profile">My Profile</Link></li>

          <li><Link to="/projects">Projects</Link></li>

          <li><Link to="/freelancers">Freelancers</Link></li>

          <li><Link to="/payment">Milestone Payments</Link></li>

          <li><Link to="/contact">Contact</Link></li>

          <li><Link to="/">Logout</Link></li>

        </ul>

      </nav>

      <section className="hero">

        <div className="hero-left">

          <h2>Welcome, User</h2>

          <h1>
            Hire Top Freelancers &
            Grow Your Business Faster
          </h1>

          <p>
            Hire skilled professionals, post projects and manage your freelance work from one platform.
          </p>

          <input
            type="text"
            placeholder="Search Projects or Freelancers"
            className="search-bar"
          />

          <br /><br />

          <button className="btn btn-light btn-lg px-4">
            Get Started
          </button>

        </div>

        <div className="hero-right">

          <div className="hero-box">
            <h2>500+</h2>
            <p>Projects Posted</p>
          </div>

          <div className="hero-box">
            <h2>200+</h2>
            <p>Freelancers</p>
          </div>

          <div className="hero-box">
            <h2>95%</h2>
            <p>Success Rate</p>
          </div>

        </div>

      </section>

      <section className="companies">

  <h2>Trusted By Companies</h2>

  <div className="company-container">

    <div className="company-card">Google</div>
    <div className="company-card">Microsoft</div>
    <div className="company-card">Amazon</div>
    <div className="company-card">Infosys</div>
    <div className="company-card">TCS</div>

  </div>

</section>

<section className="stats">

  <h2>Your Activity Dashboard</h2>

  <p>Track your freelance performance and project progress</p>

  <div className="stats-container">

    <div className="stat-card">
      <h3>0</h3>
      <p>Active Bids</p>
    </div>

    <div className="stat-card">
      <h3>5</h3>
      <p>Completed Projects</p>
    </div>

    <div className="stat-card">
      <h3>₹12,000</h3>
      <p>Total Earnings</p>
    </div>

    <div className="stat-card">
      <h3>48</h3>
      <p>Profile Views</p>
    </div>

  </div>

</section>

<section className="categories">

<h2>Quick Actions</h2>

<div className="container">

<div className="row g-4">

<div className="col-md-4">
<div className="category-card">
<Link to="/profile">
<h3>👤 My Profile</h3>
<p>View and edit your profile</p>
</Link>
</div>
</div>

<div className="col-md-4">
<div className="category-card">
<Link to="/projects">
<h3>📁 Browse Projects</h3>
<p>Find projects matching your skills</p>
</Link>
</div>
</div>

<div className="col-md-4">
<div className="category-card">
<h3>💰 My Bids</h3>
<p>View your submitted proposals</p>
</div>
</div>

<div className="col-md-4">
<div className="category-card">
<h3>📬 Messages</h3>
<p>Check client conversations</p>
</div>
</div>

<div className="col-md-4">
<div className="category-card">
<h3>📊 My Earnings</h3>
<p>Track your completed payments</p>
</div>
</div>

<div className="col-md-4">
<div className="category-card">
<h3>⚙ Settings</h3>
<p>Manage your account preferences</p>
</div>
</div>

</div>

</div>

</section>


{/* Featured Freelancers */}

<section className="featured">

<h2>Featured Freelancers</h2>

<div className="featured-container">

<div className="card shadow p-4 text-center">
<h3>👨‍💻 Arjun</h3>
<p>⭐ 4.9 Rating</p>
<p>₹1500/hr</p>
<button className="btn btn-primary">Hire Now</button>
</div>

<div className="card shadow p-4 text-center">
<h3>🎨 Priya</h3>
<p>⭐ 4.8 Rating</p>
<p>₹1200/hr</p>
<button className="btn btn-primary">Hire Now</button>
</div>

<div className="card shadow p-4 text-center">
<h3>📱 Karthik</h3>
<p>⭐ 5.0 Rating</p>
<p>₹1800/hr</p>
<button className="btn btn-primary">Hire Now</button>
</div>

</div>

</section>


{/* Recent Projects */}

<section className="recent-projects">

<h2>Recent Projects</h2>

<div className="recent-container">

<div className="card shadow p-4">
<h3>Website Development</h3>
<p>Budget: ₹10,000</p>
<span className="badge bg-success">Open</span>
</div>

<div className="card shadow p-4">
<h3>Portfolio Design</h3>
<p>Budget: ₹5,000</p>
<span className="badge bg-success">Open</span>
</div>

<div className="card shadow p-4">
<h3>Mobile App UI</h3>
<p>Budget: ₹8,000</p>
<span className="badge bg-success">Open</span>
</div>

</div>

</section>


{/* Why Choose Us */}

<section className="why-us">

<h2>Why Choose Freelance Hub?</h2>

<div className="why-container">

<div>
<h3>⚡ Fast Hiring</h3>
<p>Connect with freelancers quickly.</p>
</div>

<div>
<h3>🔒 Secure Platform</h3>
<p>Safe project management.</p>
</div>

<div>
<h3>💼 Professional Talent</h3>
<p>Hire skilled experts.</p>
</div>

</div>

</section>


{/* Testimonials */}

<section className="testimonials">

<h2>What Our Clients Say</h2>

<div className="testimonial-container">

<div className="testimonial-card">
<p>⭐ "Freelance Hub helped me find a talented developer within a day."</p>
<h3>- Rahul</h3>
</div>

<div className="testimonial-card">
<p>⭐ "Easy to use platform with professional freelancers."</p>
<h3>- Priya</h3>
</div>

<div className="testimonial-card">
<p>⭐ "Posting projects and hiring experts was very simple."</p>
<h3>- Arjun</h3>
</div>

</div>

</section>


{/* Footer */}

<footer className="footer">

<h3>Freelance Hub</h3>

<p>© 2026 All Rights Reserved</p>

</footer>
    </>
  );
}

export default Dashboard;