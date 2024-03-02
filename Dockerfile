FROM node:21-alpine

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL $REACT_APP_API_URL
WORKDIR /usr/src/app/front
COPY . .
RUN npm ci --no-audit --silent --ignore-scripts
RUN npm run build
RUN rm -rf src
RUN rm -rf node_modules
RUN ls
RUN npm install -g serve
EXPOSE 3000
CMD [ "serve", "-s", "build" ]
