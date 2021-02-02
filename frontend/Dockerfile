FROM node:latest

RUN mkdir /usr/src/cache
WORKDIR /usr/src/cache

# Copy the project over and install node_modules
COPY package*.json ./

RUN apt-get update && apt-get install rsync -y

# RUN npm install
RUN npm config set strict-ssl false
RUN npm install

#Expose the correct port
EXPOSE 3000
#create app directory

RUN mkdir /usr/src/app
WORKDIR /usr/src/app