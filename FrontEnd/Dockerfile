FROM node:7

WORKDIR /frontendserver

COPY ./package.json /frontendserver
COPY ./public/ /frontendserver/public/
COPY ./src/ /frontendserver/src/
RUN npm install --production



CMD ["npm", "start"]

EXPOSE 3000