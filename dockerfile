ARG NODE_VERSION=20.15.1

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

RUN npm install express

RUN npm install path

RUN npm install fs

COPY . .

EXPOSE 3000

CMD node app.js
