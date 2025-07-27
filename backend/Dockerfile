FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and lock files
COPY package*.json ./

# Install dependencies (including devDependencies for ts-node-dev)
RUN npm install

# Install ts-node-dev globally (optional but avoids local binary path issues)
RUN npm install -g ts-node-dev

# Copy source files
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose port
EXPOSE 8000

# Start in dev mode with hot reload
CMD ["npm", "run", "dev"]
