import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = (props) => {
  const [hasPayed, setHasPayed] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const shipment = 2;
  const protection = 4;
  const amount = props.price + shipment + protection;
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElements = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElements, {
        name: props.token,
      });
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeResponse.token.id,
          amount: amount,
        }
      );
      setHasPayed(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="payment-page">
      <div className="form-payment">
        <form onSubmit={handleSubmit}>
          <div className="first-block border-firs-el">
            <h1 className="title-form-payment">Résumé de la commande</h1>
            <div className="block-element grey">
              <p>Commande</p>
              <p>{props.price}€</p>
            </div>
            <div className="block-element grey">
              <span>Frais protection acheteurs</span>
              <span>{protection}€</span>
            </div>
            <div className="block-element grey">
              <span>Frais de port</span>
              <span>{shipment}€</span>
            </div>
          </div>
          <div className="first-block border-firs-el">
            <div className="block-element bold">
              <p>Total</p>
              <p>{amount}€</p>
            </div>
            <p>
              Il ne vous reste plus qu'une étape pour vous offrir
              <span className="bold"> {props.title} </span>. Vous allez payer
              <span className="bold"> {amount}€ </span>(frais de protection et
              frais de port inclus)
            </p>
          </div>
          {hasPayed ? (
            <div className="first-block">Merci pour votre achat.</div>
          ) : (
            <div>
              <div className="first-block border-firs-el">
                <CardElement />
              </div>
              <div className="first-block">
                <button className="btn-pay" type="submit">
                  Payer
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default CheckoutForm;
