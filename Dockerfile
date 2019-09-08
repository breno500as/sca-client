#scripts responsáveis por construir o build da aplicação frontend
FROM node:8.16.0-alpine as builder
COPY package.json ./
RUN npm install && mkdir /sca-client && mv ./node_modules ./sca-client
WORKDIR /sca-client
COPY . .
RUN npm run build --prod