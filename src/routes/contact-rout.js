import express from "express";
import contactForm from "../controllers/contact-controller.js";

const router = express.Router();

// Contact router
router.route("/form").post(contactForm);

export default router;