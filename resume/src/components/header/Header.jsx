import { Link } from "react-router-dom";
import { AvatarSVG, Email, Linkedin } from "../../assets/image";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content grid items-center">
          <div className="header-intro">
            <div className="flex items-end header-intro-wrapper">
              <img src={AvatarSVG} alt="avatar" className="avatar" />
              <h1 className="headre-name text-white">
                Janina Cocei, <br /> Web Developer
              </h1>
            </div>
            <p className="header-text text text-white"> As a programmer</p>
          </div>
          <div className="header-contact">
            <ul className="contact-info-list grid text-white">
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaEnvelope size={13} />
                </span>
                <p className="info-item-text">
                  Email:<span className="text">coceijanina@yahoo.com</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaPhone size={13} />
                </span>
                <p className="info-item-text">
                  Phone:<span className="text">+4 0765 956 330</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLocationDot size={14} />
                </span>
                <p className="info-item-text">
                  Address:<span className="text">Dolj, Romania</span>
                </p>
              </li>
            </ul>
            <ul className="contact-social-list flex items-center">
              <li className="social-item">
                <Link to="/">
                  <img src={Linkedin} />
                  <span className="tooltip text">LinkedIn</span>
                </Link>
              </li>
              <li className="social-item">
                <Link to="/">
                  <img src={Email} />
                  <span className="tooltip text">Email</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
