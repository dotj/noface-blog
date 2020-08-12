import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import React from "react";
import "./splash-title.css";

const SplashTitle = ({ title, date, background, children }) => {
  var splashTitle = (
    <div class="splash-title">
      <center>
        <div class="splash-console">
          <h1 class="splash-title-header">
            <Link to={`/`}>{title}</Link>
          </h1>
          <p class="splash-title-subheader">{children}</p>
        </div>
      </center>
    </div>
  );

  if (background) {
    splashTitle = (
      <BackgroundImage
        Tag="section"
        fluid={background}
        className="splash-title"
        backgroundPosition="center"
      >
        <center>
          <div class="splash-console">
            <h1 class="splash-title-header">
              <Link to={`/`}>{title}</Link>
            </h1>
            <p class="splash-title-subheader">{children}</p>
            <p class="detail">{date}</p>
          </div>
        </center>
      </BackgroundImage>
    );
  }

  return splashTitle;
};

export default SplashTitle;
