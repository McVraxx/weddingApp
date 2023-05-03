import React from "react";

function RSVP() {
  return (
    <div id="rsvp" className="section-padding bg-img bg-fixed">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-white p-40 ml-10">
            <span className="oliven-title-meta text-center">
              Czy będziecie obecni na naszym weselu?
            </span>
            <h3 className="oliven-title text-center">
              Potwierdź swoją obecność e-mailem
            </h3>
            <br />
            <form method="post" className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Imię i Nazwisko"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="E-mail"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Goście którzy będą"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Wiadomość"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input type="submit" className="btn buttono" value="SEND" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RSVP;
