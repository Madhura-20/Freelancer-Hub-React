import "../css/style1.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Payment() {

const [paid,setPaid]=useState(false);

const releasePayment=()=>{

if(paid){
alert("Payment has already been released.");
return;
}

setPaid(true);

alert("✅ Payment Released Successfully!");

};

return(

<>

<nav>

<div className="logo">Freelance Hub</div>

<ul>

<li><Link to="/dashboard">Dashboard</Link></li>

<li><Link to="/projects">Projects</Link></li>

<li><Link to="/freelancers">Freelancers</Link></li>

<li><Link to="/payment">Milestone Payments</Link></li>

<li><Link to="/contact">Contact</Link></li>

</ul>

</nav>

<section className="page-banner">

<h1>Task-Based Payment</h1>

<p>Payment is released only after each milestone is approved.</p>

</section>

<div className="container mt-5">

<div className="card p-4 shadow">

<h2>Website Development</h2>

<h4>Total Budget : ₹10,000</h4>

<hr />

<div className="card p-3 mb-3">

<h5>Milestone 1</h5>

<p>Frontend Design</p>

<span className="badge bg-success status-badge">

Completed

</span>

<br />

<button

className={`btn mt-3 payment-btn ${paid ? "btn-secondary" : "btn-success"}`}

onClick={releasePayment}

>

{paid ? "Paid ✅" : "Release ₹3000"}

</button>

</div>

<div className="card p-3 mb-3">

<h5>Milestone 2</h5>

<p>Backend Development</p>

<span className="badge bg-warning text-dark status-badge">

Pending

</span>

<br />

<button

className="btn btn-secondary mt-3 payment-btn"

disabled

>

Release ₹4000

</button>

</div>

<div className="card p-3">

<h5>Milestone 3</h5>

<p>Testing & Deployment</p>

<span className="badge bg-warning text-dark status-badge">

Pending

</span>

<br />

<button

className="btn btn-secondary mt-3 payment-btn"

disabled

>

Release ₹3000

</button>

</div>

</div>

</div>

<footer className="footer">

<h3>Freelance Hub</h3>

<p>© 2026 All Rights Reserved</p>

</footer>

</>

);

}

export default Payment;