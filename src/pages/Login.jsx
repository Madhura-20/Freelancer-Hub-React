import "../css/style1.css";
import { Link } from "react-router-dom";

function Login() {
  return (
   <div className="login-page">

      <div className="login-container">

        <h2>Welcome Back</h2>

        <p className="login-text">
          Login to access your freelancer dashboard
        </p>

        <form>

          <input
            type="email"
            id="loginEmail"
            placeholder="Enter Email"
          />

          <input
            type="password"
            id="loginPassword"
            placeholder="Enter Password"
          />

          <button
  type="button"
  onClick={() => {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || password === "") {
      alert("Please fill all the fields.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    alert("Login Successful!");
    window.location.href = "/dashboard";
  }}
>
  Login
</button>

        </form>

        <p className="register-link">
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;