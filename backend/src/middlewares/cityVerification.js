const cityDataVerification = (req, res, next) => {
  let {
    city,
    country,
    images,
    region,
    population,
    badge,
    monument,
    description,
    itineraries,
  } = req.body;

  if (city == "") {
    return res.status(400).json({ message: "x ¡Invalid city! x" });
  }
  if (country == "") {
    return res.status(400).json({ message: "x ¡Invalid country! x" });
  }
  if (images == "") {
    return res.status(400).json({ message: "x ¡Invalid image! x" });
  }
  if (region == "") {
    return res.status(400).json({ message: "x ¡Invalid region! x" });
  }
  if (population == 0) {
    return res.status(400).json({ message: "x ¡Invalid population! x" });
  }
  if (badge == "") {
    return res.status(400).json({ message: "x ¡Invalid money! x" });
  }
  if (monument == "") {
    return res.status(400).json({ message: "x ¡Invalid monument! x" });
  }
  if (description == "") {
    return res.status(400).json({ message: "x ¡Invalid description! x" });
  }
  if (itineraries == [{}]) {
    return res.status(400).json({ message: "x ¡Invalid itineraries! x" });
  }
  next();
};
module.exports = { cityDataVerification };
