import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(30),
  displayName: z.string().min(1).max(100),
  password: z.string().min(8).max(128),
});