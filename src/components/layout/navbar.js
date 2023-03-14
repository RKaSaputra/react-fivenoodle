import "./../../index.css";
import Logo from "./../../assets/img/logo/5noodle-logo.png";
import Header from "../../assets/js/sticky-nav";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import { closeOutline } from "ionicons/icons";

const Navbar = ({ activeBar }) => {
  const [data, setData] = useState(false);

  useEffect(() => {
    var tmp = Header();
    console.log(activeBar);
    setData(tmp);
  }, []);

  return (
    <header className="header" id="header">
      <nav className="main-nav-left">
        <ul className="main-nav-list">
          <li>
            <Link
              to={"/menu"}
              className={
                activeBar === "our-menu"
                  ? "active main-nav-link"
                  : "main-nav-link"
              }
            >
              Our Menu
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className={
                activeBar === "about-us"
                  ? "active main-nav-link"
                  : "main-nav-link"
              }
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>
      <Link to={"/"}>
        <img src={Logo} className="logo" alt="fivenoodle logo" />
      </Link>
      <nav className="main-nav-right">
        <ul className="main-nav-list">
          <li>
            <Link
              to={"/blog"}
              className={
                activeBar === "blog" ? "active main-nav-link" : "main-nav-link"
              }
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className={
                activeBar === "contact"
                  ? "active main-nav-link"
                  : "main-nav-link"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="/menu" className="btn btn--full">
              Try Our Product
            </a>
          </li>
          <li>
            <Link to={"/menu"} className="main-nav-link">
              Our Menu
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="main-nav-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to={"/blog"} className="main-nav-link">
              Blog
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="main-nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <IonIcon icon={menuOutline} className="icon-mobile-nav menu" />
        <IonIcon icon={closeOutline} className="icon-mobile-nav close" />
      </button>
    </header>
  );
};

export default Navbar;
