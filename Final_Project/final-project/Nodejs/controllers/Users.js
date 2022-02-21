import { Users, Uploads, Favs } from "../models/UserModel.js";
import { db } from "../config/Database.js";

import multer from "multer";
import path from "path";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Sequelize } from "sequelize";

const { Op } = Sequelize;

export const Register = async (req, res) => {
  console.log("Register:", req.body);
  const { userName, email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Users.create({
      username: userName,
      email: email,
      password: hashPassword,
    });
    res.json({ msg: "Your registration has been successfully completed!" });
  } catch (err) {
    res.status(404).json({ msg: "email already exists" }); //find how to defrentiate between email and username?
  }
};

export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
        username: req.body.userName,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);

    if (!match)
      return res.status(404).json({ msg: "Wrong password, please try again" });

    const userName = user[0].username;
    const email = user[0].email;
    const accessToken = jwt.sign(
      { userName, email },
      process.env.ACCESS_TOKEN_SECRET, //how can we use .env? it's not imported here
      { expiresIn: "60s" }
    );
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 60 * 1000,
    });
    res.json({ accessToken });
  } catch (e) {
    res.status(404).json({ msg: "User not found" });
  }
};
//should I add username error?

export const getCurUser = async (req, res) => {
  try {
    const myImages = await Uploads.findAll({
      where: {
        filetype: {
          [Op.or]: ["image/jpeg", "image/png"],
        },
        username: req.body.userName,
      },
    });
    res.json(myImages);
  } catch (e) {
    console.log("in getCurUser:", e);
  }
};

export const getAllOtherUsers = async (req, res) => {
  //   console.log("in get all");
  try {
    const othersImages = await Uploads.findAll({
      where: {
        filetype: {
          [Op.or]: ["image/jpeg", "image/png"],
        },
        username: {
          [Op.ne]: req.body.userName,
        },
      },
    });
    res.json(othersImages);
  } catch (e) {
    console.log("in getallotherusers:", e);
  }
};

export const addToFavs = async (req, res) => {
  console.log("selected user in addtofavs backend:", req.body.selectedUser);
  console.log("username in addtofavs backend:", req.body.userName);
  console.log("uploadId in addtofavs backend:", req.body.uploadId);
  try {
    await Favs.create({
      username: req.body.userName,
      selecteduser: req.body.selectedUser,
      uploadid: req.body.uploadId,
    }),
      res.json({ msg: "image added to favorites" });
  } catch (e) {
    console.log("error from addtofavs:", e);
    res.json({ msg: "failed to add image" });
  }

  //how to prevent user from uploading same photo several times?
};

// export const getMyFavs = async (req, res) => {
//   Uploads.hasOne(Favs);
//   Favs.belongsTo(Uploads);
//   try {
//     const myFavs = await Uploads.findAll({
//       where: { username: req.body.userName },
//       include: [
//         {
//           model: Favs,
//           required: true,
//           where: {
//             selecteduser: req.body.userName,
//           },
//         },
//       ],
//     });
//     console.log("my favs:", myFavs);
//     res.json(myFavs);
//   } catch (e) {
//     console.log("in getMyFavs:", e);
//   }
// };

export const getMyFavs = async (req, res) => {
  try {
    const [results, metadata] = await db.query(
      `select * from uploads u, favs f where f.selecteduser=u.username and f.username='${req.body.userName}'`
    );
    console.log(results);
    res.json(results);
  } catch (e) {
    console.log("cannot get favs");
  }
};

// -- SELECT f.username, f.selecteduser, u.filename
// -- from uploads u, favs f
// -- where f.selecteduser = u.username
// -- and f.username='yot'

// -- SELECT filename from uploads where username in (
// -- 	SELECT selecteduser from favs where username='yot'
// -- )
