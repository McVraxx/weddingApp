import React from "react";
import where1 from "../assets/images/where-1.jpg";
import where2 from "../assets/images/where-2.jpg";
import where3 from "../assets/images/where-3.jpg";

function Where() {
  return (
    <div id="whenwhere" className="whenwhere section-padding bg-pink">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <span className="oliven-title-meta">Questions</span>
            <h2 className="oliven-title"> Where & Where </h2>
          </div>
        </div>
        <div>
          <div className="fleximus">
            <div className="item col-12 col-md-4">
              <div className="whenwhere-img">
                <img src={where1} alt="" />
              </div>
              <div className="content">
                <h5>Wedding Ceremony</h5>
                <p>
                  <i className="ti-location-pin"></i> Królówka
                </p>
                <p>
                  <i className="ti-time"></i> <span> 15:00</span>
                </p>
              </div>
            </div>
            <div className="item col-12 col-md-4">
              <div className="whenwhere-img">
                <img src={where2} alt="" />
              </div>
              <div className="content">
                <h5>Wedding Party</h5>
                <p>
                  <i className="ti-location-pin"></i>Gnojnik
                </p>
                <p>
                  <i className="ti-time"></i> <span> 16:00</span>
                </p>
              </div>
            </div>
            <div className="item col-12 col-md-4">
              <div className="whenwhere-img">
                <img src={where3} alt="" />
              </div>
              <div className="content">
                <h5> Accomodations</h5>
                <p>
                  <i className="ti-direction-alt"></i> Hotel
                </p>
                <p>
                  <i className="ti-direction"> Hotel Gnojnik</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Where;
