import React from "react";
import "./style.css";
import Carousel from "../Carousel";
import Welcome from "../Welcome";
import Call from "../Call";
import Footer from "../Footer";

function Main() {
  return (
    <main>
      <Welcome />
      <Call />
      <Carousel />
      <Footer />
    </main>
  );
}

export default Main;
