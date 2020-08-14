import React from "react";
import { Link } from "gatsby";
// import Menu from "./menu";

const Main = ({ siteTitle, title, children }) => {
  let header = (
    <h1>
      <Link to={`/`}>{siteTitle}</Link>
    </h1>
  );
  return (
    <div class="wrapper">
      <div class="main">
        {/* <Menu siteTitle={title} /> */}
        <header>{header}</header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Main;
