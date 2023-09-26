import React from "react";
import "./style.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link as Anchors } from "react-router-dom";

export default function Call() {
  return (
    <>
      <div className="call">
        <Anchors
          to="/cities"
          id="click"
          className="btn btn-danger callToAction"
        >
          <p className="click">
            {" "}
            Click for More Info! <FaAngleDoubleRight size={25} />
          </p>{" "}
        </Anchors>
      </div>
    </>
  );
}
