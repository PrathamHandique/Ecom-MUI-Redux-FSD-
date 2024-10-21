const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
//register controller
const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.send({ message: "please fill all the fields" });
    }
    const exisitingUser = await userModel.findOne({ email });
    if (exisitingUser) {
      return res.send({ message: "user already exisits" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ name, email, password: hashedPassword });
    await user.save();
    return res.status(201).send({ message: "New User Created", user });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};
//login controller
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send({message: "Please provide email or password"});
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({message: "email is not registerd"});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({message: "Invlid username or password"});
    }
    return res.status(200).send({messgae: "login successfull",user});
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  registerController,
  loginController,
};
