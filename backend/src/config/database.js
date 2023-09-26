const { connect } = require("mongoose");

const URI =
  "mongodb+srv://miltonfruizok:Oo8J985QBg2cN5MM@cluster0.14r2qon.mongodb.net/?retryWrites=true&w=majority";

connect(URI)
  .then(() => {
    console.log("¡Connected to the database!");
  })
  .catch(() => {
    console.log("x ¡Error connecting to database! x");
  });
