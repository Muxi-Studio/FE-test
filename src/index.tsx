// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './pages/Menu';
import AddMumber from './pages/mainpage/controlmumber/AddMember';
// import MemberMenu from './pages/mainpage/MemberMenu';
// import searchMember from './pages/mainpage/controlmumber/GetEmployeeList';
import ShowEmployee from './pages/mainpage/controlmumber/GetEmployeeList';
// import GetMember from './pages/mainpage/controlmumber/Getmunber';
import DeleteMumber from './pages/mainpage/controlmumber/DeleteMember';
// import DeleteMany from './pages/mainpage/controlmumber/Deletemany';
import GetAllEmployeeList from './pages/mainpage/controlmumber/GetEmployeeList';

// 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/membermenu',
    element: <GetAllEmployeeList />
  },
  {
    path: '/addmember',
    element: <AddMumber />
  },
  {
    path: '/searchMember',
    element: <ShowEmployee />
  },
  {
    path: '/deletemember',
    element: <DeleteMumber />
  },
  // {
  //   path:'/deletemany',
  //   element:<DeleteMany />
  // }
])

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <RouterProvider router={router} />
  );
}
