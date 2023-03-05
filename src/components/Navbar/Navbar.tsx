import React from "react";
import "./Navbar.css";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Menu from "../Menu/Menu";

function Navbar() {
  return (
    <nav className=" bg-slate-50 dark:bg-dark-background dark:text-white">
      <Menu />
      <div className="social">

        <a href="https://github.com/EnzoTT" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            className="button"
            icon={faGithub}
            color="#3a3cbb"
            size="2x"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/enzo-trevisan-topanotti-ba9576197/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="button"
            icon={faLinkedin}
            color="#3a3cbb"
            size="2x"
          />
        </a>
        <a
          href="https://www.instagram.com/enzoo_trevisan_/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="button"
            icon={faInstagram}
            color="#3a3cbb"
            size="2x"
          />
        </a>
        <div className="desktop">
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
