const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignup = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Fields can't be empty" });
    }

    const existuser = await User.findOne({ email });
    if (existuser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashpwd = await bcrypt.hash(password, 10);
    const newuser = await User.create({ email, password: hashpwd });

    const token = jwt.sign({ email, id: newuser._id }, process.env.SECRETE_KEY, {
      expiresIn: "1h",
    });

    return res.status(201).json({ token, user: newuser });
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Fields can't be empty" });
    }

    const existuser = await User.findOne({ email });
    if (existuser && (await bcrypt.compare(password, existuser.password))) {
      const token = jwt.sign(
        { email, id: existuser._id },
        process.env.SECRETE_KEY,
        { expiresIn: "1h" }
      );
      return res.status(200).json({ token, user: existuser });
    } else {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.json({ email: user.email });
  } catch (error) {
    console.error("GetUser Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { userSignup, userLogin, getUser };
