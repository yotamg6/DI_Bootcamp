import express from "express";
import multer from "multer";
import path from "path";
const router = express.Router();
import { GetAllBreeds } from "../controllers/GetAllBreeds.js";
import { Uploads } from "../models/UserModel.js";
import {
  Register,
  Login,
  GetCurUser,
  DeleteMyDog,
  GetAllOtherUsers,
  AddToFavs,
  GetMyFavs,
  DeleteFromFavs,
  Logout,
} from "../controllers/Users.js";
import {
  AddToBreedFavs,
  GetBreedFavs,
  DeleteFromBreedFavs,
} from "../controllers/Breeds.js";
import { VerifyToken } from "../middleware/VerifyToken.js";

router.post("/register", Register);
router.post("/login", Login);
router.get("/token", VerifyToken, (req, res) => {
  res.status(200).json({ msg: "accessToken" });
});
router.get("/api/breeds", GetAllBreeds);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const extName = path.extname(file.originalname);
    const fileName =
      path.basename(file.originalname, extName) +
      "-" +
      Date.now() +
      "-" +
      extName;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/uploads", upload.single("dog_pic"), async (req, res) => {
  const breed = req.body.userBreed ? req.body.userBreed : null;
  const dogName = req.body.userDogName ? req.body.userDogName : null;
  const aboutDog = req.body.aboutTextArea ? req.body.aboutTextArea : null;
  const fileName = req.file
    ? req.file.filename
    : res.json({ msg: "No file to upload" });
  const fileType = req.file ? req.file.mimetype : null;

  try {
    const ret = await Uploads.create({
      username: req.body.userName,
      breed: breed,
      dogname: dogName,
      about_dog: aboutDog,
      filename: fileName,
      filetype: fileType,
    });

    res.json({ filedata: ret.dataValues });
  } catch (e) {
    console.log("from uploads", e);
    res.status(403).json({
      msg: "Your dog's deatils are already in the system. press reset if you wish to make changes",
    });
  }
});
router.post("/delete-mydog", DeleteMyDog);
router.post("/my-images", GetCurUser);
router.post("/others-images", GetAllOtherUsers);
router.post("/dog-favs", AddToFavs);
router.post("/my-favs", GetMyFavs);
router.post("/breed-favs", AddToBreedFavs);
router.post("/mybreed-favs", GetBreedFavs);
router.post("/delete-dogfav", DeleteFromFavs);
router.post("/delete-breedfav", DeleteFromBreedFavs);
router.get("logout", Logout);
export default router;
