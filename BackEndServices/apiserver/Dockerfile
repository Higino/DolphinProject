FROM node:7

WORKDIR /apiserver

COPY ./package.json /apiserver
COPY api-server.js /apiserver
COPY ./app/ /apiserver/app/
RUN npm install



CMD ["npm", "start"]

EXPOSE 9000