"use server";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function createUserWithStarSign(data: FormData) {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be signed in to use this feature");
  }

  const username = user.fullName || user.username;

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
      name: username?.toString() as string,
      email: email,
      starSign: {
        connect: {
          id: starSignId,
        },
      },
    },
  });
  return { success: true };
}

export async function retrieveUserInfo() {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be signed in to use this feature");
  }

  const userInfo = await prisma.user.findUnique({
    where: {
      clerkUserId: user.id as string,
    },
    select: {
      name: true,
      email: true,
      starSign: {
        select: {
          name: true,
        },
      },
    },
  });

  return { success: true, userInfo };
}

export async function getStarSignsForUser() {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be signed in to use this feature");
  }

  const userInfo = await prisma.user.findUnique({
    where: {
      clerkUserId: user.id as string,
    },
    select: {
      starSign: {
        select: {
          name: true,
        },
      },
    },
  });

  return { success: true, userInfo };
}

export async function retrieveStarSigns() {
  const starSigns = await prisma.starSign.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return starSigns;
}
