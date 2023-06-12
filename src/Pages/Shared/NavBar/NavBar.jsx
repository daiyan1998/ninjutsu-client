import {
  Avatar,
  Button,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import logo from "../../../assets/shuriken.png";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to={"/"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <span className="flex items-center">Home</span>
        </Typography>
      </Link>
      <Link to={"/instructors"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <span className="flex items-center">Instructors</span>
        </Typography>
      </Link>
      <Link to={"/classes"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <span className="flex items-center">Classes</span>
        </Typography>
      </Link>
      {user && (
        <Link to={"/dashboard"}>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <span className="flex items-center">Dashboard</span>
          </Typography>
        </Link>
      )}
    </ul>
  );

  return (
    <div>
      <Navbar className="mx-auto  rounded-none max-w-screen-2xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium flex items-center gap-2"
          >
            <img className="h-12" src={logo} alt="" />
            <span className="font-semibold">NinJutsu</span>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <div className="flex gap-2 items-center">
            {user ? (
              <>
                <Avatar
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://cdn.reviewwave.com/site/img/avatars/no-profile-picture.png"
                  }
                  alt="avatar"
                  withBorder={true}
                  className="p-0.5"
                />
                <Button
                  onClick={logOut}
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Logout</span>
                </Button>
              </>
            ) : (
              <Link to={"signin"}>
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Login</span>
                </Button>
              </Link>
            )}
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            {user ? (
              <Button
                onClick={logOut}
                variant="gradient"
                size="sm"
                fullWidth
                className="mb-2"
              >
                <span>Logout</span>
              </Button>
            ) : (
              <Link to={"signin"}>
                <Button variant="gradient" size="sm" fullWidth className="mb-2">
                  <span>Login</span>
                </Button>
              </Link>
            )}
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavBar;
