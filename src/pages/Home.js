import Bandeau from "../components/Bandeau";
import Content from "../components/Content";

const Home = (props) => {
  return props.isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <Bandeau />
      <Content offers={props.offers} />
    </div>
  );
};
export default Home;
