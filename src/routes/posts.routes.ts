import { Router } from "express";

import { validate } from "../middleware/validate.js";

import {
    createPostSchema,
    updatePostSchema,
} from "../validation/posts.schema.js";

import {
    createPost,
    deletePost,
    getPostById,
    getPosts,
    updatePost,
} from "../controller/posts.controller.js";

const router = Router();

router.get("/", getPosts);

router.get("/:id", getPostById);

router.post(
    "/",
    validate(createPostSchema),
    createPost,
);

router.patch(
    "/:id",
    validate(updatePostSchema),
    updatePost,
);
router.delete("/:id", deletePost);

export default router;