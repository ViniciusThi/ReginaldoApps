import { scorePassword } from "./scorer.js";

export default async function (context, req) {
  try {
    const { password } = req.body || {};
    const result = scorePassword(password || "");
    context.res = { status: 200, headers: { "Content-Type": "application/json" }, body: result };
  } catch {
    context.res = { status: 400, body: { error: "invalid input" } };
  }
}
