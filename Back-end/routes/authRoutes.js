const express = require("express");
const router = express.Router();
const {
  authTest,
  authRegister,
  authLogin,
} = require("../controllers/authControllers");
const verifyToken = require("../middleware/auth");

router.get("/auth", verifyToken, authTest);

router.post("/signup", authRegister);

router.post("/signin", authLogin);

module.exports = router;
