import React, { useEffect, useRef } from "react";
import Cards from "../Cards";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import cityActions from "../../store/actions/city";
import { FaSearch } from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";

export default function Fetch() {
  let input = useRef();
  let cityInStore = useSelector((store) => store.cityReducer.city);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cityActions.get_city());
  }, []);

  let handleSubmit = (event) => {
    event.preventDefault();
    if (input.current.value) {
      dispatch(cityActions.filter_city_name(input.current.value));
    } else {
      dispatch(cityActions.get_city());
    }
  };

  return (
    <>
      <div className="citiesContainer">
        <Header />
        <div className="row justify-content-center d-flex ">
          <h2 className="col-8 mt-5 text-white textCities">Cities</h2>
          <p className="text-white textCollection mt-1">
            Collection of the most beautiful places and experience
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="labelClass mt-4 mb-5">
            <input
              type=" text"
              className="textSerach form-control me-1 "
              ref={input}
              placeholder="  Search"
              aria-label="Search"
            />
            <button className="btn btn-primary">
              <FaSearch size={12} />
            </button>
          </label>
        </form>
      </div>
      <section className="sectionContainer">
        <div className="row justify-content-center d-flex ">
          {cityInStore.length > 0 ? (
            cityInStore.map((array) => (
              <Cards
                cardLink={array.images}
                cardTitle={array.city}
                cardDescription={array.country}
                id={array._id}
              />
            ))
          ) : (
            <h2 className="mt-5">No hay resultados</h2>
          )}
        </div>
        <Footer />
      </section>
    </>
  );
}
