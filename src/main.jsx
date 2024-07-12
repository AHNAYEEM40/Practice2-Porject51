import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root.jsx";
import Home from "./Component/Home.jsx";
import Login from "./Component/Login.jsx";
import Register from "./Component/Register.jsx";
import Optional from "./Component/Optional.jsx";
import AuthProvide from "./Component/AuthProvide.jsx";
import Route from "./Component/Route.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/optional",
        element: <Route><Optional></Optional></Route>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvide>
      <RouterProvider router={router} />
    </AuthProvide>
  </React.StrictMode>
);
