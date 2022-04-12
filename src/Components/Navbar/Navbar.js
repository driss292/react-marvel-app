import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Navbar/navbar.scss";
import Logo from "../../assets/images/Marvel_Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img src={Logo} alt="" className="navbar-logo" />
        </Link>
        <nav className="nav">
          {(toggleMenu || largeur > 500) && (
            <>
              <Link
                onClick={toggleNav}
                to="/"
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
              >
                Characters
              </Link>
              <Link
                onClick={toggleNav}
                to="/comics/"
                className={
                  location.pathname === "/comics/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Comics
              </Link>

              <Link
                onClick={toggleNav}
                to="/favorites/"
                className={
                  location.pathname === "/favorites/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Favorites
              </Link>
            </>
          )}
          <FontAwesomeIcon
            icon={"fa-bars"}
            onClick={toggleNav}
            className="btn"
          ></FontAwesomeIcon>
        </nav>
      </div>
    </div>
  );
}
