import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import App from "./pages/Home"
import Register from "./pages/register";
import Createdepart from "./pages/createdepart";
import EmployeeCreateForm from "./pages/employeeCreateForm";
import EmployeeList from "./pages/employeeList";
const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/createdepart',
        element:<Createdepart/>
    },
    {
        path:'/employees/create',
        element: <EmployeeCreateForm />
    },
    {
        path:'/employees',
        element: <EmployeeList />
    }
])
export default router