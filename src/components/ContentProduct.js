import { useNavigate } from "react-router-dom";

const ContentProduct = (props) => {
  const navigate = useNavigate();
  return (
    <div className="product-page">
      <div className="content-product-wrapper">
        <div className="product-img">
          <img
            className="product-picture"
            src={props.offer.product_image.url}
            alt="le produit"
          />
        </div>
        <div className="product-infos">
          <span className="product-price">{props.offer.product_price}€</span>
          <div className="product-table">
            <ul className="product-list">
              {props.offer.product_details.map((detail, index) => {
                return (
                  <li key={index}>
                    <span className="first-element-list">
                      {Object.keys(detail)[0]}
                    </span>
                    <span className="second-element-list">
                      {Object.values(detail)[0]}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="product-text">
            <p className="product-title">{props.offer.product_name}</p>
            <p className="product-description">
              {props.offer.product_description}
            </p>
            <div className="product-owner">
              <img
                className="product-owner-profile"
                src={props.offer.owner.account.avatar.url}
                alt=""
              />
              <span>{props.offer.owner.account.username}</span>
            </div>
          </div>
          <button
            className="btn-foncé"
            onClick={() =>
              navigate("/payment", {
                state: {
                  title: props.offer.product_name,
                  price: props.offer.product_price,
                },
              })
            }
          >
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContentProduct;
