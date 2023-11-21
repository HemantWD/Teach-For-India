import React, { useEffect, useState } from "react";
import axios from "axios";

const ListOfCandidates = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/api/listofcandidates`
        );
        setData(response.data.list);
        // console.log(response.data.list);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="  container mx-auto p-4 flex flex-col">
      <h1 className=" text-2xl font-bold mb-4 text-center">
        List of candidates
      </h1>
      <table className=" min-w-full bg-blue-50 border border-blue-300">
        <thead>
          <tr className=" bg-[#00ACCA]">
            <th className=" py-2 px-4 border-b text-center">Name</th>
            <th className=" py-2 px-4 border-b text-center">Email</th>
            <th className=" py-2 px-4 border-b text-center">Phone</th>
            <th className=" py-2 px-4 border-b text-center">Location</th>
            <th className=" py-2 px-4 border-b text-center">
              Spoken Languages
            </th>
            <th className=" py-2 px-4 border-b">Availability</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data.map((candidate) => (
              <tr key={candidate._id}>
                <td className=" py-2 px-4 border-b text-center">
                  {candidate.name}
                </td>
                <td className=" py-2 px-4 border-b text-center">
                  {candidate.email}
                </td>
                <td className=" py-2 px-4 border-b text-center">
                  {candidate.phone}
                </td>
                <td className=" py-2 px-4 border-b text-center">
                  {candidate.location}
                </td>
                <td className=" py-2 px-4 border-b text-center">
                  {candidate.language}
                </td>
                <td className=" py-2 px-4 border-b text-center">
                  {candidate.availability.join(",")}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfCandidates;
