import React, { useEffect } from "react";
import Anchor from "../Anchor";
import { LINK } from "../../variables/const";
import "./style.css";
import { useDispatch } from "react-redux";
import userActions from "../../store/actions/user";

export default function Nav() {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");

  return (
    <nav>
      <div className="row justify-content-center d-flex align-items-center navContainer mt-4 col-12">
        {LINK.map((each, key) => (
          <Anchor
            key={key}
            classCfg={each.classCfg}
            hrefLink={each.hrefLink}
            targetPage={each.targetPage}
            imgDirec={each.imgDirec}
            altLogo={each.altLogo}
            onClick={() => handlerLogOut()}
          />
        ))}
        {!token ? (
          <a href="/login" className="btn btn-info px-4 logClass text-white">
            {" "}
            Login
          </a>
        ) : (
          <button
            className="btn btn-danger px-4 logClass"
            onClick={() => dispatch(userActions.log_out())}
          >
            {" "}
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
