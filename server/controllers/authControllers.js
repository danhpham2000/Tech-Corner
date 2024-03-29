/* eslint-disable no-undef */
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "ree security", { expiresIn: maxAge });
};

module.exports.postSignUp = async (req, res) => {
  const { email, password, confirmedPassword } = req.body;

  try {
    if (password !== confirmedPassword) {
      throw new Error("Password does not match");
    }
    const user = User.create({
      email,
      password,
    });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({
      message: "User created!",
      user: user._id,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({
      message: "User login!",
      user: user._id,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      message: err.message,
    });
  }
};
