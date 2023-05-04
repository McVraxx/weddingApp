import React, { useState } from "react";
import Logo from "../assets/images/logo.png";

function Sidebar() {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle("slide");
  };
  return (
    <>
      <a
        href="/"
        onClick={openMenu}
        className={`js-oliven-nav-toggle oliven-nav-toggle${
          show ? "active" : ""
        }`}
      >
        <i></i>
      </a>
      <aside id="oliven-aside">
        <div className="oliven-logo">
          <a href="/">
            <img src={Logo} alt="" />
            <span>
              Michalina <small>&</small> Karol
            </span>
            <h4>14.08.2023r.</h4>
          </a>
        </div>
        <nav className="oliven-main-menu">
          <ul>
            <li>
              <a href="#home">Strona główna</a>
            </li>
            <li>
              <a href="#couple">Para młodych</a>
            </li>
            <li>
              <a href="#whenwhere">Gdzie & Kiedy</a>
            </li>
            <li>
              <a href="#rsvp">Potwierdzenie</a>
            </li>
          </ul>
        </nav>
        <div className="footer1">
          <span className="separator"></span>
          <p>
            Michalina & Karol
            <br />
            14 Sierpień 2023r. Królówka
          </p>
          <p>WERSJA NA EKRAN KOMPUTEROWY </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
