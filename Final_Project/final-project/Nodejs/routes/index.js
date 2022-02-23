import express from "express";
import multer from "multer";
import path from "path";
const router = express.Router();
import GetAllBreeds from "../controllers/GetAllBreeds.js";
import { Uploads } from "../models/UserModel.js";
import {
  Register,
  Login,
  getCurUser,
  getAllOtherUsers,
  addToFavs,
  getMyFavs,
  Logout,
} from "../controllers/Users.js";
import { addToBreedFavs, getBreedFavs } from "../controllers/Breeds.js";
import { VerifyToken } from "../middleware/VerifyToken.js";

router.post("/register", Register);
router.post("/login", Login);
router.get("/token", VerifyToken, (req, res) => {
  res.status(200).json({ msg: "accessToken" });
});

//move to the controllers?
router.get("/api/breeds", (req, res) => {
  GetAllBreeds()
    .then((result) => res.json(result))
    .catch((e) => console.log("error from router get", e));
});

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

router.post("/api/uploads", upload.single("dog_pic"), async (req, res) => {
  //   res.json(req.file.filename);
  // console.log("userName?:", req.body.userName);
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
    console.log(ret);
    res.json({ filedata: ret.dataValues });
  } catch (e) {
    console.log(e);
    res.json({ msg: "cannot upload file" });
  }
});

router.post("/api/my-images", getCurUser);
router.post("/api/others-images", getAllOtherUsers);
router.post("/favs", addToFavs);
router.post("/my-favs", getMyFavs);
router.post("/breed-favs", addToBreedFavs);
router.post("/mybreed-favs", getBreedFavs);
router.get("logout", Logout);
export default router;
