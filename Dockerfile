FROM node:latest

WORKDIR /app

EXPOSE 3333

ADD package.json /app

RUN npm install --silent

RUN npm i -g @adonisjs/cli

COPY . /app

CMD ["npm", "start"]
