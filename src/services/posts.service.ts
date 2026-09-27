import { prisma } from "../infrastructure/database/prisma.js";
import { Prisma } from "../generated/prisma/client.js";

export async function getAllPosts() {
    return prisma.post.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
}

export async function getPostById(id: string) {
    return prisma.post.findUnique({
        where: {
            id: Number(id),
        },
    });
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
            throw new Error("SLUG_ALREADY_EXISTS");
        }

        throw error;
    }
}