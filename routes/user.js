import express from "express";
import User from "../models/user.js";
import { getAllUsers, register, getUserById } from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.route("/userId/:id").get(getUserById);

// POST requests

router.post("/new", register);
router.post("/login", login);

export default router;
