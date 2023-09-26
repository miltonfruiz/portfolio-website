const itineraryDataVerification = (req, res, next) => {
  let { name, images, price, duration, likes, tags } = req.body;
  if (name == "") {
    return res.status(400).json({ message: "x ¡Invalid name! x" });
  }
  if (images == "") {
    return res.status(400).json({ message: "x ¡Invalid images! x" });
  }
  if (price == "") {
    return res.status(400).json({ message: "x ¡Invalid price! x" });
  }
  if (duration == "") {
    return res.status(400).json({ message: "x ¡Invalid duration! x" });
  }
  if (likes < 0) {
    return res.status(400).json({ message: "x ¡Invalid likes! x" });
  }
  if (tags == "") {
    return res.status(400).json({ message: "x ¡Invalid tags! x" });
  }
  next();
};
module.exports = { itineraryDataVerification };
