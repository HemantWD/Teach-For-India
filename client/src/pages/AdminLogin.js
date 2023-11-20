import React, { useState } from "react";
import image from "../assets/img.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post();
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex items-center justify-center h-screen bg-transparent">
        <div className="bg-green-200 bg-opacity-70 p-8 rounded-md shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div className="text-center">
              <button
                className="bg-[#00ACCA] text-white py-3 px-6 rounded-md hover:bg-green-400"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
