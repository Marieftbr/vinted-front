import logo from "../img/logo.3dcf8b02.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar container">
      <div className="logo-wrapper">
        <img className="logo" src={logo} alt="logo de vinted" />
      </div>
      <div className="btn-wrapper">
        <Link to="/signup">
          <button className="btn-clair">S'inscrire</button>
        </Link>
        <button className="btn-clair">Se connecter</button>
        <button className="btn-foncé">Vends tes articles</button>
      </div>
    </div>
  );
};
export default Header;
