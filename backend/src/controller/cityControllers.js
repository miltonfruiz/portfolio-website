const City = require("../models/City");

const getCity = async (req, res) => {
  const queryParams = {};
  if (req.query.city) {
    queryParams.city = { $regex: req.query.city, $options: "i" };
  }
  if (req.query.country) {
    queryParams.country = { $regex: req.query.country, $options: "i" };
  }
  try {
    const city = await City.find(queryParams).populate("itineraries");
    res.status(200).json(city);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getCityId = async (req, res) => {
  try {
    let { id } = req.params;
    let foundCity = await City.findById(id).populate("itineraries");
    res.status(200).json(foundCity);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const postCity = async (req, res) => {
  try {
    const createCity = await City.create(req.body);
    res.status(201).json({
      message: "The city has been added successfully!",
      newCity: createCity,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const deleteCity = async (req, res) => {
  try {
    let { id } = req.query;
    await City.deleteOne({ _id: id });
    res
      .status(201)
      .json({ message: "The city has been deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const updateCity = async (req, res) => {
  try {
    let { id } = req.query;
    await City.findByIdAndUpdate(id, {
      city: req.query.city,
      country: req.query.country,
      images: req.query.images,
      region: req.query.region,
      population: req.query.population,
      badge: req.query.badge,
      monument: req.query.monument,
      description: req.query.description,
    });
    let foundedCityUpdated = await City.findById(id).populate("itineraries");
    res.status(201).json({
      message: "The city has been updated successfully!",
      Updated: foundedCityUpdated,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
module.exports = {
  getCity,
  getCityId,
  postCity,
  deleteCity,
  updateCity,
};
