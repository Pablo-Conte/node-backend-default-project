FROM node:18.14.2-alpine3.17

WORKDIR /usr/app

COPY package.json ./

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "dev" ]
