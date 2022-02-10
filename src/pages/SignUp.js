import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  //Création de mon cookie qui contiendra le token

  const sendData = async () => {
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/signup",
      {
        email,
        username,
        password,
        newsletter,
      }
    );

    Cookies.set("token", response.data.token);
  };

  const handleUsername = (event) => {
    const value = event.target.value;
    setUsername(value);
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
    console.log("Votre utilisateur a bien été crée");
  };

  const handleNewsLetter = (event) => {
    const value = event.target.checked;
    setNewsletter(value);
  };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  return (
    <div className="signup-form">
      <span className="form-title">S'inscrire</span>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div>
          <input
            className="checkbox-form"
            type="checkbox"
            name="newsletter"
            value={newsletter}
            onClick={handleNewsLetter}
          />
          <label name="newsletter">S'inscrire à notre newsletter</label>
        </div>
        <div className="little-text">
          <p>
            * En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <div className="form-btn-signup">
          <button className="btn-foncé-signup-form">S'inscrire</button>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
