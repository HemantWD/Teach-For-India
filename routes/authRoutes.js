import express from "express";
import { registerVolunteerController } from "../controllers/authController.js";

// router object

const router = express.Router();

// volunteer registration
router.post("/register", registerVolunteerController);

export default router;
