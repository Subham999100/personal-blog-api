import { prisma } from "../infrastructure/database/prisma.js";
import { hashPassword } from "../utils/password.js";
import { AppError } from "../errors/app-error.js";
import { Prisma } from "../generated/prisma/client.js";

type RegisterInput = {
  email: string;
  username: string;
  displayName: string;
  password: string;
};

export async function registerUser(input: RegisterInput) {
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [
        { email: input.email },
        { username: input.username },
      ],
    },
  });

  if (existingUser) {
    throw new AppError(
      409,
      "USER_ALREADY_EXISTS",
      "A user with these details already exists",
    );
  }

  const passwordHash = await hashPassword(input.password);

  try {
    const user = await prisma.user.create({
      data: {
        email: input.email,
        username: input.username,
        displayName: input.displayName,
        passwordHash,
      },
      select: {
        id: true,
        email: true,
        username: true,
        displayName: true,
        role: true,
        createdAt: true,
      },
    });

    return user;
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new AppError(
        409,
        "USER_ALREADY_EXISTS",
        "A user with these details already exists",
      );
    }

    throw error;
  }
}