import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { getAllBreeds } from "./config/Database.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/breeds", (req, res) => {
  getAllBreeds()
    .then((result) => res.json(result))
    .catch((e) => console.log("error from server get", e));
});

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
