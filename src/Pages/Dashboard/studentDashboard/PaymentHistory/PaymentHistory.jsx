// import useGetData from "../../../../Hooks/useGetData";
import { Card, Spinner, Typography } from "@material-tailwind/react";
import useFetchLink from "../../../../utils/useFetchLink";
import Heading from "../../../Shared/Heading/Heading";
import useAuth from "./../../../../Hooks/useAuth";
import { useQuery } from "react-query";
import axios from "axios";

const PaymentHistory = () => {
  const { user } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["selectedClasses"],
    queryFn: async () => {
      const res = await axios(`${url}/payment-history?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(isLoading);
  const url = useFetchLink();
  const TABLE_HEAD = ["#", "Total Items", "Price"];
  console.log(data);
  return (
    <>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <div>
          {data ? (
            <div>
              <Card className="overflow-scroll h-full w-full mt-8">
                <div className="flex flex-col justify-center mb-12">
                  <Heading heading={"Payment History"}></Heading>
                </div>
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
                    {data?.map(({ totalPrice, totalItems, _id }, index) => {
                      const isLast = index === data.length - 1;
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
                              {totalItems}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              ${totalPrice}
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Card>
            </div>
          ) : (
            <Heading heading={"No Payment"}></Heading>
          )}
        </div>
      )}
    </>
  );
};

export default PaymentHistory;
