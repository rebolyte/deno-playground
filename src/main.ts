import { serve } from "./deps.ts";
// import { serve } from "http/server.ts";

const body = new TextEncoder().encode("Hello World\n");

const s = serve({ port: 8000 });

console.log("Listening on http://localhost:8000/");

for await (const req of s) {
  req.respond({ body });
}
