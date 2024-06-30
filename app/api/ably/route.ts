import * as Ably from "ably";
import { currentUser } from "@clerk/nextjs/server";

export const GET = async (req: Request, res: Response) => {
  const user = await currentUser();

  const client = new Ably.Rest(process.env.NEXT_ABLY_API_KEY as string);
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: user?.username as string,
  });
  console.log(`Request: ${JSON.stringify(tokenRequestData)}`);
  return Response.json(tokenRequestData);
};
