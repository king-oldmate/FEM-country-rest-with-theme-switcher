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
  console.log(name.common);
  console.log(borders);

  return (
    <>
      <button onClick={() => setViewCountry(false)}>Back</button>
      <main className='singleCountry'>
        <picture>
          <img src={flags.png} />
        </picture>
        <div>
          <h2>{altSpellings[1]}</h2>
          {borders &&
            borders.map((c, index) => {
              return (
                <button key={index} onClick={() => setViewCountry(c)}>
                  {c}
                </button>
              );
            })}
        </div>
      </main>
    </>
  );
};

export default SingleDisplay;
