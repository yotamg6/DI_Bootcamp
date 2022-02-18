import { Uploads } from "../models/UserModel.js";
import { Authentication } from "../models/UserModel.js";
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";

// export const UploadFiles = async (req, res) => {
//   try {
//     const ret = await Uploads.create({
//       filename: fileName,
//       filetype: fileType,
//     });
//     console.log(ret);
//     res.json({ filedata: ret.dataValues });
//   } catch (e) {
//     console.log(e);
//     res.json({ msg: "cannot upload file" });
//   }
// };

export const Register = async (req, res) => {
  console.log("Register:", req.body);
  const { userName, email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Authentication.create({
      username: userName,
      email: email,
      password: hashPassword,
    });
    res.json({ msg: "Your registration has been successfully completed" });
  } catch (err) {
    res.status(404).json({ msg: "email already exists" }); //find how to defrentiate between email and username?
  }
};

export const Login = async (req, res) => {
  try {
    const user = await Authentication.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);

    if (!match) {
      res.status(404).json({ msg: "Wrong Password, please try again" });
    }
    const userName = user[0].username;
    const email = user[0].email;
    const accessToken = jwt.sign(
      { userName, email },
      process.env.ACCESS_TOKEN_SECRET, //how can we use .env?
      { expiresIn: "60s" }
    );
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 60 * 1000,
    });
    res.json({ accessToken });
  } catch (e) {
    res.status(404).json({ msg: "Email not found, please register" });
  }
};
