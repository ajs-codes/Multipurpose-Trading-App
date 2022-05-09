const mongoose = require("mongoose");

const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@multipurpose-trading-db.7up6u.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;

exports.connect = () => {
  mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection established with MongoDB");
    })
    .catch((error) => console.error(error.message));
};
