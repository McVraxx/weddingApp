import React from "react";
import Logo from "../assets/images/logo.png";

function Footer() {
  return (
    <div className="footer2">
      <div className="olivien-narrow-content">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>
              <a href="/">
                <img src={Logo} alt="" />
                <span>
                  Michalina <small>&</small> Karol
                </span>
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
