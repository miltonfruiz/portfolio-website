import React from "react";
import "./App.css";
import Layout from "./layouts/Layouts";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import userActions from "./store/actions/user";
import LogIn from "./components/LogIn";

const router = createBrowserRouter([
  { path: "/login", element: <LogIn /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cities", element: <Cities /> },
      { path: "/details", element: <Details /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  // {
  //   path: "*",
  //   element: <Error404 />,
  // },
]);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.authenticate());
  }, []);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
