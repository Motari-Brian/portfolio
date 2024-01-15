import React from "react";
import "./Footer.css";

// imports happen above
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Brian </h1>
        <ul className="footer__list">
          <li>
            <a href="/" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#about_me" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/brian-motari-90727a22a" className="footer__social-link" target="_blank">
            <i class="bx bxl-linkedin-square"></i>
          </a>
          <a href="https://github.com/Motari-Brian" className="footer__social-link" target="_blank">
            <i class="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          {" "}
          &#169; 2024
        </span>
      </div>
    </footer>
  );
};

export default Footer;
