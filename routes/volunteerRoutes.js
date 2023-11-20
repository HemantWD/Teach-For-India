import express from "express";
import {
  listofcandidates,
  registerVolunteerController,
} from "../controllers/volunteerController.js";

// router object

const router = express.Router();

// volunteer registration
router.post("/register", registerVolunteerController);

// Geting list of volunteers
router.get("/listofcandidates", listofcandidates);

export default router;
