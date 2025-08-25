import React from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Home() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="container py-5 text-center">
      <h1>Welcome, {user?.name} </h1>
      <div className="mt-4 d-flex gap-3 justify-content-center">
        <Link to="/users" className="btn btn-primary">Go to User Module</Link>
        <button onClick={logout} className="btn btn-outline-danger">Logout</button>
      </div>
    </div>
  );
}

