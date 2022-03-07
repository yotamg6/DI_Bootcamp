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

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
app.use(router);

const __dirname = path.resolve();
app.use("/images", express.static(path.join(__dirname, "/uploads")));

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
