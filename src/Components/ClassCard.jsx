import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { BsCurrencyDollar, BsFillPeopleFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import useFetchLink from "../utils/useFetchLink";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAdmin from "./../Hooks/useAdmin";
import App, { ThemeContext } from "../App";

const ClassCard = ({ class_ }) => {
  const { theme } = App(ThemeContext);
  const [role] = useAdmin();
  const { user } = useContext(AuthContext);
  const url = useFetchLink();
  const navigate = useNavigate();
  const location = useLocation();

  const { className, price, availableSeats, classImg, _id, instructorName } =
    class_;
  const selectClassHandler = () => {
    const selectedClass = {
      classId: _id,
      className,
      price,
      classImg,
      email: user?.email,
      enrolled: false,
    };
    if (user && user?.email) {
      console.log("clicked");
      fetch(`${url}/selectedClasses`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              title: "Selected a class",
              position: "center",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({ title: "You have to login first", icon: "warning" });
      navigate("/signin", { state: { from: location } });
    }
  };
  return (
    <div
      className={` ${
        availableSeats == 0 ? "bg-red-200" : "bg-white"
      } px-6 pt-6 pb-2 my-10 rounded-xl shadow-lg transform hover:scale-105 transition duration-500`}
    >
      <div className="relative">
        <img className="w-full rounded-xl" src={classImg} alt="Colors" />
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
        {className}
      </h1>
      <div className="my-4">
        <div className="flex gap-3 items-center">
          <span>
            <FaChalkboardTeacher className="text-xl text-light-blue-600"></FaChalkboardTeacher>
          </span>
          <p>Instrustor : {instructorName}</p>
        </div>
        <div className="flex gap-3 items-center">
          <span>
            <BsFillPeopleFill className="text-xl text-light-blue-600"></BsFillPeopleFill>
          </span>
          <p>Available Seats : {availableSeats}</p>
        </div>
        <div className="flex gap-3 items-center">
          <span>
            <BsCurrencyDollar className="text-xl text-light-blue-600"></BsCurrencyDollar>
          </span>
          <p>Price : ${price}</p>
        </div>
        <Button
          disabled={
            role === "admin" || role === "instructor" || availableSeats < 1
              ? true
              : false
          }
          onClick={selectClassHandler}
          className="mt-4 text-xl w-full  rounded-xl shadow-lg"
        >
          Sellect
        </Button>
      </div>
    </div>
  );
};

export default ClassCard;
