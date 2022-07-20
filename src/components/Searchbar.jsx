import React from "react";

const Searchbar = ({ setRegionFilter }) => {
  return (
    <div>
      <div>Search</div>
      <div>
        <ul>
          <li>
            <button onClick={() => setRegionFilter("Africa")}>Africa</button>
          </li>
          <li>
            <button onClick={() => setRegionFilter("Americas")}>
              Americas
            </button>
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
      </div>
    </div>
  );
};

export default Searchbar;
