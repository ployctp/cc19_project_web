import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import History from "../pages/History";
import Checkout from "../pages/Checkout";
import Login from "../pages/auth/Login";
import Regiter from "../pages/auth/Regiter";
import Layout from "../layouts/Layout";
import Dashboard from "../pages/Admin/Dashboard";
import Category from "../pages/Admin/Category";
import Product from "../pages/Admin/Product";
import LayoutAdmin from "../layouts/LayoutAdmin";
import Manage from "../pages/Admin/Manage";
import LayoutUser from "../layouts/LayoutUser";
import HomeUser from "../pages/user/HomeUser";
import ProtectRouteUser from "./ProtectRouteUser";
import ProtectRouteAdmin from "./ProtectRouteAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "history", element: <History /> },
      { path: "checkout", element: <Checkout /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Regiter /> },
    ]
  },
  {
    path:'/admin',
    element: <ProtectRouteAdmin element={LayoutAdmin } />,
    children:[
      {index: true, element:<Dashboard />},
      {path:'category',element:<Category />},
      {path: 'product', element:<Product />},
      {path: 'manage', element:<Manage />}
    ]

  },
  {
    path:'/user',
    // element: <LayoutUser />,
    element: <ProtectRouteUser element={<LayoutUser />}/>,
    children:[
      {index: true, element:<HomeUser />},
      
    ]

  }
])

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;
