const bcrypt = require("bcrypt");
const Users = require("../models/Users");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");

const passportVerify = passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "secretPassword",
    },
    async (payload, done) => {
      try {
        let foundedUser = await Users.findOne({ email: payload.email });
        if (foundedUser) {
          return done(null, foundedUser);
        } else {
          return done(null);
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);
const hashPassword = (req, res, next) => {
  try {
    const passwordPlain = req.body.password;
    const hashPassword = bcrypt.hashSync(passwordPlain, 10);
    req.body.password = hashPassword;
    next();
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
const passwordVerify = (req, res, next) => {
  const passwordPlain = req.body.password;
  const hashPassword = req.user.password;
  const validated = bcrypt.compareSync(passwordPlain, hashPassword);
  if (validated) {
    next();
  } else {
    res.status(400).json({ message: "x ¡Wrong password! x" });
  }
};
const userVerify = async (req, res, next) => {
  const { email } = req.body;
  const foundedUser = await Users.findOne({ email: email });
  if (foundedUser) {
    req.user = foundedUser;
    next();
  } else {
    res.status(400).json({ message: "x ¡User not founded! x" });
  }
};
const generatedToken = (req, res, next) => {
  try {
    let secretKey = "secretPassword";
    let token = jwt.sign({ email: req.user.email }, secretKey, {
      expiresIn: 60 * 5,
    });
    req.token = token;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  hashPassword,
  passwordVerify,
  userVerify,
  generatedToken,
  passportVerify,
};
