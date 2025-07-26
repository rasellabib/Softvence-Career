import React from "react";
import "./Footer.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-section">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Fix And Flip Loans</a>
          <a href="#">DSCR Rental Loans</a>
          <a href="#">Ground Up Construction Loans</a>

          <h4>Where We Lend</h4>
          <a href="#">Florida</a>
          <a href="#">Texas</a>
          <a href="#">Georgia</a>
        </div>

        <div className="footer-section">
          <h4>Top Cites We Lend In</h4>
          <a href="#">Orlando</a>
          <a href="#">Tampa</a>
          <a href="#">Miami</a>
          <a href="#">Jacksonville</a>
          <a href="#">Houston</a>
          <a href="#">Austin</a>
          <a href="#">Dallas</a>
          <a href="#">San Antonio</a>
        </div>

        <div className="footer-section">
          <h4>Top Resources</h4>
          <a href="#">Loan Calculator</a>
          <a href="#">What is a Hard Money Loan</a>
          <a href="#">What is a Hard Money Loan</a>
          <a href="#">How to find fix and flip deals</a>
          <a href="#">Best Cities for Fix and Flips</a>

          <h4>Useful Link</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FaEnvelope className="icon" /> loans@ridgestreetcap.com</p>
          <p><FaPhone className="icon" /> Phone: 786-304-2751</p>

          <div className="footer-logo">
            <span className="green">RIDGE</span>
            <span className="gray"> STREET</span>
          </div>

          <div className="footer-social">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
