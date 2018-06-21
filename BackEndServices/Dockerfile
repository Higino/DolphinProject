FROM node:7

WORKDIR /app

COPY ./apiserver/package.json /app
COPY ./apiserver /app
RUN cd /app && npm install



CMD ["npm", "start"]

EXPOSE 9000