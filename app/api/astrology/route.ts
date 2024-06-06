// import { NextRequest, NextResponse } from "next/server";
// export const runtime = "nodejs";

// export async function POST(req: NextRequest) {
//   const question = req.body;
//   console.log(question);
//   const assistant_question =
//     "astrology question here to detect the zodiac sign of the user and the compatibility with another user.";

//   // const userQuestion = req.body;
//   if (!question) {
//     return { body: JSON.stringify({ error: "Question is required" }) };
//   }

//   const response = await fetch(`${process.env.BASE_URL}/chat/completions`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${process.env.API_KEY}`, // Assuming the API key goes here, adjust if necessary
//     },
//     body: JSON.stringify({
//       model: "meta/llama3-70b-instruct",
//       messages: [
//         { role: "assistant", content: assistant_question },
//         {
//           role: "user",
//           content: question,
//         },
//       ],
//       temperature: 0.5,
//       top_p: 0.7,
//       max_tokens: 1024,
//       stream: true,
//     }),
//   });
//   return NextResponse.json(response || { error: "No response" });
// }

// export async function GET() {
//   const res = await openai.get(
//     "https://integrate.api.nvidia.com/v1/chat/completions",
//     {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.API_KEY}`,
//       },
//     }
//   );

//   return Response.json({ res: res });
// }
