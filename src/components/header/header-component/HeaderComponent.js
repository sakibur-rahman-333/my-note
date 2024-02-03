import React, { Component } from "react";
import "./HeaderComponent.css";
import Logo from "./note.png";
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-img-txt">
          <img className="navbar-img" src={Logo} alt="Logo" />
          <h1>My Note</h1>
        </div>
        <div className="navbar-links">
          <ul className="navbar-links-ul" style={{ fontWeight: "bold" }}>
            <li>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/create-note" className="nav-item">
                Create Note
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="nav-item">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contract" className="nav-item">
                Contract
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
