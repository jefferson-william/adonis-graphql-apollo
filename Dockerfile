FROM node:latest

WORKDIR /app

EXPOSE 3333

ADD package.json /app

RUN npm install --silent

COPY . /app

CMD ["npm", "start"]
