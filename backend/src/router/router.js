const express = require("express");
const router = express.Router();
const {
  getCity,
  getCityId,
  postCity,
  deleteCity,
  updateCity,
} = require("../controller/cityControllers");
const { cityDataVerification } = require("../middlewares/cityVerification");

const {
  getItineraries,
  getItinerariesCity,
  getItineraryId,
  postItinerary,
  putItinerary,
  deleteItinerary,
} = require("../controller/itineraryControllers");
const {
  itineraryDataVerification,
} = require("../middlewares/itineraryVerification");

const authRouter = require("./auth");
const { passportVerify } = require("../middlewares/authVerification");

router.get("/cities", getCity);
router.get("/cities/:id", getCityId);
router.post(
  "/cities",
  passportVerify.authenticate("jwt", { session: false }),
  cityDataVerification,
  postCity
);
router.delete(
  "/cities",
  passportVerify.authenticate("jwt", { session: false }),
  cityDataVerification,
  deleteCity
);
router.put(
  "/cities",
  passportVerify.authenticate("jwt", { session: false }),
  cityDataVerification,
  updateCity
);

router.get("/itinerary", getItineraries);
router.get("/itinerary/:city", getItinerariesCity);
router.get("/itinerary/:id", getItineraryId);
router.post(
  "/itinerary",
  passportVerify.authenticate("jwt", { session: false }),
  itineraryDataVerification,
  postItinerary
);
router.put(
  "/itinerary",
  passportVerify.authenticate("jwt", { session: false }),
  itineraryDataVerification,
  putItinerary
);
router.delete(
  "/itinerary",
  passportVerify.authenticate("jwt", { session: false }),
  itineraryDataVerification,
  deleteItinerary
);
router.use("/user", authRouter);

module.exports = router;
