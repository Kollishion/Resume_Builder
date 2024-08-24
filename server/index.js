import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import editProfile from "./routes/editProfileRoutes.js";

// Load environment variables from .env file
dotenv.config();

//app
const app = express();

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log("Database not connected", err));

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/", authRoutes);
app.use("/Feedback", feedbackRoutes);
app.use("/editProfile", editProfile);

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
