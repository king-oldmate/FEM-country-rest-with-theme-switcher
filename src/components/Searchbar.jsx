import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Searchbar = ({ setRegionFilter, search, setSearch }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className='search'>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <button
          className='filter-button'
          onClick={() => setShowDropDown(!showDropDown)}
        >
          Filter by Region <FiChevronDown />
        </button>

        <ul className={showDropDown ? "active" : ""}>
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
