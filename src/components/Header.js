import logo from "../img/logo.3dcf8b02.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { Range, getTrackBackground } from "react-range";

const Header = (props) => {
  const MIN = 0;
  const MAX = 50;
  const location = useLocation();

  const [search, setSearch] = useState("");
  const [values, setValues] = useState([MIN, MAX]);

  useEffect(() => {
    const query = {
      priceMin: values[0],
      priceMax: values[1],
    };
    if (search) {
      query.title = search;
    }
    props.fetchData(query);
  }, [search, values]);

  return (
    <div className="navbar container">
      <div className="logo-wrapper">
        <a href="/">
          <img className="logo" src={logo} alt="logo de vinted" />
        </a>
      </div>
      <div className="search-container">
        <input
          className="input-search"
          type="text"
          placeholder="Recherche des articles"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        {location.pathname === "/" ? (
          <div className="input-range-wrapper">
            <label>Prix entre :</label>
            <Range
              step={5}
              min={MIN}
              max={MAX}
              values={values}
              rtl={false}
              onChange={setValues}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    display: "flex",
                    backgroundColor: "#ccc",
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: "5px",
                      width: "100%",
                      borderRadius: "4px",
                      background: getTrackBackground({
                        values,
                        colors: ["#ccc", "#09b1ba", "#ccc"],
                        min: MIN,
                        max: MAX,
                        rtl: false,
                      }),
                      alignSelf: "center",
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ index, props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "15px",
                    width: "15px",
                    borderRadius: "50px",
                    backgroundColor: "#09b1ba",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-28px",
                      color: "#fff",
                      fontWeight: "100",
                      fontSize: "14px",
                      fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                      padding: "4px",
                      borderRadius: "4px",
                      backgroundColor: "#09b1ba",
                    }}
                  >
                    {Math.trunc(values[index].toFixed(1))}
                  </div>
                </div>
              )}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      {props.token ? (
        <div className="btn-wrapper">
          <button className="btn-clair" onClick={props.disconnect}>
            Se déconnecter
          </button>
          <Link to="/publish">
            <button className="btn-foncé">Vends tes articles</button>
          </Link>
        </div>
      ) : (
        <div className="btn-wrapper">
          <Link to="/signup">
            <button className="btn-clair">S'inscrire</button>
          </Link>
          <Link to="/login">
            <button className="btn-clair">Se connecter</button>
          </Link>
          <Link to="/publish">
            <button className="btn-foncé">Vends tes articles</button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Header;
