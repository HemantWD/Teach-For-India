import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    if (location.pathname === "/admin") {
      // If we are on admin page then we should navigate to register page
      navigate("/");
    } else if (location.pathname === "/listofcandidates") {
      navigate("/admin");
    } else {
      // If not then to admin page
      navigate("/admin");
    }
  };

  return (
    <div className=" bg-slate-200 flex justify-between items-center leading-10 p-5">
      <img
        src="https://assets-global.website-files.com/62f24893562f47d8766501aa/62f24ef3fde2c2f124a46baf_teachforindia_logo.svg"
        alt="Logo"
      />
      {location.pathname === "/listofcandidates" ? (
        <button
          className=" bg-blue-500 text-slate-200 px-4 rounded-md"
          onClick={handleClick}
        >
          Logout
        </button>
      ) : (
        <button
          className=" bg-blue-500 text-slate-200 px-4 rounded-md"
          onClick={handleClick}
        >
          {location.pathname === "/admin" ? "Register" : "Admin"}
        </button>
      )}
    </div>
  );
};

export default Header;
