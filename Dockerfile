FROM node:19-alpine

COPY package.json /app/
COPY . /app/

WORKDIR /app


RUN npm i

CMD ["npm", "run", "dev"]