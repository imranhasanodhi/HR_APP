# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) for the backend and frontend
COPY package*.json ./

# Install dependencies for both backend and frontend
RUN npm install

# Copy the entire app (frontend + backend) to the container
COPY . .

# Expose the ports for both frontend and backend
EXPOSE 3000 3001

# Define the command to run both frontend (vite) and backend (json-server)
CMD ["npm", "run", "start"]
