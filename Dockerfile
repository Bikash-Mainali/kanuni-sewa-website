# Use an official Node runtime as a base image
FROM node:16.14.2 as node

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy the application files to the working directory
COPY . /usr/src/app

# Install app dependencies
RUN npm install

# Install angular cli
RUN npm install -g @angular/cli@16.2.12

# Expose the port the app runs on 
# Use localhost:4100 to expose the app from browser
# 4100 is the port of localhost and 4200 is the port service running on inside docker
EXPOSE 4100

#ng: Angular CLI command
#serve: Specifies that you want to serve the application
#--host 0.0.0.0: This parameter tells Angular CLI to bind to all network interfaces, allowing the application to be accessed from outside the container.
CMD ["ng", "serve", "--host", "0.0.0.0"]