import React from "react";
import "./style.css";
import Carousel from "../Carousel";
import Call from "../Call";
import Footer from "../Footer";
import Banner from "../Banner";

function Main() {
  return (
    <main>
      <Banner />
      <Call />
      <Carousel />
      <Footer />
    </main>
  );
}

export default Main;
