import React from "react";

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

  return (
    <>
      <button className='back-btn btn' onClick={() => setViewCountry(false)}>
        Back
      </button>
      <main className='singleCountry'>
        <picture>
          <img src={flags.png} alt='flag' />
        </picture>
        <div>
          <h2>{name.common}</h2>
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
              {Object.values(currencies).map((key, index) => {
                return <span key={index}>{key.name}</span>;
              })}
            </li>
            <li>
              <span className='category'>Languages: </span>
              {Object.values(languages).map((key, index) => {
                return <span key={index}>{key}, </span>;
              })}
            </li>
          </ul>
          <span className='category'>Border Countries:</span>
          <ul>
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
    </>
  );
};

export default SingleDisplay;
