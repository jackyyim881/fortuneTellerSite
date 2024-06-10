import { NextResponse } from "next/server";
import { auth, EmailAddress } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { clerkClient } from "@clerk/nextjs/server";

export async function GET(request: Request, res: Response) {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  let user = await prisma.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  try {
    const user = await clerkClient.users.getUser(userId);

    console.log(user);
    const { id, emailAddresses, firstName, lastName } = user;

    console.log(id, emailAddresses, firstName, lastName);
    return NextResponse.json({ id, emailAddresses, firstName, lastName });
  } catch (error) {
    NextResponse.json({ error: error }, { status: 500 });
  }

  return NextResponse.json(user);
}

export async function POST(request: Request, res: Response) {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { email, firstName, lastName } = await request.json();
  console.log(email, firstName, lastName);
  const user = await prisma.user.create({
    data: {
      clerkUserId: userId,
      email,
      name: `${firstName} ${lastName}`,
      starSignId: 1,
    },
  });

  return NextResponse.json(user);
}
