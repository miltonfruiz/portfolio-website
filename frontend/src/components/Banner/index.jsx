import React from "react";
import "./style.css";

export default function Banner() {
  return (
    <>
      <div className="row justify-content-center d-flex align-items-center navContainer mt-5 mb-5">
        <div className="banner col-9 d-flex align-items-end">
          <img
            className="imgProfile"
            src="public/images/perfil.jpg"
            alt="profile-img"
          />
          <h6 className="textPortfolio">Portfolio Web</h6>
        </div>
      </div>
    </>
  );
}
