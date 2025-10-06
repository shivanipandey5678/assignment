import React from "react";
import { edit_icon, trash_icon } from "../../assets/assets.js";
import dayjs from "dayjs";
import {useAppContext} from '../../context/useContext.jsx'

const EmployeeRow = ({
  name,
  email,
  position,
  createdAt,
  _id,
  onDeleteSuccess,
}) => {
  const formattedDate = dayjs(createdAt).format("DD/MM/YYYY, hh:mm A");

       
        const {navigate, toast,axios,fetchEmployeesData} = useAppContext();

  const deleteEmployee = async (_id) => {
    try {
      const willing = window.confirm("Are you sure you want to delete this?");
      if (!willing) return;

      const { data } = await axios.delete(`/api/employee/${_id}`);
      if (data.success) {
        toast.success(data.message);
        await fetchEmployeesData()
        onDeleteSuccess();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <tr className="bg-gray-100 border-b  border-gray-200 hover:bg-gray-50">
        <th scope="row" className="px-6 py-4 font-bold whitespace-nowrap  ">
          {name}
        </th>
        <td className="px-6 py-4">{email}</td>
        <td className="px-6 py-4 ">
          <span className="md:bg-blue-100 md:rounded-full py-2 px-4 md:text-blue-600 font-semibold ">
            {position}
          </span>
        </td>

        <td>{formattedDate}</td>
        <td className="px-6 py-4 flex justify-between">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            <img
              src={trash_icon}
              alt="trash_icon"
              className="w-5 transition-transform duration-200 hover:scale-110"
              onClick={() => deleteEmployee(_id)}
            />
          </a>
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            <img
              src={edit_icon}
              alt="edit_icon"
              className="w-6 transition-transform duration-200 hover:scale-110"
              onClick={() => navigate(`/employee/edit/${_id}`)}
            />
          </a>
        </td>
      </tr>
    </>
  );
};

export default EmployeeRow;
