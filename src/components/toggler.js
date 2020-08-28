import { ThemeToggler } from "gatsby-plugin-dark-mode";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./toggler.css";

class Toggler extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className="toggler">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
              className="toggler-checkbox"
            />
            <FaSun size="1.4rem" class="toggler-sun"/>
            <FaMoon size="1.4rem" class="toggler-moon"/>
          </label>
        )}
      </ThemeToggler>
    );
  }
}

export default Toggler;
