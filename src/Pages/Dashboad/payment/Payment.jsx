import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./checkoutfrom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
console.log(stripePromise);
const Payment = () => {
  <div className="bg-base-200">
    <h1 className="bg-white">payment system</h1>
    <Elements className="card p-3 gap-2 w-full h-fit " stripe={stripePromise}>
      <CheckoutForm></CheckoutForm>
    </Elements>
  </div>;
};

export default Payment;
