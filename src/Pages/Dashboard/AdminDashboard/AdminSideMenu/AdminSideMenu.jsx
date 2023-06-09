import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { FaRegAddressCard, FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";
const AdminSideMenu = () => {
  return (
    <>
      <List>
        <Link to={"/"}>
          <ListItem>
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Admin Dashboard
          </ListItem>
        </Link>
        <Link to={"manageClasses"}>
          <ListItem>
            <ListItemPrefix>
              <FaSchool className="h-5 w-5" />
            </ListItemPrefix>
            Manage Classes
          </ListItem>
        </Link>
        <Link to={"manageUsers"}>
          <ListItem>
            <ListItemPrefix>
              <FaRegAddressCard className="h-5 w-5" />
            </ListItemPrefix>
            Manage Users
          </ListItem>
        </Link>
      </List>
    </>
  );
};

export default AdminSideMenu;
