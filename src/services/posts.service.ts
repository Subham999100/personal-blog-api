import { prisma } from "../infrastructure/database/prisma.js";
import { Prisma } from "../generated/prisma/client.js";
import { AppError } from "../errors/app-error.js";

export async function getAllPosts() {
    return prisma.post.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
}

export async function getPostById(id: string) {
    const post = await prisma.post.findUnique({
        where: {
            id: Number(id),
        },
    });

    if (!post) {
        throw new AppError(
            404,
            "POST_NOT_FOUND",
            "Post not found",
        );
    }

    return post;
}
export async function createPost(input: {
    title: string;
    slug: string;
    content: string;
}) {
    try {
        return await prisma.post.create({
            data: {
                title: input.title,
                slug: input.slug,
                content: input.content,
            },
        });
    } catch (error) {
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
        ) {
            throw new AppError(
                409,
                "SLUG_ALREADY_EXISTS",
                "A post with this slug already exists",
            )
        }

        throw error;
    }
}
export async function updatePost(
    id: string,
    input: Prisma.PostUpdateInput,
) {
    try {
        return await prisma.post.update({
            where: {
                id: Number(id),
            },
            data: input,
        });
    } catch (error) {
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
        ) {
            throw new AppError(
                409,
                "SLUG_ALREADY_EXISTS",
                "A post with this slug already exists",
            );
        }

        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2025"
        ) {
            throw new AppError(
                404,
                "POST_NOT_FOUND",
                "Post not found",
            );
        }

        throw error;
    }
}
export async function deletePost(id: string) {
    try {
        return await prisma.post.delete({
            where: {
                id: Number(id),
            },
        });
    } catch (error) {
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2025"
        ) {
            throw new AppError(
                404,
                "POST_NOT_FOUND",
                "Post not found",
            );
        }

        throw error;
    }
}