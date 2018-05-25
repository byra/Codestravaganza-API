FROM node:latest

RUN mkdir /app
WORKDIR /app
COPY ./package.json /app/
COPY ./src /app/

RUN npm install
EXPOSE 8282
CMD [ "npm", "start" ]