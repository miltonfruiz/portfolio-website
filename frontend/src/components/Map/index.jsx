import React from "react";
import Urls from "../Urls";

export default function Map({ container }) {
  return (
    <>
      <p className="text-center popularTitle">Popular MYTINERARIES!</p>
      <div className="imgContainer col-6">
        {container.map((each, key) => (
          <Urls
            key={key}
            imageClass={each.imageClass}
            city={each.city}
            country={each.country}
          />
        ))}
      </div>
    </>
  );
}
