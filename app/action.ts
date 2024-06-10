"use server";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function createNewUser(data: FormData) {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be signed in to use this feature");
  }

  const username = data.get("name") as string;
  const email = data.get("email") as string;
  const starSignId = parseInt(data.get("starSignId") as string);
  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    throw new Error("A user with this email already exists");
  }

  await prisma.user.create({
    data: {
      clerkUserId: user?.id as string,
      name: user.fullName as string,
      email: email,
      starSignId,
    },
  });
  return { success: true };
}
export async function getStarSigns() {
  const starSigns = await prisma.starSign.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return starSigns;
}

export async function getMatch() {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be signed in to use this feature");
  }

  const userRecord = await prisma.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  if (!userRecord) {
    throw new Error("User not found");
  }

  const match = await prisma.match.findFirst({
    where: {
      userId: userRecord.id,
    },
  });

  return match;
}
