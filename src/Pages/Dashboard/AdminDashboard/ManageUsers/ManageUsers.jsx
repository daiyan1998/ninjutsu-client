import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import useFetchLink from "../../../../utils/useFetchLink";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const url = useFetchLink();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(`${url}/users`);
    return res.json();
  });
  const TABLE_HEAD = ["Serial", "User Name", "Email", "Action"];

  const handleAdmin = (id) => {
    fetch(`${url}/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Role Changed",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };
  return (
    <div>
      <Card className="overflow-scroll h-full w-full mt-8">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Manage Users
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
            {users.map(({ email, name, _id, role }, index) => {
              const isLast = index === users.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

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
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {email}
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
                      <ButtonGroup variant="gradient">
                        <Button
                          disabled={role === "admin" ? true : false}
                          onClick={() => handleAdmin(_id)}
                          className="flex items-center gap-1"
                        >
                          <span>Admin</span>
                        </Button>
                        <Button
                          onClick={() => handleAdmin(_id)}
                          disabled={role === "instructor" ? true : false}
                          className="flex items-center gap-1"
                        >
                          <span>Instructor</span>
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
    </div>
  );
};

export default ManageUsers;
