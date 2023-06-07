import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { BsCurrencyDollar, BsFillPeopleFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";

const ClassCard = ({ instructor }) => {
  const {
    name: className,
    price,
    availableSeats,
    image,
  } = instructor.classes[0];
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
        <Button className="mt-4 text-xl w-full  rounded-xl shadow-lg">
          Sellect
        </Button>
      </div>
    </div>
  );
};

export default ClassCard;
