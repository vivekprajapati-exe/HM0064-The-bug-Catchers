import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";

const Signup = () => {
  const [name , setName] = useState()
  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/signup", {name , email , password})
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
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"

        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"

        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;















