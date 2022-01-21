FROM node:14-alpine3.14
COPY . .
RUN npm install
RUN npm run build:local-docker