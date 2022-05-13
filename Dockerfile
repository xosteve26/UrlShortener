FROM node:14.16.0
WORKDIR /usr/src/app/api
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
ARG URI
ENV MONGO_URI=$URI
CMD ["npm", "run","start"]
