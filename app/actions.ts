"use server";
import { currentUser } from "@clerk/nextjs/server";

export const authuser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be signed in to use this feature");
  }
  return user;
};
