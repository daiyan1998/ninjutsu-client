import {
  Drawer,
  Button,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { AiOutlineMenuFold } from "react-icons/ai";

import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import StudentSideMenu from "../Pages/Dashboard/studentDashboard/studentSideMenu/StudentSideMenu";
import AdminSideMenu from "../Pages/Dashboard/AdminDashboard/AdminSideMenu/AdminSideMenu";
import useAdmin from "../Hooks/useAdmin";
import InstructorSideMenu from "../Pages/Dashboard/InstructorDashboard/InstructorSideMenu/InstructorSideMenu";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const openDrawer = () => setOpen(true);
  const [role] = useAdmin();
  const closeDrawer = () => setOpen(false);

  // Calculate Screen Width
  function getCurrentDimention() {
    const screenWidth = window.innerWidth;
    return screenWidth;
  }

  const [screenSize, setScreenSize] = useState(getCurrentDimention);
  const smallScreen = screenSize < 720 ? true : false;

  useEffect(() => {
    const updateDimention = () => {
      setScreenSize(getCurrentDimention());
    };
    window.addEventListener("resize", updateDimention);

    return () => {
      window.removeEventListener("resize", updateDimention);
    };
  }, [screenSize]);
  return (
    <>
      <div>
        <button
          className={`${open ? "hidden" : "block"} absolute top-0 left-0`}
          onClick={openDrawer}
        >
          <AiOutlineMenuFold className="text-3xl text-light-blue-700" />
        </button>
        <Outlet></Outlet>
      </div>
      <Drawer
        open={open}
        // onClose={closeDrawer}
        onClick={smallScreen ? closeDrawer : false}
        overlay={false}
        className=" bg-blue-gray-50 w-[250px] duration-300 overflow-hidden"
      >
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Ninjutsu
          </Typography>
          {smallScreen && (
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <XMarkIcon strokeWidth={2} className="h-5 w-5" />
            </IconButton>
          )}
        </div>
        {role == "admin" ? (
          <AdminSideMenu></AdminSideMenu>
        ) : role == "instructor" ? (
          <InstructorSideMenu></InstructorSideMenu>
        ) : (
          <StudentSideMenu></StudentSideMenu>
        )}
        <hr className="border-3 border-gray-500 hover:border-purple-500 drop-shadow-xl" />
        {/* NAME: Common */}
        <List>
          <Link to={"/"}>
            <ListItem>
              <ListItemPrefix>
                <HomeIcon className="h-5 w-5" />
              </ListItemPrefix>
              Home
            </ListItem>
          </Link>
          <Link to={"/classes"}>
            <ListItem>
              <ListItemPrefix>
                <SiGoogleclassroom className="h-5 w-5" />
              </ListItemPrefix>
              Classes
            </ListItem>
          </Link>
          <Link to={"/instructors"}>
            <ListItem>
              <ListItemPrefix>
                <FaChalkboardTeacher className="h-5 w-5" />
              </ListItemPrefix>
              Instructors
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  );
};

export default Dashboard;
