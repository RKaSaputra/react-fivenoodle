import React from "react";
import Logo from "./../../assets/img/logo/5noodle-logo.png";
import { IonIcon } from "react-ion-icon";

export function footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container grid grid--footer">
          <div className="logo-col">
            <a href="#">
              <img className="footer-logo" src={Logo} alt="fivenoodle logo" />
            </a>
            <div>
              <IonIcon className="social-icon" name="logo-instagram" />
            </div>

            <ul className="social-links">
              <li>
                <a className="footer-link" href="#">
                  <IonIcon className="social-icon" name="logo-instagram" />
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <IonIcon className="social-icon" name="logo-facebook" />
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <IonIcon className="social-icon" name="logo-twitter" />
                </a>
              </li>
            </ul>

            <p className="copyright">
              Copyright &copy; 2023 by Fivenoodle, Inc. All right reserved.
            </p>
          </div>
          <div className="address-col">
            <p className="footer-heading">Contact Us</p>
            <address className="contacts">
              <p className="address">
                Jl Jend Gatot Subroto Kav 12-13 Ged Putra Kalimantan, DKI
                Jakarta
              </p>
              <p>
                <a className="footer-link" href="tel:021-522-2926">
                  021-522-2926
                </a>
                <br />
                <a className="footer-link" href="mailto:hello@fivenoodle.com">
                  hello@fivenoodle.com
                </a>
              </p>
            </address>
          </div>
          <nav className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  Create Account
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Sign In
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  iOS App
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Android App
                </a>
              </li>
            </ul>
          </nav>
          <nav className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  About Fivenoodle
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  For Business
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Our Partnership
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </nav>
          <nav className="nav-col">
            <p className="footer-heading">Resources</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  Our Menu
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Privacy & Terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default footer;
