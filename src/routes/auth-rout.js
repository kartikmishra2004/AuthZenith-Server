import express from "express";
import {register, login, user} from '../controllers/auth-controller.js';
import validate from '../middlewares/validate-middleware.js';
import {signupSchema, loginSchema} from '../validators/auth-validator.js';
import authMiddleware from '../middlewares/auth-middleware.js';

const router = express.Router();

// Register router
router.route("/register").post(validate(signupSchema), register);

// Login router
router.route("/login").post(validate(loginSchema), login);

// User router
router.route("/user").get(authMiddleware, user);

export default router;