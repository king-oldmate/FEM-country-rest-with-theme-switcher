import React, { useState, useEffect } from "react";
import axios from "axios";

const SingleDisplay = ({ viewCountry, setViewCountry }) => {
  // GET request
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${viewCountry}`
        );
        console.log(response.data);
        setData(response.data[0]);
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

  return (
    <>
      <main>
        {loading && "Loading..."}
        {data && (
          <div>
            <picture>
              <img src={data.flags.png} />
            </picture>
            <div>
              <h2>{data.name.common}</h2>
              <ul>
                <li>
                  <span>Official Name: </span>
                  {data.name.official}
                </li>
                <li>
                  <span>Population: </span>
                  {data.population.toLocaleString("en-US")}
                </li>
                <li>
                  <span>Region: </span>
                  {data.region}
                </li>
                <li>
                  <span>Sub Region: </span>
                  {data.subregion}
                </li>
                <li>
                  <span>Capital: </span>
                  {data.capital}
                </li>
              </ul>
              <ul>
                <li>
                  <span>Top Level Domain: </span>
                  {data.tld.join(", ")}
                </li>
                <li>
                  <span>Currencies: </span>
                  {Object.keys(data.currencies).map((key, index) => {
                    return (
                      <span key={index}>{data.currencies[key]["name"]}</span>
                    );
                  })}
                </li>
                <li>
                  <span>Languages: </span>
                  {Object.keys(data.languages).map((key, index) => {
                    return <span key={index}>{data.languages[key]}</span>;
                  })}
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default SingleDisplay;
