import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const SingleDisplay = ({ data, viewCountry, setViewCountry }) => {
  const country = data.find((e) => e.cca3 === viewCountry);
  const {
    name,
    flags,
    tld,
    currencies,
    region,
    subregion,
    languages,
    borders,
    population,
    capital,
    altSpellings,
  } = country;
  //   console.log(name.common);
  //   console.log(borders);

  const borderData = data.filter((e) => {
    return borders && Object.values(e).some((r) => borders.includes(r));
  });

  const languageArray = Object.values(languages).map((key, index) => {
    return key;
  });

  const currencyArray = Object.values(currencies).map((key, index) => {
    return key.name;
  });

  return (
    <div className='single-country'>
      <button className='back-btn btn' onClick={() => setViewCountry(false)}>
        <MdOutlineKeyboardBackspace /> Back
      </button>
      <main className='country-info'>
        <picture>
          <img src={flags.png} alt='flag' />
        </picture>
        <div>
          <h2>{name.common}</h2>
          <div className='list-container'>
            <ul>
              <li>
                <span className='subheading'>Native Name: </span>
                {altSpellings[1]}
              </li>
              <li>
                <span className='category'>Population: </span>
                {population.toLocaleString("en-US")}
              </li>
              <li>
                <span className='category'>Region: </span>
                {region}
              </li>
              <li>
                <span className='category'>Sub Region: </span>
                {subregion}
              </li>
              <li>
                <span className='category'>Capital: </span>
                {capital}
              </li>
            </ul>
            <ul>
              <li>
                <span className='category'>Top Level Domain: </span>
                {tld}
              </li>
              <li>
                <span className='category'>Currencies: </span>
                {currencyArray.join(", ")}
              </li>
              <li>
                <span className='category'>Languages: </span>
                {languageArray.join(", ")}
              </li>
            </ul>
          </div>
          <ul className='border-countries'>
            <span className='category'>Border Countries:</span>
            {borders &&
              borderData.map((country, index) => {
                return (
                  <li key={index}>
                    <button
                      className='btn'
                      onClick={() => setViewCountry(country.cca3)}
                    >
                      {country.name.common}
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default SingleDisplay;
