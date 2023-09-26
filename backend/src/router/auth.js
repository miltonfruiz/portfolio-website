const express = require("express");
const {
  login,
  createAccount,
  authenticated,
  logout,
} = require("../controller/usersControllers");
const { userDataVerification } = require("../middlewares/usersVerification");
const {
  hashPassword,
  userVerify,
  passwordVerify,
  generatedToken,
  passportVerify,
} = require("../middlewares/authVerification");
const authRouter = express.Router();

authRouter.post("/login", userVerify, passwordVerify, generatedToken, login);
authRouter.post("/register", userDataVerification, hashPassword, createAccount);
authRouter.post(
  "/authenticated",
  passportVerify.authenticate("jwt", { session: false }),
  generatedToken,
  authenticated
);
authRouter.post("/logout", logout);
module.exports = authRouter;
