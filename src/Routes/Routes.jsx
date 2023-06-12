import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import InstructorsPage from "../Pages/InstructorsPage/InstructorsPage";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import Error from "../Pages/Error/Error";
import Dashboard from "../Layouts/Dashboard";
import SelectedClass from "../Pages/Dashboard/studentDashboard/SelectedClass/SelectedClass";
import Payment from "../Pages/Dashboard/studentDashboard/Payment/Payment";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/InstructorDashboard/MyClasses/MyClasses";
import PrivateRoute from "./PrivateRoute";
import EnrolledClass from "../Pages/Dashboard/studentDashboard/EnrolledClass/EnrolledClass";

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
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // NAME: Admin Dashboard
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },

      // NAME: Student Dashboard
      {
        path: "selectedClass",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "enrolled",
        element: <EnrolledClass></EnrolledClass>,
      },
      // NAME: Instructor Dashboard
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },
    ],
  },
]);
