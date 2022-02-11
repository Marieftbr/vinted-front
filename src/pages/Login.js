import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const sendData = async () => {
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/login",
      {
        email,
        password,
      }
    );
    //Cookies.set("token", response.data.token);
    props.setToken(response.data.token);
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendData();
    console.log("Vous êtes bien connecté");
    navigate("/");
  };

  return (
    <div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <span className="form-title">Se connecter</span>
        <div>
          <input
            type="email"
            placeholder="Adresse email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div>
          <button className="btn-foncé-signup-form">Se connecter</button>
        </div>
        <span className="text-little-link">
          Pas encore de compte? Inscris-toi!
        </span>
      </form>
    </div>
  );
};

export default Login;
