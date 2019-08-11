#scripts responsáveis por construir o build da aplicação frontend
FROM node:8.16.0-alpine as builder
COPY package.json ./
RUN npm install && mkdir /sca-client && mv ./node_modules ./sca-client
WORKDIR /sca-client
COPY . .
RUN npm run build --prod

#scripts responsáveis por configurar o servidor nginx e expor a aplicação
FROM nginx:1.13.9-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf                                  
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /sca-client/dist/sca-client /usr/share/nginx/html/
COPY --from=builder /sca-client/entrypoint.sh /usr/share/nginx/
RUN chmod +x /usr/share/nginx/entrypoint.sh
CMD ["/bin/sh", "/usr/share/nginx/entrypoint.sh"]
