# # Stage 1: Build the React app
# FROM node:14-alpine as build

# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install --silent
# COPY . ./
# RUN npm run build

# # Stage 2: Serve the React app with Nginx
# FROM nginx:1.21-alpine

# COPY --from=build /app/build /usr/share/nginx/html
# COPY default.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Etherpad-lite dependencies
RUN npm install

# Copy the Etherpad server files to the container
COPY . .

# Expose the Etherpad server port (default is 9001)
EXPOSE 9001

# Start Etherpad-lite
CMD ["node"]
