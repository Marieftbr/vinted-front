import logo from "../img/logo.3dcf8b02.png";
const Header = () => {
  return (
    <div className="navbar container">
      <div className="logo-wrapper">
        <img className="logo" src={logo} />
      </div>
      <div className="btn-wrapper">
        <button className="btn-clair">S'inscrire</button>
        <button className="btn-clair">Se connecter</button>
        <button className="btn-foncé">Vends tes articles</button>
      </div>
    </div>
  );
};
export default Header;
