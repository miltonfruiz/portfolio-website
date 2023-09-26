import React from "react";
import "./style.css";
import { Link as Anchors } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import cityActions from "../../store/actions/city";
import { useDispatch } from "react-redux";

export default function Cards({ cardLink, cardTitle, cardDescription, id }) {
  const dispatch = useDispatch();
  const handlerclick = () => {
    dispatch(cityActions.filter_city(id));
  };
  return (
    <>
      <div className="col-3 mt-5 cardContainer">
        <div className="card-container">
          <img src={cardLink} alt="" className="card-img" />
          <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
            <p className="card-text">{cardDescription}</p>
            <>
              <div className="more">
                <Anchors
                  to="/details"
                  id={id}
                  className="btn btn-outline-danger bton-title "
                  onClick={() => handlerclick()}
                >
                  <p className="moreDetails">
                    {" "}
                    More Details! <FaAngleDoubleRight size={20} />
                  </p>{" "}
                </Anchors>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
}
