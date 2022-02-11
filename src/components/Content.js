import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Content = (props) => {
  return (
    <div className="product-card-list">
      {props.offers.map((offer, index) => {
        return (
          <Link to={`/product/${offer._id}`} key={index}>
            <ProductCard key={index} product={offer} />
          </Link>
        );
      })}
    </div>
  );
};
export default Content;
