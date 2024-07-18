# Stage 1: Base
FROM node:20-alpine AS base

# Install Python, make, and g++ for node-gyp
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Set the Python path for node-gyp
ENV PYTHON=/usr/bin/python3

# Install dependencies
RUN npm ci || (npm install && npm cache clean --force)

# Copy Prisma schema and generate client
COPY prisma ./prisma
RUN npx prisma generate

# Copy rest of the application code
COPY . .

# Stage 2: Development
FROM base AS development

# Expose development port
EXPOSE 3000

# Start Next.js in development mode
CMD ["npm", "run", "dev"]

# Stage 3: Builder
FROM base AS builder

# Build the Next.js application for production
RUN npm run build

# Stage 4: Production
FROM node:20-alpine AS production

# Install Python, make, and g++ for node-gyp (in case native modules need to be rebuilt)
RUN apk add --no-cache python3 make g++

# Set the Python path for node-gyp
ENV PYTHON=/usr/bin/python3

# Set working directory
WORKDIR /app

# Copy necessary files from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/prisma ./prisma

# Set environment variables for production
ENV NODE_ENV production

# Run Prisma migrations (optional)
RUN npx prisma migrate deploy

# Expose the port
EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "start"]
