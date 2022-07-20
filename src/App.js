import React, { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "use-local-storage";
import "./App.css";
import CountryCard from "./components/CountryCard";

const App = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  // GET request
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/all`);
        // setData(response.data);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const [cardDisplay, setCardDisplay] = useState(["AUS", "LBN", "VAT", "PRK"]);

  const [regionFilter, setRegionFilter] = useState("Oceania");

  return (
    <div className='App' data-theme={theme}>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Switch
      </button>
      <ul>
        <li>
          <button onClick={() => setRegionFilter("Africa")}>Africa</button>
        </li>
        <li>
          <button onClick={() => setRegionFilter("Americas")}>Americas</button>
        </li>
        <li>
          <button onClick={() => setRegionFilter("Asia")}>Asia</button>
        </li>
        <li>
          <button onClick={() => setRegionFilter("Europe")}>Europe</button>
        </li>
        <li>
          <button onClick={() => setRegionFilter("Oceania")}>Oceania</button>
        </li>
      </ul>
      <main className='card-grid'>
        {loading && <p>Loading...</p>}
        {data &&
          data.map((country) => {
            return (
              //cardDisplay.includes(country.cca3) &&
              regionFilter.includes(country.region) && (
                <CountryCard country={country} />
              )
            );
            // const {flag, cca3:code, name} = country
            // console.log(country)
            // return <p>{name.common} {flag} {code}</p>
          })}
      </main>
    </div>
  );
};

export default App;
