# Use the official Node.js image as the base image
FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --quiet


COPY ./prisma prisma
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
