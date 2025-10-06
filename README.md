# Employee Management System

A full-stack **Employee Management System** built with **React**, **Node.js**, **Express**, and **MongoDB**.
The system allows you to manage employees — create, read, update, and delete employee records — with a clean UI and robust backend API.

---

## 🌟 Features

### Frontend

* Employee CRUD pages: Home, New Employee, Edit
* EmployeeTable and EmployeeRow components for dynamic listing
* Navbar showing total employees
* 404 fallback page for undefined routes
* Global context (`AppContext`) for navigation, toast notifications, and API calls
* Responsive layout with Tailwind CSS
* Success/error notifications with `react-hot-toast`

### Backend

* RESTful API endpoints for employee management
* MongoDB integration using Mongoose
* Data validation and error handling
* CORS enabled for frontend-backend communication

---

## 🛠 Tech Stack

* **Frontend:** React, Tailwind CSS, react-hot-toast, React Router v6
* **Backend:** Node.js, Express.js, MongoDB, Mongoose, dotenv
* **Other Tools:** Axios for API calls, Day.js for date formatting

---

## 📁 File Structure

### Frontend (`/src`)

```
src/
 ├─ assets/          # Images, icons, static assets
 ├─ components/      # Reusable components (Navbar, EmployeeTable, EmployeeRow)
 ├─ pages/           # Pages (Home, NewEmployee, Edit, NotFound)
 ├─ context/         # Global AppContext for state management
 └─ App.jsx          # Main app component with routing
```

### Backend

```
backend/
 ├─ config/          # Database connection logic
 ├─ controllers/     # API request handling
 ├─ models/          # Employee schema
 ├─ routes/          # API endpoints
 └─ server.js        # Express server entry point
```

---

## ⚡ Installation & Setup

### Backend

1. Clone the repository:

```bash
git clone <repository-url>
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root:

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/employeeDB
```

4. Start the backend server:

```bash
npm run dev
```

5. The backend will run at `http://localhost:5000`

---

### Frontend

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add:

```
VITE_SERVER_URL=http://localhost:5000
```

4. Start the frontend:

```bash
npm run dev
```

5. Open your browser at `http://localhost:5173`

---

## 🔗 API Endpoints

**Base URL:** `/api/employee`
| Endpoint Name        | Method | URL                                          | Request Body Example                                                          | Description                        |
| -------------------- | ------ | -------------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------- |
| Create Employee      | POST   | `http://localhost:5000/api/employee`         | `{ "name": "Shivani", "email": "shivanigmail.com", "position": "Developer" }` | Add a new employee                 |
| Read All Employees   | GET    | `http://localhost:5000/api/employee/get-all` | -                                                                             | Fetch the list of all employees    |
| Read Single Employee | GET    | `http://localhost:5000/api/employee/:id`     | -                                                                             | Get details of a specific employee |
| Update Employee      | PUT    | `http://localhost:5000/api/employee/:id`     | `{ "name": "Shivani Pandey" }`                                                | Edit employee details (partial OK) |
| Delete Employee      | DELETE | `http://localhost:5000/api/employee/:id`     | -                                                                             | Remove employee by ID              |
-                                                                          |
-                                                                            |

---

## 🚀 Usage

### Frontend

* Navigate to **Home** to view all employees
* Click **Add Employee** to create a new employee
* Use **Edit** and **Delete** icons in the table to modify or remove employees
* Search/filter employees by name, email, or position
* Visit any undefined route to see the **NotFound** fallback page

### Backend

* Use the `/api/employee` endpoints to manage employee data
* Frontend automatically communicates with backend via Axios and `VITE_SERVER_URL`

---

## 📝 Notes

* Ensure MongoDB Atlas or local MongoDB is running
* Tailwind CSS provides responsive and modern UI
* `react-hot-toast` handles success/error notifications globally
* The frontend context ensures **live updates** when employees are added, edited, or deleted

---

