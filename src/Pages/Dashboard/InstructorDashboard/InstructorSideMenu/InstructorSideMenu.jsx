import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { FaRegAddressCard, FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";

const InstructorSideMenu = () => {
  return (
    <div>
      <List>
        <Link>
          <ListItem>
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Instructor Dashboard
          </ListItem>
        </Link>
        <Link to={"addClass"}>
          <ListItem>
            <ListItemPrefix>
              <FaSchool className="h-5 w-5" />
            </ListItemPrefix>
            Add Class
          </ListItem>
        </Link>
        <Link to={"myClasses"}>
          <ListItem>
            <ListItemPrefix>
              <FaRegAddressCard className="h-5 w-5" />
            </ListItemPrefix>
            My Classes
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default InstructorSideMenu;
