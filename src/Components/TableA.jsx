import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { AiFillDelete } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import Swal from "sweetalert2";

const TableA = ({ datas, refetch, TABLE_HEAD }) => {
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
        fetch(`http://localhost:5000/selectedClasses/${id}`, {
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
    <Card className="overflow-scroll h-full w-full mt-8">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              My Selected Classes
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the Selected Classes
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max"></div>
        </div>
      </CardHeader>
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
          {datas.map(({ image, price, className, _id }, index) => {
            const isLast = index === datas.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
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
                    <img className="h-16 rounded-lg" src={image} alt="" />
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
                      <Button className="flex items-center gap-1">
                        <MdPayment className="text-2xl"></MdPayment>
                        <span>Pay</span>
                      </Button>
                    </ButtonGroup>
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default TableA;
