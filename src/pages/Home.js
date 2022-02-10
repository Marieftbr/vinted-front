import { useState, useEffect } from "react";
import axios from "axios";
import Bandeau from "../components/Bandeau";
import Content from "../components/Content";

const Home = () => {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    setOffers(response.data.offers);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <Bandeau />
      <Content offers={offers} />
    </div>
  );
};
export default Home;
