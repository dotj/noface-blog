import React from "react";
import Menu from "./menu";

const Main = ({ siteTitle, title, children }) => {
  return (
    <div class="wrapper">
      <center>
      <div class="main">
        <header><Menu siteTitle={siteTitle}/></header>
        <main>{children}</main>
      </div>
      </center>
    </div>
  );
};

export default Main;
