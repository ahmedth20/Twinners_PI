FROM node:18-alpine
WORKDIR /app
COPY . /app
RUN npm install --legacy-peer-deps
RUN npm run build
RUN npm install -g nodemon
EXPOSE 5000
CMD ["npm", "start"]
