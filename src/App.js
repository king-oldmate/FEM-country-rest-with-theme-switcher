import React, { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "use-local-storage";
import "./App.css";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import GridDisplay from "./components/GridDisplay";
import SingleDisplay from "./components/SingleDisplay";

const App = () => {
  // colour theme settings
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

  // search filters
  const [regionFilter, setRegionFilter] = useState("Oceania");
  const [search, setSearch] = useState("");

  const [viewCountry, setViewCountry] = useState("Belgium");

  return (
    <div className='App' data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      {viewCountry ? (
        <SingleDisplay
          data={data}
          viewCountry={viewCountry}
          setViewCountry={setViewCountry}
        />
      ) : (
        <>
          <Searchbar
            setRegionFilter={setRegionFilter}
            search={search}
            setSearch={setSearch}
          />
          <GridDisplay
            data={data}
            loading={loading}
            regionFilter={regionFilter}
            search={search}
            viewCountry={viewCountry}
            setViewCountry={setViewCountry}
          />
        </>
      )}
    </div>
  );
};

export default App;
