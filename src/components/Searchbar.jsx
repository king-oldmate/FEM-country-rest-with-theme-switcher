import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Searchbar = ({ setRegionFilter, search, setSearch }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className='search'>
      <div className='inner-search'>
        <div className='search-container'>
          <svg
            stroke='currentColor'
            fill='none'
            stroke-width='0'
            viewBox='0 0 24 24'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            ></path>
          </svg>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search for a country...'
          />
        </div>

        <div>
          <button
            className='filter-button'
            onClick={() => setShowDropDown(!showDropDown)}
          >
            Filter by Region <FiChevronDown />
          </button>

          <ul className={`region-list ${showDropDown ? "active" : ""}`}>
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
              <button onClick={() => setRegionFilter("Oceania")}>
                Oceania
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
