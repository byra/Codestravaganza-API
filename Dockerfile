FROM node:latest

RUN mkdir /app
WORKDIR /app
COPY ./package.json /app/
COPY ./src /app/

RUN npm install

CMD [ "npm", "start" ]