import { json, serve } from "https://deno.land/x/sift@0.3.0/mod.ts";

serve({
  "/": () => json({ message: "hello world" }),
  "api/create": () => json({ message: "created" }, { status: 201 }),
});
