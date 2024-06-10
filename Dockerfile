# Use the official Node.js image as the base image
FROM node:20-alpine as base
WORKDIR /app

COPY package*.json ./
RUN npm ci --quiet

COPY ./prisma prisma
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Development stage
FROM base as dev
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production stage
FROM base as prod
COPY --from=base /app/node_modules ./node_modules
ENV NODE_ENV=production
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]