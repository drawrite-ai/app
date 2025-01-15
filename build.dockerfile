# 1. Base image: Use Debian-based Node.js LTS image
FROM node:23.6-slim AS builder

# 2. Set working directory
WORKDIR /app


# 4. Copy package files
COPY package.json yarn.lock ./

# 5. Install dependencies using Bun
RUN yarn install

# 6. Copy the rest of the application
COPY . .

# 7. Build the Next.js application
RUN yarn build

# ---------------------
# 8. Production image
FROM node:23.6-slim AS runner

# 9. Set working directory
WORKDIR /app

# 11. Copy necessary files from builder
COPY --from=builder /app ./

# 12. Expose port and run the app
EXPOSE 80
CMD ["yarn", "start", "-p", "80"]
