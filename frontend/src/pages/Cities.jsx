import React from "react";
import Fetch from "../components/Fetch";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Cities() {
  let token = localStorage.getItem("token");
  if (!token) {
    Swal.fire({
      icon: "warning",
      title: "¡Access Denied!",
      text: "Need login...",
    });
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <Fetch />
    </>
  );
}
