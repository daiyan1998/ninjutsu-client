import { Button } from "@material-tailwind/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import PaymentForm from "./PaymentForm";
import { useEffect, useState } from "react";
import axios from "axios";
import useFetchLink from "../../../../utils/useFetchLink";
import useAuth from "./../../../../Hooks/useAuth";

const CheckoutForm = ({ data }) => {
  const { user } = useAuth();
  const url = useFetchLink();
  const { totalPrice } = data;
  const { classes } = data;
  const id = classes.map((cls) => cls.classId);
  // Stripe
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState();
  const [clientSecret, setClientSecret] = useState();
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    axios.post(`${url}/create-payment-intent`, { totalPrice }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axios]);

  const enroll = () => {
    console.log("enroll");
    axios.patch(`${url}/enroll`, { id });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error);
    } else {
      setCardError("");
      // console.log({ paymentMethod });
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log({ paymentIntent, cardError });
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      enroll();
      setTransactionId(paymentIntent.id);
      const transactionId = paymentIntent.id;
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <Button type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </Button>
        {/* <PaymentForm></PaymentForm> */}
      </form>
      {cardError && <p className="text-red-500">{cardError} </p>}
      {transactionId && <p className="text-green-500">Success</p>}
    </div>
  );
};

export default CheckoutForm;
