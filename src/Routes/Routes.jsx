import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/Home/SignUp/SignUp";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "signUp",
                element: <SignUp></SignUp>
            },
      ]
    },
  ]);