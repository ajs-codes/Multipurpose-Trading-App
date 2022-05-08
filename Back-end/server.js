const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const env = require("dotenv");


// environment variable or const
env.config();

// mongodb connection cloud
const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@multipurpose-trading-db.7up6u.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`

// middlewares
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(cors());
app.use(express.json());



app.get("/api", (req, res) => {
  res.status(200).json({ head: "hello" });
});

app.use((req, res) => {
  res.status(404).send("Api Not found");
});

app.listen(process.env.PORT, () => {
  console.log(`Server started in url : https://localhost:${process.env.PORT}`);
});
