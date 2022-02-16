import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import { getAllBreeds } from "./config/Database.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

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

app.post("/api/uploads", upload.single("dog_pic"), (req, res) => {
  res.json(req.file);
});

app.get("/api/breeds", (req, res) => {
  getAllBreeds()
    .then((result) => res.json(result))
    .catch((e) => console.log("error from server get", e));
});

const __dirname = path.resolve();
app.use("/images", express.static(path.join(__dirname, "/uploads")));

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
