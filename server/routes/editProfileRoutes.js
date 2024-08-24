import express from "express";
import cors from "cors";
import editProfileController from "../controllers/editProfileController.js";

const router = express.Router();

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.put("/:userId", editProfileController);

export default router;
