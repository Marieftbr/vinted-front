import { useState, useEffect } from "react";
import axios from "axios";
import ContentProduct from "../components/ContentProduct";
import { useParams } from "react-router-dom";

const Product = () => {
  const [offer, setOffer] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    setOffer(response.data.offers.find((offer) => offer._id === id));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <ContentProduct offer={offer} />
    </div>
  );
};
export default Product;
