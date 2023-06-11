import React from "react";
// import { useCountries } from "use-react-countries";
import {
  Card,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import { CreditCardIcon, LockClosedIcon } from "@heroicons/react/24/solid";

function formatCardNumber(value) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

function formatExpires(value) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).\*/g, "$1/$2");
}
const PaymentForm = () => {
  //   const { countries } = useCountries();
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");

  return (
    <Card className="w-full max-w-[24rem]">
      <CardBody>
        <Tabs value={type} className="overflow-visible">
          <TabsBody
            className="!overflow-x-hidden !overflow-y-visible"
            animate={{
              initial: {
                x: type === "card" ? 400 : -400,
              },
              mount: {
                x: 0,
              },
              unmount: {
                x: type === "card" ? 400 : -400,
              },
            }}
          >
            <TabPanel value="card" className="p-0">
              <form className="mt-12 flex flex-col gap-4">
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-4 font-medium"
                  >
                    Personal Details
                  </Typography>
                  <Input type="email" label="Email Address" />
                </div>

                <div className="my-6">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-4 font-medium"
                  >
                    Card Details
                  </Typography>

                  <Input
                    label="Card Number"
                    maxLength={19}
                    value={formatCardNumber(cardNumber)}
                    onChange={(event) => setCardNumber(event.target.value)}
                    icon={
                      <CreditCardIcon className="h-5 w-5 text-blue-gray-300" />
                    }
                  />
                  <div className="my-4 flex items-center gap-4">
                    <Input
                      label="Expires"
                      maxLength={5}
                      value={formatExpires(cardExpires)}
                      onChange={(event) => setCardExpires(event.target.value)}
                      containerProps={{ className: "min-w-[72px]" }}
                    />
                    <Input
                      label="CVC"
                      maxLength={4}
                      containerProps={{ className: "min-w-[72px]" }}
                    />
                  </div>
                  <Input label="Holder Name" />
                </div>
                <Button size="lg">Pay Now</Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                  secure and encrypted
                </Typography>
              </form>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default PaymentForm;
