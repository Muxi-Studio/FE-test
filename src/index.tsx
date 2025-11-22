// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './pages/manu';
import AddMumber from './pages/mainpage/controlmumber/Addmumber';
import MumberMenu from './pages/mainpage/MumberMenu';
import SearchMumber from './pages/mainpage/controlmumber/Searchmumber';
import GetMumber from './pages/mainpage/controlmumber/Getmunber';
import DeleteMumber from './pages/mainpage/controlmumber/Deletemumber';
// import DeleteMany from './pages/mainpage/controlmumber/Deletemany';

// 
const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/register",
    element:<Register />
  },
  {
    path:'/menu',
    element:<Menu />
  },
  {
    path:'/mumbermenu',
    element:<MumberMenu />
  },
  {
    path:'/addmumber',
    element:<AddMumber />
  },
  {
    path:'/searchmumber',
    element:<SearchMumber />
  },
  {
    path:'/getmumber',
    element:<GetMumber />
  },
  {
    path:'/deletemumber',
    element:<DeleteMumber />
  },
  {
    
  }
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
