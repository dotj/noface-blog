import { Link } from "gatsby";
import React from "react";
import Toggler from "./toggler";

const Menu = ({ siteTitle, title, children }) => {
  return (
    <nav>
      <h1>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: `0rem`,
            margin: `0rem`
          }}
        >
          <li>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                listStyle: `none`,
                padding: `0rem`,
                margin: `0rem`
              }}
            >
              <li style={{paddingRight: `1rem`}}><Link to={`/`}>{siteTitle}</Link></li>
              <li style={{paddingRight: `1rem`}}><Link to={`/about`}>About</Link></li>
            </ul>
          </li>
          <li><Toggler/></li>
        </ul>
      </h1>
    </nav>
  );
};

export default Menu;