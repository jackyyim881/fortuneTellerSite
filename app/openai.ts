import OpenAI from "openai";
import { env } from "process";
export const openai = new OpenAI({
  apiKey: env.API_KEY,
  baseURL: env.BASE_URL,
});
