FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app/client
WORKDIR /usr/src/app/client

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "npm", "start" ]
