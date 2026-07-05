import "../css/style1.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import f4 from "../assets/f4.jpg";
import f5 from "../assets/f5.jpg";
import f6 from "../assets/f6.jpg";
import f7 from "../assets/f7.jpg";
import f8 from "../assets/f8.jpg";
import f9 from "../assets/f9.jpg";

function Freelancers() {

const freelancers = [

{
name:"Madhurasri",
role:"Web Developer",
skill:"HTML • CSS • JavaScript",
match:"95%",
rating:"4.9 / 5",
price:"₹1500/hr",
image:f1
},

{
name:"Jack",
role:"Graphic Designer",
skill:"Photoshop • Illustrator",
match:"88%",
rating:"4.8 / 5",
price:"₹1200/hr",
image:f2
},

{
name:"Manisha",
role:"Content Writer",
skill:"SEO • Blogging",
match:"90%",
rating:"4.7 / 5",
price:"₹1000/hr",
image:f3
},

{
name:"Rahul",
role:"UI/UX Designer",
skill:"Figma • Adobe XD",
match:"93%",
rating:"4.9 / 5",
price:"₹1800/hr",
image:f4
},

{
name:"Praveen",
role:"Video Editor",
skill:"Premiere Pro • After Effects",
match:"86%",
rating:"4.8 / 5",
price:"₹1400/hr",
image:f5
},

{
name:"Nila",
role:"Digital Marketer",
skill:"SEO • Google Ads",
match:"89%",
rating:"4.7 / 5",
price:"₹1300/hr",
image:f6
},

{
name:"Krithi",
role:"App Developer",
skill:"Flutter • Android",
match:"97%",
rating:"5.0 / 5",
price:"₹2000/hr",
image:f7
},

{
name:"Rajesh",
role:"Digital Marketer",
skill:"Meta Ads • Analytics",
match:"87%",
rating:"4.8 / 5",
price:"₹1250/hr",
image:f8
},

{
name:"Krishna",
role:"Video Editor",
skill:"DaVinci Resolve • Editing",
match:"91%",
rating:"4.9 / 5",
price:"₹1600/hr",
image:f9
}

];

const [search,setSearch]=useState("");
const [hired,setHired]=useState([]);

const filteredFreelancers = freelancers.filter((item)=>

item.name.toLowerCase().includes(search.toLowerCase()) ||

item.role.toLowerCase().includes(search.toLowerCase()) ||

item.skill.toLowerCase().includes(search.toLowerCase())

);

const hireFreelancer=(name)=>{

if(hired.includes(name)){
alert("You have already hired this freelancer.");
return;
}

setHired([...hired,name]);

alert("🎉 Freelancer hired successfully!");

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

<h1>Meet Our Expert Freelancers</h1>

<p>Choose from top-rated professionals worldwide</p>

</section>

<section className="Freelancer">

<h2>Our Freelancers</h2>

<div className="project-search">

<input
type="text"
placeholder="🔍 Search Freelancer"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

<div className="Freelancer-container">

{filteredFreelancers.map((item,index)=>(

<div className="Freelancer-card" key={index}>

    <img src={item.image} alt={item.name} />

<h3>{item.name}</h3>

<p>{item.role}</p>

<p className="skill">
{item.skill}
</p>

<p>
🎯 Match Score:
<strong> {item.match}</strong>
</p>

<p>
✔ Verified Freelancer
</p>

<p>
⭐ {item.rating}
</p>

<p>
💰 {item.price}
</p>

<button

className="hire-btn"

onClick={()=>hireFreelancer(item.name)}

>

{hired.includes(item.name)

?

"Hired"

:

"Hire Me"

}

</button>

</div>

))}

</div>

</section>

</>

);

}

export default Freelancers;