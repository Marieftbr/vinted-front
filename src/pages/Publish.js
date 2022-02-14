import { useState } from "react";
import axios from "axios";

const Publish = (props) => {
  const [productImg, setProductImg] = useState();
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productEtat, setProductEtat] = useState("");
  const [productLieu, setProductLieu] = useState("");
  const [productPrize, setProductPrize] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("picture", productImg);
      formData.append("title", productTitle);
      formData.append("description", productDescription);
      formData.append("price", parseInt(productPrize));
      formData.append("condition", productEtat);
      formData.append("city", productLieu);
      formData.append("brand", productBrand);
      formData.append("size", parseInt(productSize));
      formData.append("color", productColor);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${props.token}`,
          },
        }
      );

      //setData(response.data);
      console.log("Product is created");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container page-container">
      <span className="title">Vends ton article</span>
      <form onSubmit={handleSubmit}>
        <div className="block-form">
          <div className="dot-line">
            {/* <button className="btn-clair btn-picture-publish-form">
              + Ajouter une photo
            </button> */}
            <input
              type="file"
              onChange={(event) => setProductImg(event.target.files[0])}
            />
          </div>
        </div>
        <div className="block-form">
          <div className="form-element-block form-element-block-border">
            <label>Titre</label>
            <input
              type="text"
              placeholder="ex: Chemise Sézane Verte"
              onChange={(event) => {
                setProductTitle(event.target.value);
              }}
              value={productTitle}
            />
          </div>
          <div className="form-element-block ">
            <label>Décris ton article</label>
            <input
              type="text"
              placeholder="ex: porté quelquefois, taille correctement"
              value={productDescription}
              onChange={(event) => {
                setProductDescription(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="block-form">
          <div className="form-element-block form-element-block-border">
            <label>Marque</label>
            <input
              type="text"
              placeholder="ex: Zara"
              value={productBrand}
              onChange={(event) => {
                setProductBrand(event.target.value);
              }}
            />
          </div>
          <div className="form-element-block form-element-block-border">
            <label>Taille</label>
            <input
              type="text"
              placeholder="ex: L"
              value={productSize}
              onChange={(event) => {
                setProductSize(event.target.value);
              }}
            />
          </div>
          <div className="form-element-block form-element-block-border">
            <label>Couleur</label>
            <input
              type="text"
              placeholder="ex: Bleu"
              value={productColor}
              onChange={(event) => {
                setProductColor(event.target.value);
              }}
            />
          </div>
          <div className="form-element-block form-element-block-border">
            <label>Etat</label>
            <input
              type="text"
              placeholder="ex: neuf avec étiquette"
              value={productEtat}
              onChange={(event) => {
                setProductEtat(event.target.value);
              }}
            />
          </div>
          <div className="form-element-block form-element-block-border">
            <label>Lieu</label>
            <input
              type="text"
              placeholder="ex: Paris"
              value={productLieu}
              onChange={(event) => {
                setProductLieu(event.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <div className="block-form">
            <div className="form-element-block">
              <label>Prix</label>
              <input
                type="text"
                placeholder="5€"
                value={productPrize}
                onChange={(event) => {
                  setProductPrize(event.target.value);
                }}
              />
            </div>
            <div className="form-checkbox-exchange">
              <input type="checkbox" />
              <label>Je suis intéressé(e) par les échanges</label>
            </div>
          </div>
        </div>
        <button className="form-publish-btn btn-foncé" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};
export default Publish;
