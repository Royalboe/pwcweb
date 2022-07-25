import React from "react";
import "./header-footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer">
          <ul>
            <li>
              <b>Services</b>
            </li>
            <li>Audit and assurance services</li>
            <li>Advisory Services</li>
            <li>Private wealth services</li>
            <li>SME Desk</li>
            <li>Tax services</li>
          </ul>

          <ul>
            <li>
              <b>Insights</b>
            </li>
            <li>Insights and publications</li>
            <li>Press Room</li>
            <li>Subscriptions</li>
            <li>SME Desk</li>
            <li>Tax services</li>
          </ul>

          <ul>
            <li>
              <b>Career</b>
            </li>
            <li>Insights and publications</li>
            <li>Press Room</li>
            <li>Subscriptions</li>
            <li>SME Desk</li>
            <li>Tax services</li>
          </ul>
        </div>

        <div style="width: 100%; border: 1px solid #fff; margin: 20px 0"></div>
        <div>
          <img src="./assets/PwC-logo.svg" height="70px" width="70px" />
          <span>
            <p style="color: #fff; font-size: 20px; display: inline-block">
              Contact us:
            </p>
            <a href="">
              <i
                class="fab fa-facebook"
                aria-hidden="true"
                style="color: #fff"
              ></i>
            </a>
            <a href="">
              <i
                className="fab fa-twitter"
                aria-hidden="true"
                style="color: #fff"
              ></i>
            </a>
            <a href="">
              <i
                className="fab fa-twitter"
                aria-hidden="true"
                style="color: #fff"
              ></i>
            </a>
            <a href="">
              <i
                className="fab fa-github"
                aria-hidden="true"
                style="color: #fff"
              ></i>
            </a>
            <a href="">
              <i
                className="fab fa-linkedin"
                aria-hidden="true"
                style="color: #fff"
              ></i>
            </a>
          </span>
        </div>
      </footer>

      <div
        id="night-mode-icon"
        style="
        position: absolute;
        top: 17%;
        right: 20px;
        width: 40px;
        cursor: pointer;
      "
      >
        <img
          src="./assets/halfmoon.png"
          alt=""
          title="night mode icon"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Footer;
