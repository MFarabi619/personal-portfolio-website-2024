# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /src/app

# Install pnpm globally
RUN npm install -g pnpm@8.15.6

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm i

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000
EXPOSE 6006

# Default command to start both Next.js and Storybook
CMD ["sh", "-c", "pnpm dev & pnpm run storybook"]
