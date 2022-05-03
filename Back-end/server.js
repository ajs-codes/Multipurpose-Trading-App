const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.get("/api", (req, res) => {
  res.send("hello world!");
});

app.use((req, res) => {
  res.status(404).send("Api Not found");
});

app.listen(8000, () => {
  console.log("Server started!");
});
