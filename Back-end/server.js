const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const env = require("dotenv");
// environment variable or const
env.config();
// database connection
require("./config/database.js").connect();

// config middleware
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(cors());
app.use(express.json());

// routes

// routes middleware
app.get("/api", (req, res) => {
  res.status(200).json({ head: "hello" });
});

app.use((req, res) => {
  res.status(404).send("Api Not found");
});

// starting the server
app.listen(process.env.PORT, () => {
  console.log(`Server started in url : https://localhost:${process.env.PORT}`);
});
