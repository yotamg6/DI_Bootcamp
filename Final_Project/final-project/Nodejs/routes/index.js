import express from "express";
const router = express.Router();
import { getAllBreeds } from "../controllers/GetBreeds";

router.post("/register", Register);

router.get("/api/breeds", (req, res) => {
  getAllBreeds()
    .then((result) => res.json(result))
    .catch((e) => console.log("error from router get", e));
});

export default router;
