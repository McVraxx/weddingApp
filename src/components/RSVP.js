import React from "react";
import emailjs from "@emailjs/browser";

const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_0dqklql",
      "template_dw4kydn",
      e.target,
      "OdDGozbtSiAHH1UMh"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

function RSVP() {
  return (
    <div id="rsvp" className="section-padding bg-img bg-fixed">
      <div className="container ">
        <div className="row justify-content-center ">
          <div className="repair">
            <div className="col-md-6 bg-white p-40 ml-10 ">
              <span className="oliven-title-meta text-center">
                Czy będziecie obecni na naszym weselu?
              </span>
              <h3 className="oliven-title text-center">
                Potwierdź swoją obecność e-mailem
              </h3>
              <br />
              <form method="post" className="row" onSubmit={sendEmail}>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      htmlFor="nameFrom"
                      name="name_from"
                      id="nameFrom"
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
                      className="mb-1"
                      htmlFor="emailFrom"
                      name="email_from"
                      id="emailFrom"
                      type="text"
                      placeholder="E-mail"
                    />
                  </div>
                </div>
                <div className="col-md-12 ">
                  <div className="form-group">
                    <input
                      htmlFor="numberFrom"
                      name="number_from"
                      id="numberFrom"
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
                      type="text"
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="Wiadomość"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="submit" className="btn buttono" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RSVP;
