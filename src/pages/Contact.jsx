import "../css/style1.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Contact() {

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [message,setMessage]=useState("");

const sendMessage=()=>{

const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name.trim()==="" || email.trim()==="" || message.trim()===""){
alert("Please fill all the fields.");
return;
}

if(!/^[A-Za-z ]+$/.test(name)){
alert("Name should contain only alphabets.");
return;
}

if(!emailRegex.test(email)){
alert("Enter a valid email address.");
return;
}

if(message.trim().length<10){
alert("Message should contain at least 10 characters.");
return;
}

alert("✅ Message Sent Successfully!");

setName("");
setEmail("");
setMessage("");

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

<h1>Contact Freelance Hub</h1>

<p>
We're here to help you with your projects and freelancing journey
</p>

</section>

<section className="contact-info">

<div className="info-card">

<h3>📧 Email</h3>

<p>freelancehub@gmail.com</p>

</div>

<div className="info-card">

<h3>📞 Phone</h3>

<p>+91 9876543210</p>

</div>

<div className="info-card">

<h3>📍 Location</h3>

<p>Chennai, Tamil Nadu</p>

</div>

</section>

<div className="contact-container">

<h2>Contact Us</h2>

<input

type="text"

placeholder="Your Name"

value={name}

onChange={(e)=>setName(e.target.value)}

/>

<input

type="email"

placeholder="Your Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>

<textarea

rows="5"

placeholder="Your Message"

value={message}

onChange={(e)=>setMessage(e.target.value)}

></textarea>

<button onClick={sendMessage}>

Send Message

</button>

</div>

<footer className="footer">

<h3>Freelance Hub</h3>

<p>© 2026 All Rights Reserved</p>

</footer>

</>

);

}

export default Contact;