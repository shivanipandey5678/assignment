import React, { useState } from "react";
import {useAppContext} from '../context/useContext.jsx'

const NewEmployee = () => {
  const {toast,axios,navigate} = useAppContext();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  const addEmployee = async (e) => {
    try {
      e.preventDefault();
      if (!name.trim() || !email.trim() || !position.trim()) {
        toast.error("Please provide complete information before submitting");
        return;
      }

      const { data } = await axios.post("/api/employee", {
        name,
        email,
        position,
      });
      if (data?.success) {
        toast.success(data?.message);
        navigate("/");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100">
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-all"
      >
        ← Back to Home
      </button>
      <form
        className=" bg-white p-6 rounded-lg shadow-lg sm:h-[50%] md:w-[40vw] w-[90vw] h-[40%] flex flex-col justify-evenly"
        onSubmit={addEmployee}
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center relative inline-block">
          Create New Employee
          <span className="block w-24 h-0.5 bg-blue-500 rounded-full mx-auto mt-2"></span>
        </h2>

        <input
          type="text"
          placeholder="Enter full name "
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent "
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter work email "
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent "
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <select
          name=""
          id=""
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        >
          <option value="" disabled>
            Select position
          </option>
          <option value="Manager">Manager</option>
          <option value="Team Lead">Team Lead</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Junior Developer">Junior Developer</option>
          <option value="Designer">Designer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="QA Engineer">QA Engineer</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
          <option value="Intern">Intern</option>
          <option value="HR">HR</option>
          <option value="Team Lead">Team Lead</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Junior Developer">Junior Developer</option>
          <option value="Designer">Designer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="QA Engineer">QA Engineer</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
          <option value="Intern">Intern</option>
          <option value="HR">HR</option>
          <option value="Product Owner">Product Owner</option>
        </select>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded  cursor-pointer"
          type="submit"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default NewEmployee;
