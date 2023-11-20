import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admin");
  };
  return (
    <div className=" bg-slate-200 flex justify-between items-center leading-10 p-5">
      <img
        src="https://assets-global.website-files.com/62f24893562f47d8766501aa/62f24ef3fde2c2f124a46baf_teachforindia_logo.svg"
        alt="Logo"
      />

      <button
        className=" bg-blue-500 text-slate-200 px-4 rounded-md"
        onClick={handleClick}
      >
        Admin
      </button>
    </div>
  );
};

export default Header;
