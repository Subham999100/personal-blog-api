import { Router } from "express";
import { register } from "../controller/auth.controller.js";
import { validate } from "../middleware/validate.js";
import { registerSchema } from "../validation/auth.schema.js";

const router = Router();

router.post(
  "/register",
  validate(registerSchema),
  register,
);

export default router;