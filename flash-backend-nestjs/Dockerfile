# ---- Stage 1: Builder ----
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency files first for better layer caching
COPY package.json package-lock.json ./

# Install ALL dependencies (including devDependencies needed for build)
RUN npm ci

# Copy source code
COPY . .

# Remove any stale incremental build cache
RUN rm -f *.tsbuildinfo

# Build the application using tsc directly (bypasses nest build cache issues)
RUN ./node_modules/.bin/tsc -p tsconfig.build.json --noEmit false --incremental false --noEmitOnError false

# Verify the build output exists (will fail the build if dist is empty)
RUN test -f dist/main.js || (echo "ERROR: dist/main.js was not generated!" && exit 1)

# ---- Stage 2: Production Runner ----
FROM node:22-alpine AS runner

WORKDIR /app

# Copy only production dependency manifests
COPY package.json package-lock.json ./

# Install ONLY production dependencies
RUN npm ci --omit=dev

# Copy the compiled output from the builder stage
COPY --from=builder /app/dist ./dist

# Expose the port the app runs on
EXPOSE 8000

# Start the production server
CMD ["node", "dist/main.js"]
