import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import InstructorsPage from "../Pages/InstructorsPage/InstructorsPage";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import Error from "../Pages/Error/Error";
import Dashboard from "../Layouts/Dashboard";
import SelectedClass from "../Pages/Dashboard/SelectedClass/SelectedClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/instructors",
        element: <InstructorsPage></InstructorsPage>,
      },
      {
        path: "/classes",
        element: <ClassesPage></ClassesPage>,
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "selectedClass",
        element: <SelectedClass></SelectedClass>,
      },
    ],
  },
]);
