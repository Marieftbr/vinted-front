import dechirure from "../img/tear.42d6cec6.svg";

const Bandeau = () => {
  return (
    <div className="bandeau">
      <div className="bandeau-img">
        <img className="dechirure" src={dechirure} alt="dechirure" />
        <div className="block-over">
          <h1>Prêts à faire du tri dans vos placards?</h1>
          <button className="btn-foncé left">Commencer à vendre</button>
        </div>
      </div>
    </div>
  );
};
export default Bandeau;
