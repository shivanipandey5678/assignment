import React, { useEffect, useMemo, useState } from "react";
import { glass_icon } from "../../assets/assets.js";
import EmployeeRow from "./EmployeeRow";

import {useAppContext} from '../../context/useContext.jsx'

import LoadingPage from "../common/Loading.jsx";
const EmployeeTable = () => {

  const [allEmployeeData, setAllEmployeeData] = useState([]);
  const [search, setSearch] = useState("");
  const {navigate, toast,loading, setLoading,axios} = useAppContext();

  const fetchEmployeesData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/employee/get-all`);
      if (data?.success) {
        toast.success(data?.message || "Employees fetched successfully");
        setAllEmployeeData(data?.employees || []);
      } else {
        toast.error(data?.message || "Failed to fetch employees");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEmployeesData();
  }, []);

  const filteredEmployees = useMemo(() => {
    const term = search.toLowerCase().trim();
    if (!term) return allEmployeeData;

    return allEmployeeData.filter((emp) =>
      [emp.name, emp.email, emp.position].some((field) =>
        field.toLowerCase().includes(term)
      )
    );
  }, [search, allEmployeeData]);

  if (loading) return <LoadingPage />;
  return (
    <div className="flex flex-col gap-2 p-4 border rounded-md  bg-white border-gray-400 mt-8">
      <div className="flex justify-between sm:flex-row gap-2">
        <div>
          <h2 className="text-2xl text-gray-800 font-semibold">
            Employee Directory
          </h2>
          <p className="text-sm text-zinc-600">
            View and manage all employee records
          </p>
        </div>
        <button
          className="flex items-center justify-center gap-2 text-white font-bold  sm:px-8  p-2  border bg-gradient-to-r from-blue-500 to-blue-600 rounded-md cursor-pointer hover:from-blue-600 hover:to-blue-700 w-full sm:w-auto"
          onClick={() => navigate("/employee/new")}
        >
          <span className="text-lg">+</span>
          <p>Add Employee</p>
        </button>
      </div>

      <div className="flex gap-2 p-4 border rounded-md  bg-gray-100 border-gray-400">
        <img src={glass_icon} alt="search_icon" className="w-5" />
        <input
          type="text"
          className="border-none flex-1 placeholder:text-sm focus:outline-none"
          placeholder="Search by name, email, or position..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {/* table start */}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left  text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-blue-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>

              <th scope="col" className="px-6 py-3">
                <span>Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees?.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-400">
                  No employees found
                </td>
              </tr>
            ) : (
              filteredEmployees.map((employeeData) => {
                return (
                  <EmployeeRow
                    {...employeeData}
                    key={employeeData._id}
                    onDeleteSuccess={fetchEmployeesData}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
