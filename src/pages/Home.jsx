import "../css/style1.css";
import { Link } from "react-router-dom";
import bg from "../assets/bg.jpeg";

function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav>
        <div className="logo">Freelance Hub</div>

        <div className="nav-buttons">
          <Link to="/login" className="login-btn">Login</Link>
          <button
  className="register-btn"
  onClick={() => window.location.href = "/register"}
>
  Register
</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Hire Top Freelancers &<br />
            Grow Your Business Faster
          </h1>

          <p>
            Connect with skilled freelancers, post projects and grow your business with Freelance Hub.
          </p>

          <button>Get Started</button>
          <button className="explore-btn">Explore Projects</button>
        </div>

        <div className="hero-right">
          <img src={bg} alt="Freelancer" className="hero-image" />
        </div>
      </section>

      {/* SUCCESS */}
      <section className="success-section">
        <h2>Our Success</h2>

        <div className="success-container">
          <div className="success-card"><h3>500+</h3><p>Projects Posted</p></div>
          <div className="success-card"><h3>200+</h3><p>Freelancers</p></div>
          <div className="success-card"><h3>95%</h3><p>Success Rate</p></div>
          <div className="success-card"><h3>100+</h3><p>Happy Clients</p></div>
        </div>
      </section>

      {/* COMPANIES */}
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

      {/* TOP FREELANCERS */}
      <section className="featured-home">
        <h2>Top Freelancers</h2>

        <div className="featured-home-container">
          <div className="featured-home-card">
            <h3>Arjun</h3>
            <p>Web Developer</p>
            <p>⭐ 4.9</p>
          </div>

          <div className="featured-home-card">
            <h3>Priya</h3>
            <p>UI/UX Designer</p>
            <p>⭐ 4.8</p>
          </div>

          <div className="featured-home-card">
            <h3>Karthik</h3>
            <p>App Developer</p>
            <p>⭐ 5.0</p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2>Popular Categories</h2>

        <div className="category-container">
          <div className="category-card">💻 Web Development</div>
          <div className="category-card">🎨 Graphic Design</div>
          <div className="category-card">📱 App Development</div>
          <div className="category-card">✍️ Content Writing</div>
          <div className="category-card">📊 Digital Marketing</div>
          <div className="category-card">🎬 Video Editing</div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us">
        <h2>Why Choose Freelance Hub?</h2>

        <div className="category-container">
          <div className="category-card">
            <h3>Verified Freelancers</h3>
            <p>Trusted professionals</p>
          </div>

          <div className="category-card">
            <h3>Secure Payments</h3>
            <p>Safe transactions</p>
          </div>

          <div className="category-card">
            <h3>Fast Delivery</h3>
            <p>On-time projects</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready To Start Your Freelance Journey?</h2>
        <p>Join Freelance Hub today and connect with professionals.</p>

        <Link to="/register" className="cta-btn">
          Get Started Now
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>Freelance Hub</h3>
        <p>© 2026 All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Home;