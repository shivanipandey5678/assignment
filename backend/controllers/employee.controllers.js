import Employee from "../models/Employee.Model.js";
//  --------------CRUD CONTROLLERS-----------------

//CREATE NEW EMPLOYEE
const createNewEmployee = async (req, res) => {
  try {
    const { name, email, position } = req.body;
    if (!name || !email || !position) {
      return res.status(400).json({
        success: false,
        message:
          "All fields are required: name, email, and position. Please fill in all details.",
      });
    }

    // Check duplicate email
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(400).json({
        success: false,
        message: "Employee with this email already exists.",
      });
    }

    // Create and save new employee
    const newEmployee = new Employee({ name, email, position });
    await newEmployee.save();
    res.status(201).json({
      employee: newEmployee,
      success: true,
      message: "Employee added successfully 🟢",
    });
  } catch (error) {
    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Employee with this email already exists.",
      });
    }

    // Other server errors
    res
      .status(500)
      .json({ success: false, message: ` Error : ${error.message} 🔴` });
  }
};

//EDIT EMPLOYEE DATA
const editEmployeeData = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide at least one field to update.",
      });
    }
    //check if employee exists
    const employee = await Employee.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found.",
      });
    }

    res.status(200).json({
      success: true,
      employee,
      message: "Employee updated successfully 🟢",
    });
  } catch (error) {
    // Other server errors
    res
      .status(500)
      .json({ success: false, message: ` Error : ${error.message} 🔴` });
  }
};

// DELETE EMPLOYEE
const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    if (!deletedEmployee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found.",
      });
    }

    res.status(200).json({
      success: true,
      employee: deletedEmployee,
      message: "Employee deleted successfully 🟢",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: ` Error : ${error.message} 🔴` });
  }
};

//GET ALL EMPLOYEE
const getAllEmployee = async (req, res) => {
  try {
    const employees = await Employee.find({});

    // Handle empty array
    if (!employees || employees.length === 0)
      return res
        .status(404)
        .json({ success: false, message: "No Employee found!" });

    // Success response
    res.status(200).json({
      success: true,
      employees,
      message: "Employees data fetched successfully 🟢",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: ` Error : ${error.message} 🔴` });
  }
};

//GET ALL EMPLOYEE
const getOneEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    // Fetch employee by ID
    const employee = await Employee.findById(id);

    // Handle not found situation
    if (!employee)
      return res
        .status(404)
        .json({ success: false, message: "Employee not found!" });

    // Success response
    res.status(200).json({
      success: true,
      employee: employee,
      message: "Employee data fetched successfully 🟢",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: ` Error : ${error.message} 🔴` });
  }
};

export {
  createNewEmployee,
  editEmployeeData,
  deleteEmployee,
  getAllEmployee,
  getOneEmployee,
};
