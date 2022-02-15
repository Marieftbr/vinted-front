import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElements = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElements, {
        name: props.token,
      });
      console.log("Stripe Response ==========>", stripeResponse);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          stripeToken: stripeResponse.token.id,
          productPrice: props.price,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form-payment">
      <form onSubmit={handleSubmit}>
        <div className="first-block border-firs-el">
          <span className="title-form-payment">Résumé de la commande</span>
          <div className="block-element grey">
            <p>Commande</p>
            <p>{props.price}€</p>
          </div>
          <div className="block-element grey">
            <span>Frais protection acheteurs</span>
            <span>2€</span>
          </div>
          <div className="block-element grey">
            <span>Frais de port</span>
            <span>4€</span>
          </div>
        </div>
        <div className="first-block border-firs-el">
          <div className="block-element bold">
            <p>Total</p>
            <p>{props.price + 2 + 4}€</p>
          </div>
          <p>
            Il ne vous reste plus qu'une étape pour vous offrir
            <span className="bold"> {props.title} </span>. Vous allez payer
            <span className="bold"> {props.price}€ </span>(frais de protection
            et frais de port inclus)
          </p>
        </div>
        <div className="first-block border-firs-el">
          <CardElement />
        </div>
        <div className="first-block">
          <button className="btn-pay" type="submit">
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};
export default CheckoutForm;
