import express from "express";
import cors from "cors";
import feedbackController from "../controllers/feedbackController.js";
const router = express.Router();

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.post("/feedback", feedbackController);

export default router;
