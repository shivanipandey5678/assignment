import React, { useEffect } from "react";
import {useAppContext} from '../../context/useContext.jsx'
import { employee_icon } from "../../assets/assets.js";

const Navbar = () => {
    const {allEmployeeData,fetchEmployeesData} = useAppContext();
  

  useEffect(() => {
    fetchEmployeesData();
  }, []);
  return (
    <div>
      <div className="p-4 ">
        <div className="flex gap-3 items-center">
          <img src={employee_icon} alt="employee_icon" className="w-10" />
          <h2 className="text-3xl text-gray-800 font-bold">
            Employee Management
          </h2>
        </div>
        <p className="text-gray-600">
          Manage your team members and their information
        </p>
      </div>

      <div className="flex flex-col gap-2 p-4 border rounded-md  bg-white border-gray-400">
        <p className="text-sm text-zinc-600 font-semibold">Total Employees</p>
        <h1 className="text-3xl font-bold ">{allEmployeeData.length}</h1>
      </div>
    </div>
  );
};

export default Navbar;
