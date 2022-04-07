FROM node:16.14-alpine as builder
MAINTAINER Felix Steinke <https://github.com/felixsteinke>

WORKDIR /app
COPY ./ .

RUN npm install
RUN npm run build --prod

FROM nginx:1.21-alpine as runner
MAINTAINER Felix Steinke <https://github.com/felixsteinke>

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/dynamic-query-ui /usr/share/nginx/html

RUN chgrp -R root /var/cache/nginx /var/run /var/log/nginx && \
    chmod -R 770 /var/cache/nginx /var/run /var/log/nginx

EXPOSE 4200
