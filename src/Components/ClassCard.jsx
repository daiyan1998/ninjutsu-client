import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { BsCurrencyDollar, BsFillPeopleFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import useFetchLink from "../utils/useFetchLink";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ClassCard = ({ instructor }) => {
  const { user } = useContext(AuthContext);
  const url = useFetchLink();
  const navigate = useNavigate();
  const location = useLocation();
  const classes = instructor.classes[0];

  const { name: className, price, availableSeats, image, _id } = classes;
  const selectClassHandler = () => {
    const selectedClass = {
      classId: _id,
      className,
      price,
      image,
      email: user?.email,
    };
    if (user && user?.email) {
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
      alert("login first");
      navigate("/signin", { state: { from: location } });
    }
  };
  return (
    <div className=" bg-white px-6 pt-6 pb-2 my-10 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <div className="relative">
        <img className="w-full rounded-xl" src={image} alt="Colors" />
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
        {className}
      </h1>
      <div className="my-4">
        <div className="flex gap-3 items-center">
          <span>
            <FaChalkboardTeacher className="text-xl text-light-blue-600"></FaChalkboardTeacher>
          </span>
          <p>Instrustor : {instructor.name}</p>
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
