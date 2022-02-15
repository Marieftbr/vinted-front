import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";

const Payments = (props) => {
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");
  const location = useLocation();
  const { title, price } = location.state;

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm title={title} price={price} token={props.token} />
    </Elements>
  );
};
export default Payments;
