const { Schema, model, Types } = require("mongoose");

const schemaUsers = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
});
const Users = model("Users", schemaUsers);
module.exports = Users;
