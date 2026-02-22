FROM node:22-alpine

RUN apk update
RUN apk upgrade --available
RUN apk add chromium
RUN apk add git

RUN npm install -g @angular/cli@20