import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-social-icon">
          <a href="https://linkedin.com/in/sakibur-rahman-3b301023b">
            <i className="fa-brands fa-linkedin icon-color"></i>
          </a>
          <a href="https://www.facebook.com/sakib071">
            <i className="fa-brands fa-facebook-f icon-color"></i>
          </a>
          <a href="https://github.com/sakibur-rahman-333">
            <i className="fa-brands fa-github icon-color"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter icon-color"></i>
          </a>
        </div>
        <hr className="footer-line" />
        <p>Developed by Sakibur Rahman, CSE, BSMRSTU</p>
      </div>
    );
  }
}

export default Footer;
