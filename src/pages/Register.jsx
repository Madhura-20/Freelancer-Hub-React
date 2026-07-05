import "../css/style1.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-page">

      <div className="register-container">

        <h2>Create Account</h2>

        <p className="register-text">
          Join Freelance Hub and start your journey today
        </p>

        <form>

          <input
            type="text"
            id="name"
            placeholder="Full Name"
          />

          <input
            type="email"
            id="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
          />

          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
          />

          <div className="role-select">

            <label>
              <input
                type="radio"
                name="role"
                value="freelancer"
                defaultChecked
              />
              I'm a Freelancer
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="client"
              />
              I'm a Client
            </label>

          </div>
           <button
  type="button"
onClick={() => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Name Validation
  const nameRegex = /^[A-Za-z ]+$/;

  // Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password Validation
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    alert("Please fill all the fields.");
    return;
  }

  if (!nameRegex.test(name)) {
    alert("Name should contain only letters and spaces.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Enter a valid email address.");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 8 characters and include uppercase, lowercase, number and special character."
    );
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  alert("Registration Successful!");
  window.location.href = "/login";
}}
>
  Register
</button>

          <p className="login-link">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Register;