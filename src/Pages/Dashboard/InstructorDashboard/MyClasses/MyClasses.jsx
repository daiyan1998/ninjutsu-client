import { PencilIcon } from "@heroicons/react/24/solid";

import {
  Card,
  Typography,
  CardBody,
  Chip,
  IconButton,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import useInstructorClass from "../../../../Hooks/useInstructorClass";
import Heading from "./../../../Shared/Heading/Heading";
import SeeFeedback from "../../../../Components/SeeFeedback";

const TABLE_HEAD = [
  "#",
  "Class Name",
  "Enrolled Students",
  "Price",
  "Status",
  "Feedback",
  "",
];

const MyClasses = () => {
  const [instructorClass] = useInstructorClass();
  return (
    <Card className="h-full w-full">
      <Heading heading={"Your Classes"}></Heading>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {instructorClass.map(
              (
                { className, price, status, _id, feedback, enrolledStudents },
                index
              ) => {
                const isLast = index === instructorClass.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={_id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {index + 1}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {className}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {enrolledStudents}
                      </Typography>
                    </td>

                    <td className={classes}>${price}</td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={status}
                          color={
                            status === "approved"
                              ? "green"
                              : status === "pending"
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                    <td>
                      {status === "denied" ? (
                        <SeeFeedback feedback={feedback}></SeeFeedback>
                      ) : (
                        <Button disabled={true}>No Feedback</Button>
                      )}
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text" color="blue-gray">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default MyClasses;
