import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const sign_in = createAsyncThunk("sign_in", async (payload) => {
  try {
    let { email, password } = payload;
    const user = await axios
      .post("http://localhost:3000/api/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          heightAuto: "100px",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Signed in successfully!!!",
        }).then(() => window.location.replace("/"));
        return response.data.user;
      })
      .catch((error) => {
        let errorMessages = error.response.data.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessages,
        });
      });
    console.log({ password: password });
    return {
      user: user,
    };
  } catch (error) {
    console.log(error.message);
  }
});
const authenticate = createAsyncThunk("authenticate", async () => {
  try {
    let token = localStorage.getItem("token");
    let user = await axios
      .post("http://localhost:3000/api/user/authenticated", null, {
        headers: {
          Authorization: "Bearer" + token,
        },
      })
      .then((response) => {
        console.log("¡Authenticated successfully!");
        localStorage.setItem("token", response.data.token);
        return response.data.user;
      });
    return {
      user: user,
    };
  } catch (error) {
    console.log(error.message);
  }
});
const log_out = createAsyncThunk("log_out", async () => {
  try {
    axios.post("http://localhost:3000/api/user/logout").then(() => {
      localStorage.removeItem("token");
      const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "Closing session...",
      }).then(() => window.location.replace("/"));
    });
  } catch (error) {
    console.log(error.message);
  }
});
const register = createAsyncThunk("register", async (payload) => {
  try {
    let { name, lastName, email, password, images, country } = payload;
    const user = await axios
      .post("http://localhost:3000/api/user/register", {
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        images: images,
        country: country,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        Swal.fire({
          icon: "success",
          title: "¡Successfully created account!",
        }).then(() => window.location.replace("/"));
        return response.data.user;
      })
      .catch((error) => {
        let errorMessages = error.response.data.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessages,
        });
      });
    return {
      user: user,
    };
  } catch (error) {
    console.log(error.message);
  }
});
const userActions = { sign_in, authenticate, log_out, register };
export default userActions;
