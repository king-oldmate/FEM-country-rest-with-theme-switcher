import React from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const Header = ({ theme, setTheme }) => {
  return (
    <header>
      <div className='inner-header'>
        <h1>Where in the world?</h1>
        {theme === "dark" ? (
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <FaMoon /> Light Mode
          </button>
        ) : (
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <FaRegMoon /> Dark Mode
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
