import React from "react";

const CountryCard = ({ country, id, viewCountry, setViewCountry }) => {
  const { name, cca3: code, flags, region, capital } = country;
  let { population } = country;
  population = population.toLocaleString("en-US");

  return (
    <div className='card' key={id} onClick={() => setViewCountry(code)}>
      <picture>
        <img src={flags.png} alt={name} />
      </picture>
      <div className='card-details'>
        <h2>{name.common}</h2>
        <ul>
          <li>
            <span>Population: </span>
            {population} peeps
          </li>
          <li>
            <span>Region: </span>
            {region}
          </li>
          <li>
            <span>Capital: </span>
            {capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
