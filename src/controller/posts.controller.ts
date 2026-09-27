import type { Request, Response } from "express";

import {
    createPost as createPostService,
    getAllPosts,
    getPostById as findPostById,
} from "../services/posts.service.js";
import { createPostSchema } from "../validation/posts.schema.js";

export async function getPosts(
    _req: Request,
    res: Response,
): Promise<void> {
    const posts = await getAllPosts();

    res.json({
        posts,
    });
}

export async function getPostById(
    req: Request,
    res: Response,
): Promise<void> {
    const { id } = req.params;

    if (!id || Array.isArray(id)) {
        res.status(400).json({
            error: "Invalid post ID",
        });

        return;
    }

    const post = await findPostById(id);

    res.json({
        post,
    });
}

export async function createPost(
    req: Request,
    res: Response,
): Promise<void> {
    const result = createPostSchema.safeParse(req.body);

    if (!result.success) {
        res.status(400).json({
            error: {
                code: "VALIDATION_ERROR",
                message: "Invalid post data",
                details: result.error.issues,
            },
        });

        return;
    }

    const post = await createPostService(result.data);

    res.status(201).json({
        post,
    });
}