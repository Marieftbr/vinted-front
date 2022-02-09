const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="card-product">
        <div className="card-user-block">
          <img
            className="card-profile-user"
            src={props.product.owner.account.avatar.url}
          ></img>
          <span className="card-user-name">
            {props.product.owner.account.username}
          </span>
        </div>
        <img
          className="card-product-img"
          src={props.product.product_image.secure_url}
          alt=""
        />
        <div className="card-bottom">
          <span className="card-product-price">
            {props.product.product_price}
          </span>

          {props.product.product_details.map((elem, index) => {
            return (
              <span className="card-product-size" key={index}>
                {" "}
                {elem.TAILLE ? elem.TAILLE : ""}
              </span>
            );
          })}

          {props.product.product_details.map((elem, index) => {
            return (
              <span className="card-product-marque" key={index}>
                {" "}
                {elem.MARQUE ? elem.MARQUE : ""}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
