const User = require("../models/user");
const Wallet = require("../models/wallet");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.authTest = (req, res) => {
  res.status(200).json({
    msg: "API Auth Route Hit",
  });
};

exports.authRegister = async (req, res) => {
  try {
    // user params
    const { user_name, last_name, email, password } = req.body;
    // params validation
    if (!(email && password && user_name)) {
      return res.status(400).json({ error: "All input is required" });
    }
    // user exist validation
    const _user = await User.findOne({ email: email });
    if (_user) {
      return res.status(400).json({ error: "User already exist" });
    }

    // creating a user
    pass = await bcrypt.hash(password, 10);
    const user = await User.create({
      userName: user_name,
      email: email.toLowerCase(),
      password: pass,
    });
    // creating a wallet for user
    const wallet = await Wallet.create({
      userID: user._id,
    });
    // generating jwt token
    const token = jwt.sign(
      { id: user._id, email: user.email, wid: wallet._id },
      process.env.ACCESS_TOKEN_KEY
    );
    return res.status(201).json({
      msg: "User Created",
      token,
    });
  } catch (err) {
    res.status(500);
    console.log(err);
  }
};

exports.authLogin = async (req, res) => {
  try {
    //  user params
    const { email, password } = req.body;

    // params validation
    if (!(email && password)) {
      return res.status(400).json({ error: "All input is required" });
    }

    // user validation
    const user = await User.findOne({ email });
    const wallet = await Wallet.findOne({ userID: user._id });
    if (user && wallet && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { id: user._id, email: user.email, wid: wallet._id },
        process.env.ACCESS_TOKEN_KEY
      );

      return res.status(200).json({
        url: "/",
        token,
      });
    }
    return res.status(400).json({
      error: "Invalid Credentials",
    });
  } catch (err) {
    res.status(500);
    console.log(err);
  }
};
