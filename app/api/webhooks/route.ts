import { WebhookEvent } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { Webhook } from "svix";
import { headers } from "next/headers";

async function validateRequest(request: Request) {
  const payloadString = await request.text();
  const headerPayload = headers();

  const svixHeaders = {
    "svix-id": headerPayload.get("svix-id")!,
    "svix-timestamp": headerPayload.get("svix-timestamp")!,
    "svix-signature": headerPayload.get("svix-signature")!,
  };
  const wh = new Webhook(process.env.WEBHOOK_SECRET!);
  return wh.verify(payloadString, svixHeaders) as WebhookEvent;
}

export async function POST(request: Request) {
  const payload = await validateRequest(request);

  const user = await prisma.user.findUnique({
    where: {
      clerkUserId: payload.data?.id,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  console.log(payload);
  return Response.json({ received: true });
}

export async function GET() {
  return Response.json({ message: "Hello World!" });
}
