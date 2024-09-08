import users from "../models/auth.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existinguser = await users.findOne({ email });
    if (existinguser) {
      return res.status(404).json({ message: "User already exist" });
    }
    const hashedpassword = await bcrypt.hash(password, 12);
    const newuser = await users.create({ name, email, password: hashedpassword });
    const token = jwt.sign({ email: newuser.email, id: newuser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ result: newuser, token });
    return;
  } catch (error) {
    return res.status(500).json("something went wrong...");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existinguser = await users.findOne({ email });
    if (!existinguser) {
      return res.status(404).json({ message: "User does not exist" });
    }
    const ispasswordcorrect = await bcrypt.compare(password, existinguser.password);
    if (!ispasswordcorrect) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign({ email: existinguser.email, id: existinguser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ result: existinguser, token });
  } catch (error) {
    res.status(500).json("something went wrong...");
    return;
  }
};
