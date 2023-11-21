import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className=" flex flex-col  items-center justify-center h-screen">
      <p className=" text-6xl font-bold text-red-500">404</p>
      <p className=" text-2xl font-semibold my-4">Oops ! Page not found</p>
      <Link
        to="/"
        className=" text-blue-500 border p-3 bg-violet-200 rounded-xl hover:underline focus:outline-none focus:ring focus:border-blue-300 "
      >
        Go Back
      </Link>
    </div>
  );
};

export default PageNotFound;
