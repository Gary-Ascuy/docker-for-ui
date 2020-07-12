FROM nginx:1.19-alpine
LABEL maintainer="Gary Ascuy<gary.ascuy@gmail.com>"

WORKDIR /usr/share/nginx/html
COPY ./build .
COPY ./build/index.html /index.template.html

ENV BACKEND_API_BASE_URL http://geolocation-db.com/json
CMD sh -c "envsubst < /index.template.html > ./index.html && exec nginx -g 'daemon off;'"
