import React from "react";
import Bride from "../assets/images/bride.jpg";
import Groom from "../assets/images/groom.jpg";

function Bridegroom() {
  return (
    <div id="couple" className="bridegroom clear section-padding bg-pink">
      <div className="container">
        <div className="row mb-60">
          <div className="col-md-6">
            <div
              className="item toright mb-30 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="img">
                <img src={Bride} alt="" />
              </div>
              <div className="info valign">
                <div className="full-width">
                  <h6>
                    Michalina Kościelniak <i className="ti-heart"></i>
                  </h6>
                  <span>Panna młoda</span>
                  <p>Numer komórkowy: 664 863 214</p>
                  <p></p>

                  <div className="social">
                    <div className="full-width">
                      <a href="#0" className="icon">
                        <i className="ti-facebook"></i>
                      </a>
                      <a href="#0" className="icon">
                        <i className="ti-twitter"></i>
                      </a>
                      <a href="#0" className="icon">
                        <i className="ti-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="item mb-30 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="img">
                <img src={Groom} alt="" />
              </div>
              <div className="info valign">
                <div className="full-width">
                  <h6>Karol Czoch</h6>
                  <span>Pan młody</span>
                  <p>Numer komórkowy: 537 035 232</p>
                  <p></p>
                  <div className="social">
                    <div className="full-width">
                      <a href="#0" className="icon">
                        <i className="ti-facebook"></i>
                      </a>
                      <a href="#0" className="icon">
                        <i className="ti-twitter"></i>
                      </a>
                      <a href="#0" className="icon">
                        <i className="ti-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 text-center animate-box"
              data-animate-effect="fadeInUp"
            >
              <h4 className="oliven-couple-title2">
                Strona ta powstała w zamyśle alternatywnej formy zaproszenia w
                szczególności dla młodszej grupy zaproszonych. Gdyż oficjalnie
                informujemy że...
              </h4>
              <h3 className="oliven-couple-title">Pobieramy się!</h3>
              <h4 className="oliven-couple-title2">
                I informujemy że zapraszamy na ceremonie w Królówce i przyjęcie
                weselne w domu weselnym "Zacisze"!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bridegroom;
