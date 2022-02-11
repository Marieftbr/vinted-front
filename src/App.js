import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Login from "./pages/Login";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [token, setToken] = useState(Cookies.get("token"));

  const disconnect = () => {
    Cookies.remove("token");
    setToken();
  };

  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (query) => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers",
      { params: query }
    );
    setOffers(response.data.offers);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header token={token} disconnect={disconnect} fetchData={fetchData} />
        <Routes>
          <Route
            path="/"
            element={<Home offers={offers} isLoading={isLoading} />}
          />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login setToken={setToken} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
