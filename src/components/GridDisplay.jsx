import React from "react";
import CountryCard from "./CountryCard";
const GridDisplay = ({
  data,
  loading,
  regionFilter,
  search,
  viewCountry,
  setViewCountry,
}) => {
  return (
    <main className='card-grid'>
      {loading && <p>Loading...</p>}

      {data &&
        data.map((country, index) => {
          const { name, region } = country;
          return (
            regionFilter.includes(region) &&
            name.common.toLowerCase().indexOf(search.toLowerCase()) > -1 && (
              <CountryCard
                key={index}
                country={country}
                id={index}
                viewCountry={viewCountry}
                setViewCountry={setViewCountry}
              />
            )
          );
        })}
    </main>
  );
};

export default GridDisplay;
