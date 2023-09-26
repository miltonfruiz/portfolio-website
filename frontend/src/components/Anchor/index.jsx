import React from "react";
import "./style.css";
import { Link as Anchors } from "react-router-dom";

export default function Anchor({ href, styles, tittle, position, name }) {
  return (
    <>
      <div className={position}>
        {" "}
        <Anchors to={href} id={name} className={styles}>
          {tittle}
        </Anchors>
      </div>
    </>
  );
}
