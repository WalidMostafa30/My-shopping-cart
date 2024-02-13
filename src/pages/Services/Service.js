import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones, faTruck, faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";

export default function Services() {
  return (
    <div className="Services">
      <GlobalTitle title={"Services"} />
      <div className="Services__container container">
        <div className="Services__Service">
          <FontAwesomeIcon
            icon={faUnlockKeyhole}
            className="Services__Service-icon"
          />
          <h1 className="Services__Service-title">Payment Secure</h1>
          <p className="Services__Service-paragraph">Free shipping on order</p>
        </div>

        <div className="Services__Service">
          <FontAwesomeIcon
            icon={faHeadphones}
            className="Services__Service-icon"
          />
          <h1 className="Services__Service-title">Support 24/7</h1>
          <p className="Services__Service-paragraph">Contact us 24 hrs a day</p>
        </div>

        <div className="Services__Service">
          <FontAwesomeIcon icon={faTruck} className="Services__Service-icon" />
          <h1 className="Services__Service-title">Free Shipping</h1>
          <p className="Services__Service-paragraph">Free shipping on order</p>
        </div>
      </div>
    </div>
  );
}
