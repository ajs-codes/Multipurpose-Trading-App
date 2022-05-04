const express = require("express");
const morgan = require("morgan");
const env = require("dotenv");

const app = express();

env.config();
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({ head: "hello" });
});

app.use((req, res) => {
  res.status(404).send("Api Not found");
});

app.listen(process.env.PORT, () => {
  console.log("Server started!");
});
