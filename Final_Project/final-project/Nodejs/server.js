import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
// import multer from "multer";
import path from "path";
// import { getAllBreeds } from "./config/Database.js";
import { db } from "./config/Database.js";
// import { Uploads } from "./models/UserModel.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected");
} catch (e) {
  console.log(e);
}
//it doesnt need an async function?

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
app.use(router);

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     const extName = path.extname(file.originalname);
//     const fileName =
//       path.basename(file.originalname, extName) +
//       "-" +
//       Date.now() +
//       "-" +
//       extName;
//     cb(null, fileName);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({ storage: storage, fileFilter: fileFilter });

// app.post("/api/uploads", upload.single("dog_pic"), async (req, res) => {
//   //   res.json(req.file.filename);
//   const fileName = req.file
//     ? req.file.filename
//     : res.json({ msg: "No file to upload" });
//   const fileType = req.file ? req.file.mimetype : null;

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
// });

// app.get("/api/images", async (req, res) => {
//   const images = await Uploads.findAll({
//     where: {
//       filetype: "image/jpeg",
//     },
//   });
//   res.json(images);
// });

//I should probably move the app.get and .post multer, and maybe most of the file to the routes,

// app.get("/api/breeds", (req, res) => {
//   getAllBreeds()
//     .then((result) => res.json(result))
//     .catch((e) => console.log("error from server get", e));
// });

const __dirname = path.resolve();
app.use("/images", express.static(path.join(__dirname, "/uploads")));

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
