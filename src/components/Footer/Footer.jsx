// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import Play from '../../images/play.png'
import App from '../../images/app.png';
import Logo from '../../images/logo.png';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';




function Footer() {
  return (
    <div className="app__footer">
      <div className="footer__main">
        <div className='main-one'>
          <img className="logo" src={Logo} />
          <p>
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <ul>
            <li className="footer__title">Product</li>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
        </ul>
        <ul>
            <li className="footer__title">Company</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Contact</li>
        </ul>
        <ul>
            <li className="footer__title">Resources</li>
            <li>Blog</li>
            <li>Events</li>
            <li>Help Center</li>
            <li>Tutorials</li>
            <li>Support</li>
        </ul>
        <ul>
            <li className="footer__title">Legal</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licencies</li>
            <li>Contact</li>
        </ul>
        <div className="app__logo">
            <p>Get the app</p>
            <img src={App} />
            <img src={Play} />
        </div>
      </div>
      <div className="copyright">
        <p>© 2023 ClearLink. All rights reserved.</p>
        <span className="socials">
          <FaTwitter />
          <FaLinkedin />
          <FaFacebook />
          <FaInstagram />
          <FaYoutube />
        </span>
      </div>
    </div>
  );
}

export default Footer;
