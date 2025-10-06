import React from "react";
import { Toaster } from "react-hot-toast";
import Edit from "./pages/Edit";
import Navbar from "./components/employee/Navbar";
import EmployeeTable from "./components/employee/EmployeeTable";
import NewEmployee from "./pages/NewEmployee";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";



const App = () => {
  return (
    <div>
      <Toaster />
   
      <Routes>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/" element={<Home />}/>
      <Route path="/employee/new" element={<NewEmployee />} />
      <Route path="/employee/edit/:id" element={<Edit />} /> 
    </Routes>
      
    </div>
  );
};

export default App;


