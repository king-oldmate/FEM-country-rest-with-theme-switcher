import React from "react";
import CountryCard from "./CountryCard";
const GridDisplay = ({ data, loading, regionFilter, search }) => {
  return (
    <main className='card-grid'>
      {loading && <p>Loading...</p>}

      {data &&
        data.map((country, index) => {
          const { name, region } = country;
          return (
            regionFilter.includes(region) &&
            name.common.toLowerCase().indexOf(search.toLowerCase()) > -1 && (
              <CountryCard country={country} id={index} />
            )
          );
        })}
    </main>
  );
};

export default GridDisplay;
