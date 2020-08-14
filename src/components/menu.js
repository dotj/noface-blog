import { Link } from "gatsby";
import React from "react";
import Toggler from "./toggler";

const Menu = ({ siteTitle }) => {
  return (
    <nav class="menu">
      <ul>
        <li>
          <Link to={`/`}>noface(book)</Link>
        </li>
        <li>
          <Toggler />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
