import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { HomeIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { FaRegAddressCard, FaMoneyCheck } from "react-icons/fa";

import { Link } from "react-router-dom";
const StudentSideMenu = () => {
  return (
    <>
      <List>
        <Link to={"/"}>
          <ListItem>
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Student Dashboard
          </ListItem>
        </Link>
        <Link to={"selectedClass"}>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Selected Classes
          </ListItem>
        </Link>
        <ListItem>
          <ListItemPrefix>
            <FaRegAddressCard className="h-5 w-5" />
          </ListItemPrefix>
          Enrolled Classes
        </ListItem>
        <Link to={"payment"}>
          <ListItem>
            <ListItemPrefix>
              <FaMoneyCheck className="h-5 w-5" />
            </ListItemPrefix>
            Payment
          </ListItem>
        </Link>
      </List>
    </>
  );
};

export default StudentSideMenu;
