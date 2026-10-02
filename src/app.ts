import express from "express";

import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/error-handler.js";
import postsRouter from "./routes/posts.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

app.use(logger);

app.get("/health", (_req, res) => {
    res.json({
        status: "ok",
        service: "personal-blog-api",
    });
});

app.use("/posts", postsRouter);
app.use("/auth", authRoutes);

app.use(errorHandler);

export default app;