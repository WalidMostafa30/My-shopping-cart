import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__container container">
        <h1 className="Footer__Title">My Shop</h1>
        <div className="Footer__group">
          <div className="Footer__links">
            <h3 className="Footer__links-title">Pages</h3>
            <Link className="Footer__links-link" to={"/"}>
              Home
            </Link>
            <Link className="Footer__links-link" to={"/shop"}>
              Shop
            </Link>
            <Link className="Footer__links-link" to={"/cart"}>
              Cart
            </Link>
            <Link className="Footer__links-link" to={"/contactUs"}>
              Contact Us
            </Link>
          </div>
          <div className="Footer__follow">
            <h3 className="Footer__links-title">Follow Us</h3>
            <p className="Footer__follow-link">
              <FontAwesomeIcon
                className="Footer__follow-icon"
                icon={faWhatsapp}
              />
              01065254159
            </p>
            <a
              className="Footer__follow-link"
              href="https://www.facebook.com/profile.php?id=100011538554307&mibextid=ViGcVu"
            >
              <FontAwesomeIcon
                className="Footer__follow-icon"
                icon={faFacebook}
              />
              Walid Mostafa
            </a>
            <a
              className="Footer__follow-link"
              href="https://instagram.com/walid_mostafa10?igshid=M2RkZGJiMzhjOQ=="
            >
              <FontAwesomeIcon
                className="Footer__follow-icon"
                icon={faInstagram}
              />
              walid_mostafa30
            </a>
            <a
              className="Footer__follow-link"
              href="https://www.linkedin.com/in/walid-mostafa-bb3567295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              <FontAwesomeIcon
                className="Footer__follow-icon"
                icon={faLinkedin}
              />
              Walid Mostafa
            </a>
            <a
              className="Footer__follow-link"
              href="https://github.com/WalidMostafa30"
            >
              <FontAwesomeIcon
                className="Footer__follow-icon"
                icon={faGithub}
              />
              Walid_Mostafa30
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
