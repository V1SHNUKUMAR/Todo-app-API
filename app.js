import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import { connectDB } from "./data/database.js";
// import router from "./routes/user.js";
import { config } from "dotenv";

export const app = express();

config({
  path: "./data/config.env",
});

// using middlewares
app.use(express.json());
app.use("/users", userRouter);

// GET requests
app.get("/", (req, res) => {
  res.send("Nice working");
});
