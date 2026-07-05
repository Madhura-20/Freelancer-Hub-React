import "../css/style1.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Projects() {

  const projects = [
    { title: "🛒 E-Commerce Website", budget: "₹10,000", skill: "HTML • CSS • JavaScript", category: "web" },
    { title: "🌐 Portfolio Website", budget: "₹5,000", skill: "HTML • CSS", category: "web" },
    { title: "🎨 Logo Design", budget: "₹3,000", skill: "Photoshop", category: "design" },
    { title: "✍️ Content Writing", budget: "₹2,000", skill: "Writing", category: "writing" },
    { title: "📱 Mobile App UI", budget: "₹8,000", skill: "Figma", category: "design" },
    { title: "🚀 Mobile App Development", budget: "₹8,000", skill: "Flutter", category: "mobile" },
    { title: "📈 Digital Marketing", budget: "₹4,000", skill: "SEO", category: "marketing" },
    { title: "🎬 Video Editing", budget: "₹3,500", skill: "Premiere Pro", category: "design" },
    { title: "📊 SEO Optimization", budget: "₹4,000", skill: "SEO • Analytics", category: "marketing" }
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [bidded, setBidded] = useState([]);

  const filteredProjects = projects.filter(project => {

    const matchSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.skill.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      filter === "all" || project.category === filter;

    return matchSearch && matchCategory;
  });

  const submitBid = (title) => {

    if (bidded.includes(title)) {
      alert("You have already placed a bid for this project.");
      return;
    }

    setBidded([...bidded, title]);

    alert("✅ Bid Submitted Successfully!");
  };

  return (
    <>

      <nav>

        <div className="logo">Freelance Hub</div>

        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/freelancers">Freelancers</Link></li>
          <li><Link to="/payment">Payment</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

      </nav>

      <section className="page-banner">

        <h1>Find Your Next Project</h1>

        <p>
          Browse projects and start earning with Freelance Hub
        </p>

      </section>

      <section className="projects">

        <h2>Available Projects</h2>

        <p className="project-subtitle">
          Choose projects that match your skills
        </p>

        <div className="project-search">

          <input

            type="text"

            placeholder="🔍 Search Projects"

            value={search}

            onChange={(e) => setSearch(e.target.value)}

          />

        </div>

        <div className="project-filters">

          <button onClick={() => setFilter("all")}>All</button>

          <button onClick={() => setFilter("web")}>Web</button>

          <button onClick={() => setFilter("design")}>Design</button>

          <button onClick={() => setFilter("writing")}>Writing</button>

          <button onClick={() => setFilter("marketing")}>Marketing</button>

          <button onClick={() => setFilter("mobile")}>Mobile Apps</button>

        </div>

        <div className="project-container">

          {filteredProjects.map((project, index) => (

            <div className="project-card" key={index}>

              <h3>{project.title}</h3>

              <p className="budget">
                {project.budget}
              </p>

              <p>{project.skill}</p>

              <p className="status">
                Status: Open
              </p>

              <button

                className="bid-btn"

                onClick={() => submitBid(project.title)}

              >

                {bidded.includes(project.title)
                  ? "Bidded"
                  : "Bid Now"}

              </button>

            </div>

          ))}

        </div>

      </section>

    </>
  );
}

export default Projects;