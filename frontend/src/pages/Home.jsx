import React from "react";
import Main from "../components/Main";
import Header from "../components/Header";
import "./style.css";

export default function Home() {
  return (
    <>
      <div className="headerMain">
        <Header />
        <Main />
      </div>
    </>
  );
}
