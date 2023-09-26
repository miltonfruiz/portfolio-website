import React, { useEffect, useState } from "react";
import { IMAGES } from "../../variables/const";
import Map from "../Map";
import "./style.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

export default function Carousel() {
  let [index, setIndex] = useState(1);
  let handlerPrew = () => {
    if (index != 1) {
      setIndex(index - 1);
    } else {
      setIndex(index + 2);
    }
  };
  let handlerNext = () => {
    if (index != 3) {
      setIndex(index + 1);
    } else {
      setIndex(index - 2);
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      handlerNext();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <>
      {index == 1 || index == 2 || index == 3 ? (
        <>
          <div className="section justify-content-center col-8">
            {index == 1 && <Map container={IMAGES[0].firsContainer} />}
            {index == 2 && <Map container={IMAGES[0].secoundContainer} />}
            {index == 3 && <Map container={IMAGES[0].thirdContainer} />}
          </div>
        </>
      ) : (
        <>
          <p>No existe</p>
        </>
      )}
      <FaChevronCircleLeft
        size={25}
        className="prew "
        onClick={() => handlerPrew()}
      />
      <FaChevronCircleRight
        size={25}
        className="next"
        onClick={() => handlerNext()}
      />
    </>
  );
}
