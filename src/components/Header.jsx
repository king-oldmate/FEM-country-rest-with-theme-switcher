import React from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const Header = ({ theme, setTheme }) => {
  return (
    <header>
      <h1>Where in the World?</h1>
      {theme === "dark" ? (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <FaMoon /> Dark Mode
        </button>
      ) : (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <FaRegMoon /> Light Mode
        </button>
      )}
    </header>
  );
};

export default Header;
