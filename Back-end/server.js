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
const authRoutes = require("./routes/authRoutes");

// routes middleware
app.use("/api", authRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).send("Api Not found");
});

// starting the server
app.listen(process.env.PORT, () => {
  console.log(`Server started in url : http://localhost:${process.env.PORT}`);
});
