import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

(async () => {
  await app.register(cors, {
    origin: true, // dynamically reflect request origin
    credentials: true,
  });

  app.get("/api/test-connection", async (request, reply) => {
    return { message: "Hello from Ordura API!" };
  });

  app.listen({ port: 8000, host: "0.0.0.0" }, () => {
    console.log("✅ Server running at http://localhost:8000");
  });
})();
