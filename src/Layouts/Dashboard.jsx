import {
  Drawer,
  Button,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import StudentSideMenu from "../Pages/Dashboard/studentDashboard/studentSideMenu/StudentSideMenu";
import AdminSideMenu from "../Pages/Dashboard/AdminDashboard/AdminSideMenu/AdminSideMenu";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const openDrawer = () => setOpen(true);
  const isAdmin = true;
  // const closeDrawer = () => setOpen(false);

  return (
    <>
      <div>
        <Button className={open ? "hidden" : "block"} onClick={openDrawer}>
          Open Drawer
        </Button>
        <Outlet></Outlet>
      </div>
      <Drawer open={open} overlay={false}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Ninjutsu
          </Typography>
          {/* <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton> */}
        </div>
        {isAdmin ? (
          <AdminSideMenu></AdminSideMenu>
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
