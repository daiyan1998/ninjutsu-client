import {} from "@heroicons/react/24/outline";
import {
  Typography,
  Button,
  CardBody,
  Chip,
  ButtonGroup,
} from "@material-tailwind/react";
import useFetchLink from "../../../../utils/useFetchLink";
import Swal from "sweetalert2";
import FeedbackModal from "../../../../Components/FeedbackModal";
import useGetData from "../../../../Hooks/useGetData";

const ManageClasses = () => {
  const url = useFetchLink();
  // const [instructorClass, refetch] = useInstructorClass();
  const [data, , refetch] = useGetData("manageClass", "manageClass");
  const instructorClass = data;
  const TABLE_HEAD = [
    "#",
    "Class Image",
    "Class Name",
    "Instructor Name",
    "Available Seats",
    "Price",
    "Status",
    "Action",
  ];

  const handleApproval = (id, status) => {
    fetch(`${url}/instructorClass/${id}/${status}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Status updated",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };
  return (
    <>
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
                {
                  className,
                  price,
                  status,
                  seats,
                  instructorName,
                  instructorEmail,
                  classImg,
                  _id,
                },
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
                    <td>
                      <img className="rounded h-12" src={classImg} alt="" />
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
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {instructorName}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {instructorEmail}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>{seats}</td>

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

                    <td className={classes}>
                      <ButtonGroup variant="outlined">
                        <Button
                          disabled={
                            status === "approved" || status === "denied"
                              ? true
                              : false
                          }
                          onClick={() => handleApproval(_id, "approved")}
                        >
                          Approve
                        </Button>
                        <Button
                          disabled={
                            status === "approved" || status === "denied"
                              ? true
                              : false
                          }
                          onClick={() => handleApproval(_id, "deny")}
                        >
                          Deny
                        </Button>
                        <Button disabled={status === "approved" ? true : false}>
                          <FeedbackModal
                            id={_id}
                            name={instructorName}
                          ></FeedbackModal>
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </>
  );
};

export default ManageClasses;
