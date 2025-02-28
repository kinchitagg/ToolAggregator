# Use Node.js LTS as base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Compile TypeScript
RUN npm run build

# Set environment variables (optional, override in Kubernetes)
ENV DB_HOST=mysql-container
ENV DB_USER=user
ENV DB_PASSWORD=password
ENV DB_NAME=mydb
ENV DB_PORT=3306

# Expose the app's port
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
