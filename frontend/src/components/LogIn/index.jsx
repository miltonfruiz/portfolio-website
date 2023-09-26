import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import userActions from "../../store/actions/user";
import "./style.css";
import { GoogleLogin } from "@react-oauth/google";
import jwtdecode from "jwt-decode";
import Header from "../Header";

export default function LogIn() {
  let inputEmail = useRef();
  let inputPassword = useRef();
  const dispatch = useDispatch();
  let handlerSignIn = (event) => {
    event.preventDefault();
    dispatch(
      userActions.sign_in({
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      })
    );
  };
  const signWithGoogle = (credentialResponse) => {
    const userData = jwtdecode(credentialResponse.credential);
    console.log(userData);
    dispatch(
      userActions.sign_in({
        email: userData.email,
        password: userData.sub,
      })
    );
  };
  return (
    <>
      <div className="loginContainer mt-0">
        <Header />
        <div className="row justify-content-center d-flex ">
          <h2 className="col-8 mt-5 mb-5 text-white loginText">Login</h2>
        </div>
        <div className="row justify-content-center d-flex divFormContainer mb-5">
          <form
            onSubmit={handlerSignIn}
            className="col-3 align-self-center formContainer"
          >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label mt-5">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ref={inputEmail}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                ref={inputPassword}
                autoComplete="on"
              />
            </div>
            <div className="mb-3 ms-2 mt-4">
              <a
                href="/register"
                className="form-check-label createClass"
                htmlFor="exampleCheck1"
              >
                * Create Account
              </a>
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary buttonSignIn mb-4"
            >
              Sign In
            </button>
            <GoogleLogin
              text="signin_with"
              size="small "
              onSuccess={signWithGoogle}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </form>
        </div>
      </div>
    </>
  );
}
