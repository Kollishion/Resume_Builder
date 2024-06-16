import express from "express";
import cors from "cors";
import {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
} from "../controllers/authController.js";
const router = express.Router();

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", test);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.post("/logout", logoutUser);

export default router;
