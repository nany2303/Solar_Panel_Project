// src/pages/LoginSignup/LoginSignup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const bgImage =
"https://images.theecoexperts.co.uk/wp-content/uploads/2023/06/Two-people-installing-solar-panels-on-roof-1.jpeg?width=744&height=496&format=webply"
function LoginSignup() {
  const [mode, setMode] = useState("login");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div
      className="auth-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="auth-hero-overlay">
        <div className="auth-hero-inner">
          {/* LEFT: solar panel content */}
          <div className="auth-hero-left">
            <h1>
              Welcome
              <br />
              Back
            </h1>
            <p>
              Power your home with clean solar energy and reduce your electricity
              costs every month. Monitor generation, savings, and system health
              in one simple dashboard.
            </p>

            <p className="auth-hero-bullets">
              • Real‑time solar production tracking
              <br />
              • Smart alerts for maintenance and issues
              <br />
              • Insights to maximize your ROI from panels
            </p>

            <div className="auth-social-inline">
              <span className="social-circle fb">f</span>
              <span className="social-circle tw">t</span>
              <span className="social-circle ig">i</span>
              <span className="social-circle yt">y</span>
            </div>
          </div>

          {/* RIGHT: sign in / sign up */}
          <div className="auth-hero-right">
            <div className="auth-hero-card">
              <div className="auth-toggle-inline">
                <button
                  className={mode === "login" ? "active" : ""}
                  onClick={() => setMode("login")}
                  type="button"
                >
                  Sign in
                </button>
                <button
                  className={mode === "signup" ? "active" : ""}
                  onClick={() => setMode("signup")}
                  type="button"
                >
                  Sign up
                </button>
              </div>

              <form onSubmit={handleSubmit} className="auth-hero-form">
                {mode === "login" ? (
                  <h2>Sign in</h2>
                ) : (
                  <h2>Create your account</h2>
                )}

                {mode === "signup" && (
                  <div className="field">
                    <label>Full name</label>
                    <input type="text" required />
                  </div>
                )}

                <div className="field">
                  <label>Email Address</label>
                  <input type="email" required />
                </div>

                <div className="field">
                  <label>Password</label>
                  <input type="password" required minLength={6} />
                </div>

                {mode === "login" && (
                  <div className="field-row">
                    <label className="remember">
                      <input type="checkbox" /> Remember me
                    </label>
                    <a href="#forgot" className="small-link">
                      Lost your password?
                    </a>
                  </div>
                )}

                <button type="submit" className="auth-primary-btn">
                  {mode === "login" ? "Sign in now" : "Create account"}
                </button>

                <p className="auth-terms">
                  By clicking on "
                  {mode === "login" ? "Sign in now" : "Create account"}" you
                  agree to our <a href="#tos">Terms of Service</a> and{" "}
                  <a href="#privacy">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
