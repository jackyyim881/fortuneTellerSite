import { promises as fs } from "fs";
export async function GET(request: Request) {
  const file = await fs.readFile(
    process.cwd() + "/public/zodiacs.json",
    "utf8"
  );
  console.log(file);
  return new Response(file, {
    status: 200,
  });
}
