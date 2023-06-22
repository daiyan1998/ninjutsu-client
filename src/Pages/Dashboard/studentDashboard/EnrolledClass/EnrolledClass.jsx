// import useGetData from "../../../../Hooks/useGetData";
import {
  Button,
  ButtonGroup,
  Card,
  Typography,
} from "@material-tailwind/react";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useFetchLink from "../../../../utils/useFetchLink";
import Heading from "../../../Shared/Heading/Heading";
import { useQuery } from "react-query";
import useAuth from "./../../../../Hooks/useAuth";

const EnrolledClass = () => {
  const { user } = useAuth();
  const { data, refetch } = useQuery({
    queryKey: ["selectedClasses"],
    queryFn: async () => {
      const res = await fetch(
        `${url}/selectedClasses/enrolled?email=${user?.email}`
      );
      return res.json();
    },
  });
  const enrolledClasses = data?.classes;
  console.log(enrolledClasses);
  const url = useFetchLink();
  const TABLE_HEAD = ["Serial", "Image", "Class Name", "Price", "Action"];
  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${url}/selectedClasses/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <>
      {enrolledClasses?.length === 0 || enrolledClasses === undefined ? (
        <div className="h-screen flex items-center justify-center">
          <Heading heading={"You did't added any classes yet"}></Heading>
        </div>
      ) : (
        <Card className="overflow-scroll h-full w-full mt-8">
          <Heading heading={"Enrolled Classes"}></Heading>
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
              {enrolledClasses?.map(
                ({ classImg, price, className, _id }, index) => {
                  const isLast = index === enrolledClasses.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={_id}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
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
                          <img
                            className="h-16 rounded-lg"
                            src={classImg}
                            alt=""
                          />
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
                          ${price}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue"
                          className="font-medium"
                        >
                          <ButtonGroup variant="outlined">
                            <Button
                              onClick={() => deleteHandler(_id)}
                              className="flex items-center gap-1"
                            >
                              <AiFillDelete className="text-2xl"></AiFillDelete>
                              <span>Delete</span>
                            </Button>
                            {/* <Button className="flex items-center gap-1">
                                <MdPayment className="text-2xl"></MdPayment>
                                <span>Pay</span>
                              </Button> */}
                          </ButtonGroup>
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </Card>
      )}
    </>
  );
};

export default EnrolledClass;
