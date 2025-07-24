# Stage 1: Build the Angular application
FROM node:22-alpine AS build

WORKDIR /app

# Argument to receive the API_URL from docker-compose
ARG API_URL

# Copy package configuration files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Replace the API_URL placeholder in the environment file
# Make sure the environment.ts file has a placeholder like [API_URL]
RUN sed -i "s|\[API_URL\]|$API_URL|g" src/environments/environment.prod.ts

# Build the application for production
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the build output from the build stage
COPY --from=build /app/dist/dashboard-sql-report/browser /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80
