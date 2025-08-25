import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/register", { name, email, password })
      .then(() => navigate("/login"))
      .catch(err => {
        console.error(err);
        alert(err.response?.data?.error || "Register failed");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
    <div className="bg-white p-3 rounded w-25">
     <h2><center>Sign Up</center></h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
      <label><strong>Name</strong></label>
      <input className="form-control rounded-0" placeholder="Enter Name"
      onChange={(e) => setName(e.target.value)} autoComplete="off" />
        </div>
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
        <button type="submit" className="btn btn-success w-100 rounded-0">Sign Up</button>
        </form>

        <p className="mt-3 mb-1">Already have an account?</p>
        <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Login
        </Link>
      </div>
    </div>
  );
}
