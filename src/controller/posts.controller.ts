import type { Request, Response } from "express";

import {
    createPost as createPostService,
    getAllPosts,
    getPostById as findPostById,
    updatePost as updatePostService,
    deletePost as deletePostService,
} from "../services/posts.service.js";

import { AppError } from "../errors/app-error.js";

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

    if (!id || Array.isArray(id) || !/^\d+$/.test(id)) {
        throw new AppError(
            400,
            "INVALID_POST_ID",
            "Post ID must be a valid number",
        );
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
    const post = await createPostService(req.body);

    res.status(201).json({
        post,
    });
}

export async function updatePost(
    req: Request,
    res: Response,
): Promise<void> {
    const { id } = req.params;

    if (!id || Array.isArray(id) || !/^\d+$/.test(id)) {
        throw new AppError(
            400,
            "INVALID_POST_ID",
            "Post ID must be a valid number",
        );
    }

    const post = await updatePostService(id, req.body);

    res.json({
        post,
    });
}
export async function deletePost(
    req: Request,
    res: Response,
): Promise<void> {
    const { id } = req.params;

    if (!id || Array.isArray(id) || !/^\d+$/.test(id)) {
        throw new AppError(
            400,
            "INVALID_POST_ID",
            "Post ID must be a valid number",
        );
    }

    await deletePostService(id);

    res.status(204).send();
}