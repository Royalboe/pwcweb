import React from "react";
import "./header-footer.css";
const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <img src="./assets/PwC-logo.svg" alt="" />

          <h2>Student Website</h2>

          <div>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="aboutus.html">About Us</a>
              </li>
              <li>
                <a href="contact-us.html">Contact Us</a>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
              <li>
                <a href="application-form.html">Application Form</a>
              </li>
              <li>
                <a href="students-data.html">Student Data</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
