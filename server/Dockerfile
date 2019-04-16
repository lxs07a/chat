FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app/server
WORKDIR /usr/src/app/server

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3030
CMD [ "npm", "start" ]
