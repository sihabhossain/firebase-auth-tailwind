import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AuthProvider from "./Providers/AuthProvider";
import Orders from "./Components/Orders";
import PrivateRoutes from "./Routes/PrivateRoutes";
import Profile from "./Components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "orders",
        element: (
          <PrivateRoutes>
            <Orders></Orders>
          </PrivateRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
