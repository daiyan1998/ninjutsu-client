import { loadStripe } from "@stripe/stripe-js";
import Heading from "../../../Shared/Heading/Heading";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useFetchLink from "../../../../utils/useFetchLink";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "react-query";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const { user } = useAuth();
  const url = useFetchLink();
  const { data, isLoading } = useQuery({
    queryKey: ["selectedClasses"],
    queryFn: async () => {
      const res = await fetch(`${url}/selectedClasses?email=${user?.email}`);
      return res.json();
    },
  });
  return (
    !isLoading && (
      <div>
        <Heading heading={"Payment"}></Heading>
        <Elements stripe={stripePromise}>
          <CheckoutForm data={data}></CheckoutForm>
        </Elements>
      </div>
    )
  );
};

export default Payment;
