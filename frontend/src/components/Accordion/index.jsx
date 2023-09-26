import React from "react";
import "./style.css";
import {
  FaArrowAltCircleRight,
  FaClock,
  FaHandHoldingUsd,
  FaHeart,
  FaTags,
} from "react-icons/fa";

export default function Accordion({
  itineraryDuration1,
  itineraryPrice1,
  itineraryLikes1,
  itineraryTags1,
  itineraryDuration2,
  itineraryPrice2,
  itineraryLikes2,
  itineraryTags2,
  itineraryDuration3,
  itineraryPrice3,
  itineraryLikes3,
  itineraryTags3,
}) {
  return (
    <div className="accordion col-8 mt-5" id="accordionExample">
      <div className="accordion-item accordionContainer">
        <h2 class="accordion-header">
          <button
            className="accordion-button col-8"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <p className="buttonName">
              <FaArrowAltCircleRight size={20} className="arrowIcon" />
              View more
            </p>
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Itinerary #1
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show row"
                >
                  <div class="accordion-body row justify-content-center d-flex">
                    <div className="col-2 justify-content-center me-5 align-items-center">
                      <h6 className="h6">
                        <FaClock size={20} className="classIcon " />
                        Duration:
                      </h6>
                      <p className="p">{itineraryDuration1}</p>
                    </div>
                    <div className="col-2 justify-content-center me-5 align-items-center">
                      <h6 className="h6">
                        <FaHandHoldingUsd size={20} className="classIcon" />
                        Price:
                      </h6>
                      <p className="p">{itineraryPrice1}</p>
                    </div>
                    <div className="col-2 justify-content-center me-5 align-items-center">
                      <h6 className="h6">
                        <FaHeart size={20} className="classIcon" />
                        Likes:
                      </h6>
                      <p className="p">{itineraryLikes1}</p>
                    </div>
                    <div className="col-2 justify-content-center me-5 align-items-center">
                      <h6 className="h6">
                        <FaTags size={20} className="classIcon" />
                        Tags:
                      </h6>
                      <p className="p tags row">{itineraryTags1}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Itinerary #2
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show row"
                >
                  <div class="accordion-body row justify-content-center d-flex">
                    <div className="col-2 justify-content-center me-5 align-items-center">
                      <h6 className="h6">
                        <FaClock size={20} className="classIcon " />
                        Duration:
                      </h6>
                      <p className="p">{itineraryDuration2}</p>
                    </div>
                    <div className="col-2 justify-content-center me-5 align-items-center">
                      <h6 className="h6">
                        <FaHandHoldingUsd size={20} className="classIcon" />
                        Price:
                      </h6>
                      <p className="p">{itineraryPrice2}</p>
                    </div>
                    <div className="col-2 justify-content-center me-5 align-items-center">
                      <h6 className="h6">
                        <FaHeart size={20} className="classIcon" />
                        Likes:
                      </h6>
                      <p className="p">{itineraryLikes2}</p>
                    </div>
                    <div className="col-2 justify-content-center me-5 align-items-center">
                      <h6 className="h6">
                        <FaTags size={20} className="classIcon" />
                        Tags:
                      </h6>
                      <p className="p tags row">{itineraryTags2}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Itinerary #3
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show row"
                >
                  <div class="accordion-body row justify-content-center d-flex">
                    <div className="col-2 justify-content-center me-5 align-items-center">
                      <h6 className="h6">
                        <FaClock size={20} className="classIcon " />
                        Duration:
                      </h6>
                      <p className="p">{itineraryDuration3}</p>
                    </div>
                    <div className="col-2 justify-content-center me-5 align-items-center">
                      <h6 className="h6">
                        <FaHandHoldingUsd size={20} className="classIcon" />
                        Price:
                      </h6>
                      <p className="p">{itineraryPrice3}</p>
                    </div>
                    <div className="col-2 justify-content-center me-5 align-items-center">
                      <h6 className="h6">
                        <FaHeart size={20} className="classIcon" />
                        Likes:
                      </h6>
                      <p className="p">{itineraryLikes3}</p>
                    </div>
                    <div className="col-2 justify-content-center me-5 align-items-center">
                      <h6 className="h6">
                        <FaTags size={20} className="classIcon" />
                        Tags:
                      </h6>
                      <p className="p tags row">{itineraryTags3}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
