import express from 'express';
import Employee from '../models/Employee.Model.js';
import { createNewEmployee,editEmployeeData,deleteEmployee,getAllEmployee,getOneEmployee,} from '../controllers/employee.controllers.js'
const router = express.Router();

// ---------------CRUD ROUTERS------------------

router.post("/", createNewEmployee);
router.get("/get-all", getAllEmployee);
router.get("/:id", getOneEmployee);
router.put("/:id", editEmployeeData);
router.delete("/:id", deleteEmployee);

export default router;






