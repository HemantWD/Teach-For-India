import React, { useState } from "react";
import axios from "axios";
import backgroundImage from "../assets/background.jpg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const [availability, setAvailability] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, phone, location, languages, availableDays);
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        phone,
        location,
        language,
        availability: availability.split(","),
      });
      if (response.data.success) {
        alert(response.data.message);
        navigate("/");
        setName("");
        setEmail("");
        setPhone("");
        setLocation("");
        setLanguage("");
        setAvailability("");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something Went Wrong");
    }
  };

  return (
    <div
      className=" flex items-center justify-center bg-cover bg-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-end w-full mt-5 mr-16">
        <div className=" bg-violet-300 bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-semibold mb-4 text-center">
              Volunteer Registration
            </h1>
            <div>
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number:</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Your Phone Number"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Location:</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter Your Location"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Spoken Languages:</label>
              <input
                type="text"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                placeholder="Spoken Languages"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Available Days:</label>
              <div>
                <input
                  type="text"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  placeholder="Available days"
                  className="w-full p-3 border rounded-md"
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <button
                className="bg-[#00ACCA] text-white py-3 px-6 rounded-md hover:bg-blue-600 -mb-3"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
