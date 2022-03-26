import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="container">
          <div className="social-icon-container">
            <SocialIcon
              className="social-icon"
              url="https://github.com/jmail1014"
              target="_blank"
            />
            <SocialIcon
              className="social-icon"
              url="https://www.linkedin.com/in/jessicaclong/"
              target="_blank"
            />
            <SocialIcon
              className="social-icon"
              url="https://twitter.com/jessica_c_long"
              target="_blank"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
