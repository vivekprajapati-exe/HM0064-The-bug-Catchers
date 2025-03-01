import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "Admin" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/signup", formData)
      .then(result => console.log(result));
      navigate("/login");
    } catch (err) {
      console.error("Signup failed:", err.response?.data?.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <select
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      >
        <option value="Admin">Admin</option>
        <option value="Logistics">Logistics</option>
        <option value="Marketing">Marketing</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;