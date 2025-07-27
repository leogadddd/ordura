import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

await app.register(cors);

// Example route
app.get("/products", async () => {
  return await prisma.product.findMany();
});

app.listen({ port: 8000 }, () => {
  console.log("✅ Server running at http://localhost:8000");
});
