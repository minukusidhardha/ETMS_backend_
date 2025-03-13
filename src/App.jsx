import { Route, Routes } from "react-router"
import AdminDashboard from "./components/admin/dashboard"
import EmployeeOnboarding from "./components/admin/onboarding_emp"
import EmployeeDashboard from "./components/employee/dashboard"
import Login from "./components/login"
import EmployeeList from "./components/admin/Employeelist"
import './App.css'
import AssignTask from "./components/admin/Assigntask"
import Seetasks from "./components/employee/Employeetask"
import AddProject from "./components/admin/Addproject"
import Addtask from "./components/admin/Addtask"
import { Bounce, ToastContainer } from "react-toastify"
import Employeedetails from "./components/employee/employeedetails"
function App() {

  return (
    <><ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard /> }/>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
         <Route path="/admin/employee-onboarding" element={<EmployeeOnboarding />}/> 
         <Route path="/admin/employees" element={<EmployeeList />}/> 
         <Route path="/admin/assign-task" element={<AssignTask />}/>   
         <Route path="/employee/task" element={<Seetasks />}/>
         <Route path="/admin/addproject" element={<AddProject />}/>
         <Route path="/admin/addtask" element={<Addtask />}/>
         <Route path="/employee/employeedetails/:id" element={<Employeedetails />}/>
       </Routes>
    </>
      
  )
}

export default App
