import React, { useEffect, useState } from "react";
import api from "../api";

export default function UserModule() {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    api.get("/users")
      .then(res => setUsers(res.data))
      .catch(e => setErr(e.response?.data?.error || "Failed to load users"));
  }, []);

return (
  <div className="container py-4">
    <h2>All Users</h2>
    {err && <p className="text-danger">{err}</p>}
  <ul className="list-group mt-3">
  {users.map(u => (
  <li key={u._id} className="list-group-item d-flex justify-content-between align-items-center">
  <div><strong>{u.name}</strong> <small>({u.email})</small></div>
        </li>
      ))}
    </ul>
  </div>
  );
}

