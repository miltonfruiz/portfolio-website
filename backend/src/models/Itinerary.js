const { Schema, model, Types } = require("mongoose");

const schemaItineary = new Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  comments: {
    type: Array,
    required: false,
  },
  activities: {
    type: Array,
    required: false,
  },
  city: { type: Types.ObjectId, ref: "City" },
});
const Itinerary = model("Itinerary", schemaItineary);
module.exports = Itinerary;
