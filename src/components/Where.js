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
            <span className="oliven-title-meta">Informacje</span>
            <h2 className="oliven-title"> Gdzie & Kiedy </h2>
          </div>
        </div>
        <div>
          <div className="fleximus">
            <div className="item col-12 col-md-4">
              <div className="whenwhere-img">
                <img src={where1} alt="" />
              </div>
              <div className="content">
                <h5>Ceremonia weselna</h5>
                <p>
                  <i className="ti-location-pin">
                    Parafia pod wezwaniem Przemienienia Pańskiego
                  </i>
                </p>
                <p>Królówka 3, 32-722</p>
                <p>
                  <i className="ti-time"></i>{" "}
                  <span> Rozpoczęcie ceremoni: 15:00</span>
                </p>
              </div>
            </div>
            <div className="item col-12 col-md-4">
              <div className="whenwhere-img">
                <img src={where2} alt="" />
              </div>
              <div className="content">
                <h5>Przyjęcie weselne</h5>
                <p>
                  <i className="ti-location-pin">Dom weselny "Zacisze"</i>
                </p>
                <p>Gnojnik 691, 32-864</p>
                <p>
                  <i className="ti-time"></i>
                  <span> Rozpoczęcie przyjęcia: 16:00</span>
                </p>
              </div>
            </div>
            <div className="item col-12 col-md-4">
              <div className="whenwhere-img">
                <img src={where3} alt="" />
              </div>
              <div className="content">
                <h5>Zakwaterowanie</h5>
                <p>
                  <i className="ti-direction-alt">Hotel dla chętnych</i> -
                  prosimy informować parę młodą
                </p>
                <p>
                  <i className="ti-direction"></i>Hotel w domu weselnym
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
