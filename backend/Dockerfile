FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

# Optional: avoids issues with missing binary paths
RUN npm install -g ts-node-dev

COPY . .

# Prisma (if used)
RUN npx prisma generate

EXPOSE 8000

CMD ["ts-node-dev", "--respawn", "--transpile-only", "src/server.ts"]
