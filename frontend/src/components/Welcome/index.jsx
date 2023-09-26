import React from "react";
import { FaHandPointer } from "react-icons/fa";

export default function Welcome() {
  return (
    <div className="justify-content-center d-flex align-items-center mainClass row">
      <div className="col-4 text-start ">
        <h4 className="col-8 mb-4 text-white" id="find">
          Find the perfect destination
        </h4>
        <h6 className="col-8 mb-4 text-start text-white" id="our">
          Our app will help you find the perfect path for your next trip. With
          an easy-to-use interface and a host of itinerary options, planning
          your next trip has never been easier.
        </h6>
        <button
          type="button"
          id="view"
          className="btn btn-info px-5 mb-1 viewBoton text-white"
        >
          <p className="viewText">Viem More</p>

          <div>
            <FaHandPointer size={25} />
          </div>
        </button>
      </div>
      <div className="col-4 text-end">
        <img src="" alt="" />
      </div>
    </div>
  );
}
