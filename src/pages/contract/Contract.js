import React, { Component } from "react";
import photo from "./resource/sakib.jpg";
import "./Contract.css";

class Contract extends Component {
  render() {
    return (
      <div className="contract-page">
        <img className="img-resize" src={photo} alt="Sakib" />
        <h2>Sakibur Rahman</h2>
        <p>Front-end web developer</p>
        <h3>Contract:</h3>
        <ul>
          <li>Phone: +8801955-207333</li>
          <li>Email: sakib.cse.333@gmail.com</li>
        </ul>
      </div>
    );
  }
}

export default Contract;
