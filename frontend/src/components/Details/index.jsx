import React from "react";
import "./style.css";
import {
  FaCity,
  FaFlag,
  FaGlobe,
  FaUserFriends,
  FaCoins,
  FaMonument,
  FaInfoCircle,
} from "react-icons/fa";

export default function Details({
  cardImage,
  cardCity,
  cardCountry,
  cardRegion,
  cardPopulation,
  cardBadge,
  cardMonument,
  cardDescription,
  cardName,
}) {
  return (
    <>
      <div className="containerDetails">
        <div className="row">
          <div className="col-8">
            <img src={cardImage} className="imgDetails" alt="logo-img" />
            <p className="nameImage">{cardName}</p>
          </div>
          <div className="col-4">
            <div className="campsContainer">
              <h6 className="h6">
                <FaCity size={20} className="classIcon" />
                City:
              </h6>
              <p className="p">{cardCity}</p>
              <h6 className="h6">
                <FaFlag size={20} className="classIcon" />
                Country:
              </h6>
              <p className="p">{cardCountry}</p>
              <h6 className="h6">
                <FaGlobe size={20} className="classIcon" />
                Region:
              </h6>
              <p className="p">{cardRegion}</p>
              <h6 className="h6">
                <FaUserFriends size={20} className="classIcon" />
                Population:
              </h6>
              <p className="p">{cardPopulation}</p>
              <h6 className="h6">
                <FaCoins size={20} className="classIcon" />
                Badge:
              </h6>
              <p className="p classBadge">{cardBadge}</p>
              <h6 className="h6 monumentClass">
                <FaMonument size={20} className="classIcon" />
                Monument:
              </h6>
              <p className="p">{cardMonument}</p>
              <h6 className="h6">
                <FaInfoCircle size={20} className="classIcon" />
                Description:
              </h6>
              <p className="p">{cardDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
