// // pages/api/signup.ts

// import { NextApiRequest, NextApiResponse } from "next";
// import prisma from "@/lib/prisma";
// import bcrypt from "bcrypt";
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const { name, email, starSignId } = req.body;
//     const existingUser = await prisma.user.findUnique({
//       where: {
//         email,
//       },
//     });

//     if (!existingUser) {
//       return res.status(409).json({ error: "User already exists" });
//     }
//     const hashedUserId = await bcrypt.hash(userId, 10);

//     const newUser = await prisma.user.create({
//       data: {
//         name,
//         email,
//         clerkUserId: hashedUserId,
//       },
//     });
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }
