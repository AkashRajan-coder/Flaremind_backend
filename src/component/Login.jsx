import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/login", { email, password })
      .then(res => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          navigate("/home");
        } else {
          alert(res.data.error || "Login failed");
        }
      })
      .catch(err => {
        console.error(err);
        alert(err.response?.data?.error || "Login failed");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2><center>Login</center></h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label><strong>Email</strong></label>
            <input className="form-control rounded-0" placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
          </div>
          <div className="mb-3">
            <label><strong>Password</strong></label>
            <input type="password" className="form-control rounded-0" placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
        </form>

        <p className="mt-3 mb-1">Don't have an account?</p>
        <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
