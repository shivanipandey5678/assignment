import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
      const [allEmployeeData, setAllEmployeeData] = useState([]);
    axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL; 
   
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

      const values = {
        navigate, toast, axios,loading, setLoading,fetchEmployeesData,
        allEmployeeData, setAllEmployeeData
    }


    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}